/**
 * RuheOase Web Audio API Synthesizer (Optimiert)
 * Synthesizes calming ambient soundscapes, dynamic FM wind chimes, 
 * and biofeedback tones completely offline with smooth zero-click fades.
 */

class AudioSynthesizer {
    constructor() {
        this.ctx = null;
        this.sources = {};
        this.gains = {};
        this.filters = {};
        this.lfos = {};
        this.chimesInterval = null;
        
        // Volume states (0 to 1)
        this.volumes = {
            rain: 0.0,
            waves: 0.0,
            wind: 0.0,
            brown: 0.0,
            chimes: 0.0,
            breathing: 0.4
        };

        // Breathing tone nodes
        this.breathingOsc = null;
        this.subOsc = null;
        this.breathingFilter = null;
        this.breathingGain = null;

        // Pentatonic Scale for Chimes (C5, D5, E5, G5, A5, C6)
        this.chimePitches = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    }

    init() {
        if (this.ctx) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) {
            console.error("Web Audio API not supported in this browser.");
            return;
        }
        this.ctx = new AudioContextClass();
    }

    resumeContext() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // White Noise Buffer Generator
    createNoiseBuffer(type = 'white') {
        const bufferSize = 4 * this.ctx.sampleRate;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);

        if (type === 'white') {
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
        } else if (type === 'pink') {
            let b0, b1, b2, b3, b4, b5, b6;
            b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                b0 = 0.99886 * b0 + white * 0.0555179;
                b1 = 0.99332 * b1 + white * 0.0750759;
                b2 = 0.96900 * b2 + white * 0.1538520;
                b3 = 0.86650 * b3 + white * 0.3104856;
                b4 = 0.55000 * b4 + white * 0.5329522;
                b5 = -0.7616 * b5 - white * 0.0168980;
                data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
                data[i] *= 0.11; 
                b6 = white * 0.115926;
            }
        } else if (type === 'brown') {
            let lastOut = 0.0;
            for (let i = 0; i < bufferSize; i++) {
                const white = Math.random() * 2 - 1;
                data[i] = (lastOut + (0.02 * white)) / 1.02;
                lastOut = data[i];
                data[i] *= 3.5; 
            }
        }
        return buffer;
    }

    // Smooth Fade-In helper
    fadeInNode(gainNode, targetVolume, duration = 0.4) {
        const now = this.ctx.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(targetVolume, now + duration);
    }

    // Smooth Fade-Out helper
    fadeOutAndStop(source, gainNode, duration = 0.4, extraNode = null) {
        if (!gainNode || !source) return;
        const now = this.ctx.currentTime;
        try {
            gainNode.gain.cancelScheduledValues(now);
            gainNode.gain.setValueAtTime(gainNode.gain.value, now);
            gainNode.gain.linearRampToValueAtTime(0, now + duration);
            
            source.stop(now + duration);
            if (extraNode) {
                extraNode.stop(now + duration);
            }
        } catch(e) {
            console.warn("Error fading out node", e);
        }
    }

    // === RAIN SYNTHESIZER ===
    startRain() {
        this.resumeContext();
        if (this.sources.rain) return;

        const rainSource = this.ctx.createBufferSource();
        rainSource.buffer = this.createNoiseBuffer('pink');
        rainSource.loop = true;

        const rainFilter = this.ctx.createBiquadFilter();
        rainFilter.type = 'bandpass';
        rainFilter.frequency.value = 1000;
        rainFilter.Q.value = 1.0;

        const rainGain = this.ctx.createGain();
        rainGain.gain.value = 0.0; // start silent for fade

        const modulator = this.ctx.createOscillator();
        modulator.frequency.value = 0.25; 
        const modulatorGain = this.ctx.createGain();
        modulatorGain.gain.value = 0.08;

        modulator.connect(modulatorGain);
        modulatorGain.connect(rainGain.gain);
        modulator.start();

        rainSource.connect(rainFilter);
        rainFilter.connect(rainGain);
        rainGain.connect(this.ctx.destination);

        rainSource.start();
        this.fadeInNode(rainGain, this.volumes.rain);

        this.sources.rain = rainSource;
        this.gains.rain = rainGain;
        this.lfos.rainMod = modulator;
    }

    stopRain() {
        if (this.sources.rain) {
            this.fadeOutAndStop(this.sources.rain, this.gains.rain, 0.4, this.lfos.rainMod);
            delete this.sources.rain;
            delete this.gains.rain;
            delete this.lfos.rainMod;
        }
    }

    setRainVolume(val) {
        this.volumes.rain = parseFloat(val);
        if (this.gains.rain) {
            this.gains.rain.gain.setTargetAtTime(this.volumes.rain, this.ctx.currentTime, 0.15);
        }
    }

    // === OCEAN WAVES SYNTHESIZER ===
    startWaves() {
        this.resumeContext();
        if (this.sources.waves) return;

        const waveSource = this.ctx.createBufferSource();
        waveSource.buffer = this.createNoiseBuffer('pink');
        waveSource.loop = true;

        const waveFilter = this.ctx.createBiquadFilter();
        waveFilter.type = 'lowpass';
        waveFilter.frequency.value = 350;

        const waveGain = this.ctx.createGain();
        waveGain.gain.value = 0.0; 

        const waveLFO = this.ctx.createOscillator();
        waveLFO.frequency.value = 0.08; 
        
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = this.volumes.waves * 0.7; 
        
        waveLFO.connect(lfoGain);
        lfoGain.connect(waveGain.gain);

        const filterLfoGain = this.ctx.createGain();
        filterLfoGain.gain.value = 250; 
        waveLFO.connect(filterLfoGain);
        filterLfoGain.connect(waveFilter.frequency);

        waveSource.connect(waveFilter);
        waveFilter.connect(waveGain);
        waveGain.connect(this.ctx.destination);

        waveSource.start();
        waveLFO.start();

        // Fade LFO amplitude slowly rather than starting wave at full swell
        lfoGain.gain.setValueAtTime(0, this.ctx.currentTime);
        lfoGain.gain.linearRampToValueAtTime(this.volumes.waves * 0.7, this.ctx.currentTime + 1.0);

        this.sources.waves = waveSource;
        this.gains.waves = waveGain;
        this.lfos.wavesLfo = waveLFO;
        this.gains.wavesLfoGain = lfoGain;
    }

    stopWaves() {
        if (this.sources.waves) {
            this.fadeOutAndStop(this.sources.waves, this.gains.waves, 0.4, this.lfos.wavesLfo);
            delete this.sources.waves;
            delete this.gains.waves;
            delete this.lfos.wavesLfo;
            delete this.gains.wavesLfoGain;
        }
    }

    setWavesVolume(val) {
        this.volumes.waves = parseFloat(val);
        if (this.gains.wavesLfoGain) {
            this.gains.wavesLfoGain.gain.setTargetAtTime(this.volumes.waves * 0.7, this.ctx.currentTime, 0.15);
        }
    }

    // === FOREST WIND SYNTHESIZER ===
    startWind() {
        this.resumeContext();
        if (this.sources.wind) return;

        const windSource = this.ctx.createBufferSource();
        windSource.buffer = this.createNoiseBuffer('pink');
        windSource.loop = true;

        const windFilter = this.ctx.createBiquadFilter();
        windFilter.type = 'bandpass';
        windFilter.frequency.value = 400;
        windFilter.Q.value = 2.0;

        const windGain = this.ctx.createGain();
        windGain.gain.value = 0.0;

        const windLFO = this.ctx.createOscillator();
        windLFO.frequency.value = 0.07; 
        const windLfoGain = this.ctx.createGain();
        windLfoGain.gain.value = 180; 

        windLFO.connect(windLfoGain);
        windLfoGain.connect(windFilter.frequency);

        const windGainLFO = this.ctx.createOscillator();
        windGainLFO.frequency.value = 0.11;
        const windGainLfoGain = this.ctx.createGain();
        windGainLfoGain.gain.value = 0.0; // modulated

        windGainLFO.connect(windGainLfoGain);
        windGainLfoGain.connect(windGain.gain);

        windSource.connect(windFilter);
        windFilter.connect(windGain);
        windGain.connect(this.ctx.destination);

        windSource.start();
        windLFO.start();
        windGainLFO.start();

        this.fadeInNode(windGain, this.volumes.wind);
        windGainLfoGain.gain.linearRampToValueAtTime(this.volumes.wind * 0.4, this.ctx.currentTime + 0.4);

        this.sources.wind = windSource;
        this.gains.wind = windGain;
        this.lfos.windLfo = windLFO;
        this.lfos.windGainLfo = windGainLFO;
        this.gains.windGainLfoGain = windGainLfoGain;
    }

    stopWind() {
        if (this.sources.wind) {
            this.fadeOutAndStop(this.sources.wind, this.gains.wind, 0.4, this.lfos.windLfo);
            try { this.lfos.windGainLfo.stop(); } catch(e){}
            delete this.sources.wind;
            delete this.gains.wind;
            delete this.lfos.windLfo;
            delete this.lfos.windGainLfo;
            delete this.gains.windGainLfoGain;
        }
    }

    setWindVolume(val) {
        this.volumes.wind = parseFloat(val);
        if (this.gains.wind) {
            this.gains.wind.gain.setTargetAtTime(this.volumes.wind, this.ctx.currentTime, 0.15);
        }
        if (this.gains.windGainLfoGain) {
            this.gains.windGainLfoGain.gain.setTargetAtTime(this.volumes.wind * 0.4, this.ctx.currentTime, 0.15);
        }
    }

    // === BROWNIAN CALM NOISE ===
    startBrownian() {
        this.resumeContext();
        if (this.sources.brown) return;

        const brownSource = this.ctx.createBufferSource();
        brownSource.buffer = this.createNoiseBuffer('brown');
        brownSource.loop = true;

        const brownFilter = this.ctx.createBiquadFilter();
        brownFilter.type = 'lowpass';
        brownFilter.frequency.value = 250; 

        const brownGain = this.ctx.createGain();
        brownGain.gain.value = 0.0;

        brownSource.connect(brownFilter);
        brownFilter.connect(brownGain);
        brownGain.connect(this.ctx.destination);

        brownSource.start();
        this.fadeInNode(brownGain, this.volumes.brown);

        this.sources.brown = brownSource;
        this.gains.brown = brownGain;
    }

    stopBrownian() {
        if (this.sources.brown) {
            this.fadeOutAndStop(this.sources.brown, this.gains.brown, 0.4);
            delete this.sources.brown;
            delete this.gains.brown;
        }
    }

    setBrownianVolume(val) {
        this.volumes.brown = parseFloat(val);
        if (this.gains.brown) {
            this.gains.brown.gain.setTargetAtTime(this.volumes.brown, this.ctx.currentTime, 0.15);
        }
    }

    // === DYNAMIC FM WIND CHIMES ===
    startChimes() {
        this.resumeContext();
        if (this.chimesInterval) return;
        
        // Schedule random chime bell triggerings
        this.chimesInterval = setInterval(() => {
            if (this.volumes.chimes > 0 && Math.random() > 0.4) {
                // Select a random frequency from the pentatonic scale
                const pitchIndex = Math.floor(Math.random() * this.chimePitches.length);
                const freq = this.chimePitches[pitchIndex];
                this.triggerChime(freq);
            }
        }, 3000 + Math.random() * 4000); // Trigger every 3 to 7 seconds
    }

    stopChimes() {
        if (this.chimesInterval) {
            clearInterval(this.chimesInterval);
            this.chimesInterval = null;
        }
    }

    setChimesVolume(val) {
        this.volumes.chimes = parseFloat(val);
        if (this.volumes.chimes > 0) {
            this.startChimes();
        } else {
            this.stopChimes();
        }
    }

    triggerChime(freq) {
        if (this.volumes.chimes <= 0 || !this.ctx) return;
        
        const now = this.ctx.currentTime;
        
        // --- FM Bell Synthesis ---
        // Carrier (sine wave)
        const carrier = this.ctx.createOscillator();
        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(freq, now);
        
        // Modulator (sine wave at a multiple harmonic)
        const modulator = this.ctx.createOscillator();
        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(freq * 1.5, now);
        
        // Modulator gain (defines index of modulation, creating "metallic clink")
        const modGain = this.ctx.createGain();
        modGain.gain.setValueAtTime(freq * 0.8, now); // strong start
        modGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15); // rapid decay
        
        // Bell main volume envelope
        const bellGain = this.ctx.createGain();
        const duration = 1.5 + Math.random() * 1.5; // Sustain 1.5 to 3 seconds
        
        bellGain.gain.setValueAtTime(0, now);
        bellGain.gain.linearRampToValueAtTime(this.volumes.chimes * 0.4, now + 0.005); // fast attack
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // slow release
        
        // Connections
        modulator.connect(modGain);
        modGain.connect(carrier.frequency); // FM modulation
        carrier.connect(bellGain);
        bellGain.connect(this.ctx.destination);
        
        // Start & Stop oscillators
        carrier.start(now);
        modulator.start(now);
        
        carrier.stop(now + duration + 0.1);
        modulator.stop(now + duration + 0.1);
    }

    // === RESONANT BREATHING BIOFEEDBACK TONE ===
    startBreathingTone() {
        this.resumeContext();
        if (this.breathingOsc) return;

        this.breathingOsc = this.ctx.createOscillator();
        this.breathingOsc.type = 'triangle';
        this.breathingOsc.frequency.value = 150; 

        this.breathingFilter = this.ctx.createBiquadFilter();
        this.breathingFilter.type = 'lowpass';
        this.breathingFilter.frequency.value = 300;

        this.breathingGain = this.ctx.createGain();
        this.breathingGain.gain.value = 0.0; 

        this.subOsc = this.ctx.createOscillator();
        this.subOsc.type = 'sine';
        this.subOsc.frequency.value = 75; 

        this.breathingOsc.connect(this.breathingFilter);
        this.subOsc.connect(this.breathingFilter);
        this.breathingFilter.connect(this.breathingGain);
        this.breathingGain.connect(this.ctx.destination);

        this.breathingOsc.start();
        this.subOsc.start();

        // Fade in breath tone
        this.breathingGain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.3);
    }

    stopBreathingTone() {
        if (this.breathingOsc) {
            const now = this.ctx.currentTime;
            try {
                this.breathingGain.gain.cancelScheduledValues(now);
                this.breathingGain.gain.linearRampToValueAtTime(0, now + 0.3);
                
                this.breathingOsc.stop(now + 0.3);
                this.subOsc.stop(now + 0.3);
            } catch(e){}
            
            // Cleanup references after fade completes
            setTimeout(() => {
                this.breathingOsc = null;
                this.subOsc = null;
                this.breathingFilter = null;
                this.breathingGain = null;
            }, 300);
        }
    }

    setBreathingToneState(state, transitionDuration = 5.0) {
        if (!this.breathingOsc || !this.breathingGain) return;

        const now = this.ctx.currentTime;

        if (state === 'inhale') {
            this.breathingOsc.frequency.cancelScheduledValues(now);
            this.breathingOsc.frequency.exponentialRampToValueAtTime(220, now + transitionDuration); 
            this.subOsc.frequency.cancelScheduledValues(now);
            this.subOsc.frequency.exponentialRampToValueAtTime(110, now + transitionDuration);

            this.breathingGain.gain.cancelScheduledValues(now);
            this.breathingGain.gain.linearRampToValueAtTime(this.volumes.breathing, now + transitionDuration);
        } else if (state === 'exhale') {
            this.breathingOsc.frequency.cancelScheduledValues(now);
            this.breathingOsc.frequency.exponentialRampToValueAtTime(130.81, now + transitionDuration); 
            this.subOsc.frequency.cancelScheduledValues(now);
            this.subOsc.frequency.exponentialRampToValueAtTime(65.4, now + transitionDuration);

            this.breathingGain.gain.cancelScheduledValues(now);
            this.breathingGain.gain.linearRampToValueAtTime(this.volumes.breathing * 0.2, now + transitionDuration);
        } else if (state === 'hold') {
            this.breathingOsc.frequency.cancelScheduledValues(now);
            this.subOsc.frequency.cancelScheduledValues(now);
            this.breathingGain.gain.cancelScheduledValues(now);
            this.breathingGain.gain.linearRampToValueAtTime(this.volumes.breathing * 0.6, now + transitionDuration);
        }
    }

    setBreathingVolume(val) {
        this.volumes.breathing = parseFloat(val);
    }

    playNotificationSound() {
        this.resumeContext();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const freq = 659.25; // E5 pitch
        
        const carrier = this.ctx.createOscillator();
        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(freq, now);
        
        const modulator = this.ctx.createOscillator();
        modulator.type = 'sine';
        modulator.frequency.setValueAtTime(freq * 1.5, now);
        
        const modGain = this.ctx.createGain();
        modGain.gain.setValueAtTime(freq * 0.8, now);
        modGain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        
        const bellGain = this.ctx.createGain();
        const duration = 1.0;
        
        bellGain.gain.setValueAtTime(0, now);
        bellGain.gain.linearRampToValueAtTime(0.12, now + 0.005); // fixed gentle volume
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        
        modulator.connect(modGain);
        modGain.connect(carrier.frequency);
        carrier.connect(bellGain);
        bellGain.connect(this.ctx.destination);
        
        carrier.start(now);
        modulator.start(now);
        
        carrier.stop(now + duration + 0.1);
        modulator.stop(now + duration + 0.1);
    }

    stopAll() {
        this.stopRain();
        this.stopWaves();
        this.stopWind();
        this.stopBrownian();
        this.stopChimes();
        this.stopBreathingTone();
    }
}

window.synth = new AudioSynthesizer();
