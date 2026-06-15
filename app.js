/**
 * RuheOase App Core Controller (Optimiert)
 * Handles SPA navigation, local storage state, clinical calculations,
 * DE/AR translation engines, RTL adjustments, HiDPI canvas animations, 
 * Worry Archives, mobile haptics, and the Smart Advisor.
 */

// L10n Dictionary: Complete German & Arabic Translations
const L10N_DICT = {
    de: {
        logo: "RuheOase",
        nav_dashboard: "Oase (Dashboard)",
        nav_parking: "Sorgen-Parkplatz",
        nav_experiments: "CBT Experimente",
        nav_breath: "Atem & Vagus",
        nav_defusion: "Gedanken-Strom",
        nav_knowledge: "Wissens-Oase",
        nav_progress: "Fortschritt (GAD-7)",
        nav_settings: "Einstellungen",
        nav_sos: "SOS Hilfe",
        nav_coach: "Gedanken-Coach",
        coach_title: "Gedanken-Coach (CBT)",
        coach_subtitle: "Kognitive Restrukturierung automatischer Gedanken mittels sokratischer Dialogführung.",
        coach_name: "Oasen-Begleiter",
        coach_status_online: "Hinterfragt mit dir Gedanken",
        coach_send_btn: "Senden",
        coach_archive_title: "Umformulierte Gedanken",
        coach_archive_desc: "Konsolidierte kognitive Alternativen zur Reduktion perseverativer Gedankenmuster.",
        coach_history_empty: "Noch keine Gedanken umformuliert.",
        coach_delete_btn: "Löschen",
        coach_send_defusion_btn: "Treiben lassen 🍃",
        
        greeting_morning: "Guten Morgen",
        greeting_noon: "Guten Mittag",
        greeting_afternoon: "Schönen Nachmittag",
        greeting_evening: "Guten Abend",
        greeting_night: "Gute Nacht",
        subtitle: "Klinisch fundierte Werkzeuge zur Regulation des autonomen Nervensystems und metakognitiven Restrukturierung.",
        
        daily_reminder: "Tägliche Genesungs-Mitteilung",
        checkin_title: "Check-In",
        checkin_sub: "Wie fühlst du dich in diesem Moment?",
        mood_1: "Sehr unruhig",
        mood_2: "Unruhig",
        mood_3: "Neutral",
        mood_4: "Ruhig",
        mood_5: "Sehr ruhig",
        
        widget_parked: "Sorgen-Parkplatz",
        widget_parked_sub: "Sorgen geparkt",
        widget_sorgenzeit: "Nächste Sorgenzeit",
        widget_sorgenzeit_sub: "Täglich um",
        widget_progress: "Genesungs-Status",
        
        sofothilfen_title: "Sofort-Hilfen & Übungen",
        card_breath_desc: "Senke deinen biologischen Puls und stimuliere den Vagusnerv, um körperliche Panik abzuwehren.",
        card_defusion_desc: "Lerne kognitive Entschärfung (ACT), indem du sorgenvolle Gedanken auf Blättern im Fluss treiben lässt.",
        card_sos_desc: "Akute Erdungsübungen (5-4-3-2-1), Notruf-Kontakte und Krisen-Helplines auf einen Blick.",
        
        advisor_title: "Therapie-Berater (Smart Advisor)",
        advisor_evaluating: "Analysiere deinen Genesungsverlauf...",
        
        parking_title: "Sorgen-Parkplatz & Sorgenzeit",
        parking_subtitle: "Strategischer Sorgenaufschub (MCT). Begrenze die kognitive Verarbeitungszeit von Metasorgen zur Stärkung der exekutiven Aufmerksamkeitskontrolle.",
        parking_box_title: "Neue Sorge parken",
        parking_label: "Was beschäftigt deinen Geist gerade?",
        parking_placeholder: "Dokumentiere den antizipierten Sorgen-Trigger für die spätere metakognitive Analyse.",
        parking_submit: "Sorge sicher parken 📥",
        parking_overview: "Parkplatz-Übersicht",
        parking_start_btn: "Sorgenzeit starten 🌅",
        parking_empty: "Keine geparkten Sorgen. Dein Kopf ist frei!",
        
        worry_time_active: "Aktive Sorgenzeit",
        worry_time_abort: "Abbrechen",
        worry_control_question: "Kannst du dieses Problem JETZT direkt beeinflussen oder lösen?",
        worry_control_yes: "Ja (Produktive Sorge)",
        worry_control_no: "Nein (Improduktive Sorge)",
        worry_action_title: "Aktionsplan erstellen",
        worry_action_desc: "Da du dieses Problem beeinflussen kannst, lass uns einen ersten, winzigen Schritt definieren.",
        worry_action_label: "Was ist der allerkleinste erste Schritt, den du HEUTE tun kannst?",
        worry_action_placeholder: "z. B. E-Mail senden, Termin vereinbaren...",
        worry_action_save: "Schritt speichern & Sorge lösen",
        worry_defusion_title: "Kognitive Entschärfung",
        worry_defusion_desc: "Da dieser Gedanke unkontrollierbare Variablen betrifft, wird er durch kognitive Entschärfung (Defusion) dissoziiert.",
        worry_defusion_release: "Sorge ins Universum loslassen ✨",
        worry_complete_title: "Sorgenzeit erfolgreich beendet!",
        worry_complete_desc: "Sorgenzeit beendet. Du hast deine kognitive Belastung strukturiert bewertet, Lösungspläne konsolidiert oder dich in metakognitiver Loslösung geübt.",
        worry_complete_btn: "Zurück zum Sorgen-Parkplatz",
        
        exp_title: "Verhaltensexperimente",
        exp_subtitle: "Planung hypothesengeleiteter Verhaltensexperimente zur empirischen Falsifizierung dysfunktionaler Annahmen.",
        exp_active: "Aktive Verhaltensexperimente",
        exp_new_btn: "Neues Experiment planen 🧪",
        exp_empty: "Keine aktiven Experimente. Starte eins, um deine Ängste aktiv auf die Probe zu stellen!",
        exp_completed_title: "Abgeschlossene Lektionen & Erkenntnisse",
        exp_no_completed: "Noch keine abgeschlossenen Experimente vorhanden.",
        
        breath_title: "Atem-Kohärenz & Vagus-Bremse",
        breath_subtitle: "Modulation der sympathovagalen Balance. Optimiere die Herzfrequenzvariabilität (HRV) und fördere die respiratorische Sinusarrhythmie.",
        breath_pattern_lbl: "Atem-Muster",
        breath_duration_lbl: "Sitzungsdauer",
        breath_coherence_lbl: "Physiologische Kohärenz",
        breath_sound_lbl: "Soothing Sound Guide (Audio-Führung)",
        breath_start_btn: "Sitzung starten",
        breath_stop_btn: "Sitzung beenden",
        breath_ready: "Bereit",
        breath_inhale: "Einatmen",
        breath_hold: "Halten",
        breath_exhale: "Ausatmen",
        
        somatic_title: "Körper-Anker (Somatic)",
        somatic_subtitle: "Direkte Stimulation des parasympathischen Nervensystems zur Absenkung des physiologischen Arousal-Niveaus.",
        somatic_select_lbl: "Wähle eine Somatische Übung:",
        somatic_vagus_opt: "Vagus-Augen-Shifting (Blick-Entlastung)",
        somatic_sigh_opt: "Physiologischer Seufzer (Lungenbelüftung)",
        somatic_grounding_opt: "5-4-3-2-1 Physische Erdung",
        somatic_tapping_opt: "EFT Meridian-Klopfen",
        tapping_title: "EFT Meridian-Klopfen",
        tapping_desc: "EFT (Emotional Freedom Technique) reduziert Angst durch das Beklopfen von Meridianpunkten. Formuliere deine Belastung und tippe jeweils 7-mal rhythmisch auf das angezeigte Feld, während du den Satz innerlich oder laut wiederholst.",
        tapping_phrase_lbl: "Deine Sorge/Belastung (z. B. 'Dieses Engegefühl in der Brust'):",
        tapping_pad_lbl: "Tippen",
        tapping_stop_btn: "Abbrechen",
        
        vagus_title: "Vagus-Blick-Entlastung",
        vagus_desc: "Induktion des okulokardialen Reflexes zur Vagusstimulation (Polyvagal-Theorie).<br><br>1. Halte deinen Kopf gerade.<br>2. Folge mit den Augen dem wandernden Punkt ganz nach rechts.<br>3. Halte den Blick dort für 30 Sekunden, bis ein automatisches Seufzen oder Gähnen einsetzt.<br>4. Wiederhole das Gleiche auf der linken Seite.",
        vagus_start: "Übung starten",
        vagus_stop: "Übung beenden",
        vagus_look_right: "Blicke ganz nach RECHTS und halte deinen Kopf gerade",
        vagus_look_left: "Blicke ganz nach LINKS und halte deinen Kopf gerade",
        vagus_center: "Blicke in die Mitte und entspanne dich",
        vagus_done: "Übung beendet. Spürst du ein Gähnen, Seufzen oder Schlucken? Das ist das Signal der Entspannung!",
        
        sigh_title: "Physiologischer Seufzer",
        sigh_desc: "Physiologischer Doppelseufzer zur schnellen Hyperkapnie-Kompensation und pulmonalen Alveolar-Inflation.<br><br>1. Atme tief durch die Nase ein.<br>2. Atme am Ende noch einmal ganz kurz und fest zusätzlich ein (um die Lungenbläschen voll aufzublähen).<br>3. Atme extrem langsam und vollständig durch den Mund aus. Wiederhole dies 3-mal.",
        
        grounding_title: "Sensorische Erdung",
        grounding_desc: "Klicke die Sinne durch und benenne Objekte in deiner Umgebung, um dein Bewusstsein ins Hier und Jetzt zurückzubringen.",
        grounding_see: "5 Dinge, die du SEHEN kannst:",
        grounding_feel: "4 Dinge, die du FÜHLEN kannst:",
        grounding_hear: "3 Dinge, die du HÖREN kannst:",
        grounding_smell: "2 Dinge, die du RIECHEN kannst:",
        grounding_taste: "1 Ding, das du SCHMECKEN kannst:",
        grounding_btn_see: "Sehen",
        grounding_btn_feel: "Fühlen",
        grounding_btn_hear: "Hören",
        grounding_btn_smell: "Riechen",
        grounding_btn_taste: "Schmecken",
        
        defusion_title: "Gedanken-Strom (ACT Defusion)",
        defusion_subtitle: "Förderung der psychologischen Flexibilität durch Defusions-Techniken (ACT). Trenne deine Identität von kognitiven Repräsentationen.",
        defusion_box_title: "Gedanken entlassen",
        defusion_box_desc: "Visualisierung der kognitiven De-Identifikation. Beobachte den Gedanken als flüchtiges mentales Phänomen ohne emotionale Identifikation.",
        defusion_label: "Festsitzender Gedanke",
        defusion_placeholder: "z. B. Ich werde das nicht schaffen",
        defusion_submit: "Treiben lassen 🍃",
        defusion_theme_lbl: "Szenario auswählen:",
        defusion_theme_river: "Waldfluss (Blätter) 🍃",
        defusion_theme_space: "Weltall (Sternschnuppen) 🌠",
        
        knowledge_title: "Wissens-Oase (Psychoedukation)",
        knowledge_subtitle: "Fortgeschrittene Psychoedukation. Vertiefte Einsichten in die Neurobiologie, Systemtherapie und autonome Steuerung.",
        mod1_title: "Modul 1: Neurobiologie der generalisierten Angst",
        mod1_desc: "Verstehe das Prinzip des chronischen Alarmzustands in deinem Gehirn und warum Sorgen kein wirksames Schutzschild sind.",
        mod2_title: "Modul 2: Kognitive Perseveration & Metakognition",
        mod2_desc: "Erkenne, warum Angsterwartungen haften bleiben, was Metasorgen sind und wie wir gedankliche Schleifen durchbrechen.",
        mod3_title: "Modul 3: Vegetatives Nervensystem & Polyvagal-Regulation",
        mod3_desc: "Lerne die physiologische Bremse deines Körpers kennen. Erfahre alles über Herzfrequenzvariabilität (HRV) und Resonanz.",
        mod4_title: "Modul 4: Adaptives Coping & Extinktionskonsolidierung",
        mod4_desc: "Heilung verläuft wellenförmig. Lerne, wie du mit schwierigen Tagen umgehst und einen nachhaltigen Notfallplan erstellst.",
        mod5_title: "Modul 5: Kognitive Restrukturierung & Distanzierung",
        mod5_desc: "Entlarve negative Denkmuster, lerne kognitive Verzerrungen zu hinterfragen und ausgewogene Perspektiven zu entwickeln.",
        mod6_title: "Modul 6: Interpersonelle Co-Regulation & Systemisches Coping",
        mod6_desc: "Lerne, wie du Freunde, Familie oder Partner in Angstphasen unterstützen kannst und wie ein gesundes Co-Coping aussieht.",
        mod_read_btn: "Modul lesen 📖",
        
        tracker_title: "Genesungs-Tracker & Diagnostik",
        tracker_subtitle: "Verlaufsdiagnostik auf Basis der GAD-7 (Generalized Anxiety Disorder-7) zur Quantifizierung der Symptombelastung.",
        tracker_chart_title: "Wöchentliche GAD-7 Auswertung",
        tracker_btn: "GAD-7 Test starten 📋",
        tracker_history_title: "Test-Historie",
        tracker_empty: "Noch keine Testergebnisse erfasst.",
        
        archive_title: "Sorgen-Archiv (Verlauf)",
        archive_desc: "Hier siehst du all deine gelösten Sorgen und deine Aktionsschritte. Ein Beweis für deine Bewältigungsstärke!",
        archive_control_yes: "Aktion geplant:",
        archive_control_no: "Bewusst losgelassen",
        archive_empty: "Dein Archiv ist noch leer. Bewältige Sorgen im Sorgenzeit-Modus, um sie hier zu archivieren.",
        
        settings_title: "Einstellungen",
        settings_worry_lbl: "Uhrzeit für deine tägliche Sorgenzeit:",
        settings_worry_sub: "Plane ein tägliches Zeitfenster zur Einschränkung perseverativer Kognitionsschleifen ein.",
        settings_mixer_title: "Modulation des akustischen Arousals (Synthesizer-Pegel)",
        settings_rain_lbl: "Rosa Rauschen (Bandpass-Pink-Noise-Simulation)",
        settings_waves_lbl: "Niederfrequente Oszillation (Kardiale Resonanz-Induktion)",
        settings_wind_lbl: "Stochastischer Modulations-Rauschfilter (Waldwind)",
        settings_chimes_lbl: "Pentatonische FM-Glockensignale (Mikro-Achtsamkeit) 🔔",
        settings_brown_lbl: "Braunes Rauschen (Integration tiefer Spektren)",
        settings_save_btn: "Speichern",
        settings_reset_btn: "Daten löschen",
        settings_export_btn: "Therapeuten-Export (JSON) 📤",
        
        sos_title: "NOTFALL & ERDUNG",
        sos_subtitle: "Akutes hyperdynamisches Arousal. Nutze gezielte somatische Interventionen zur Aktivierung der parasympathischen Vagus-Bremse.",
        sos_vagus_title: "Sofortiger Vagus-Reset: Der Doppelseufzer",
        sos_vagus_desc: "1. Atme durch die Nase **tief ein**.<br>2. Atme sofort noch einmal **hinterher** (maximales Lungenvolumen).<br>3. Blase die Luft **extrem langsam** durch den Mund aus.<br><br>*Wiederhole das genau 3-mal jetzt.*",
        sos_breath_btn: "Geführte Atem-Kohärenz starten 🌀",
        sos_helplines_title: "Krisen-Telefonnummern (Deutschland):",
        sos_helpline_1: "Telefonseelsorge (24/7 kostenfrei)",
        sos_helpline_2: "Nummer gegen Kummer (Kinder/Jugend)",
        sos_helpline_3: "Info-Telefon Depression",
        sos_helpline_4: "Medizinischer Notdienst",
        gad_title: "Standardisierte GAD-7 Verlaufsdiagnostik",
        gad_subtitle: "Erfassung des Schweregrads der generalisierten Angstsymptomatik über das **2-Wochen-Intervall**.",
        gad_q1: "1. Gefühle von Nervosität, Angst oder Anspannung",
        gad_q2: "2. Unfähigkeit, Sorgen zu stoppen oder zu kontrollieren",
        gad_q3: "3. Übermäßige Sorgen über verschiedene Dinge",
        gad_q4: "4. Schwierigkeiten, sich zu entspannen",
        gad_q5: "5. Rastlosigkeit, Unruhe (so stark, dass es schwerfällt, stillzusitzen)",
        gad_q6: "6. Schnelle Verärgerung oder Reizbarkeit",
        gad_q7: "7. Gefühle von Angst, als ob etwas Schreckliches passieren könnte",
        gad_a0: "Überhaupt nicht (0)",
        gad_a1: "An einzelnen Tagen (1)",
        gad_a2: "An mehr als der Hälfte der Tage (2)",
        gad_a3: "Beinahe jeden Tag (3)",
        gad_btn_submit: "Ergebnisse auswerten & speichern 📊",
        
        // Advanced Tools (Tiefenarbeit)
        nav_deepwork: "Tiefenarbeit",
        deepwork_title: "Tiefenarbeit (Fortgeschritten)",
        deepwork_subtitle: "Entwickle mentale Stärke. Trainiere deine Aufmerksamkeit, hinterfrage Lebensregeln und handle wertebasiert.",
        deepwork_tab_mct: "Metakognition (MCT)",
        deepwork_tab_schemas: "Glaubenssatz-Tagebuch",
        deepwork_tab_values: "Werte-Kompass",
        
        mct_timer_title: "Grübelzeit-Timer (MCT)",
        mct_timer_desc: "Begrenze deine Sorgenzeit aktiv auf 15 Minuten am Tag. Verschiebe alle Sorgen tagsüber auf diesen Zeitraum.",
        mct_timer_start: "Grübelzeit starten ⏱️",
        mct_timer_stop: "Grübelzeit beenden 🛑",
        mct_timer_running: "Grübelzeit läuft... Nutze sie zum bewussten Reflektieren deiner parkierten Sorgen.",
        mct_timer_finished: "Deine Sorgenzeit ist abgelaufen! Kehre jetzt wieder ins Hier & Jetzt zurück.",
        
        mct_att_title: "Aufmerksamkeitstraining (ATT)",
        mct_att_desc: "Trainiere deine mentale Flexibilität. Setze Kopfhörer auf und folge den Anweisungen, um deine Aufmerksamkeit gezielt zu lenken.",
        mct_att_start: "ATT Training starten 🎧",
        mct_att_stop: "Training abbrechen ⏹️",
        mct_att_stage_1: "Fokussiere dich NUR auf den Regen auf deiner LINKEN Seite. 🌧️",
        mct_att_stage_2: "Fokussiere dich NUR auf den Wind auf deiner RECHTEN Seite. 🍃",
        mct_att_stage_3: "Fokussiere dich NUR auf die Windspiele in der MITTE. 🔔",
        mct_att_stage_4: "Weite deine Aufmerksamkeit aus. Versuche alle Töne GLEICHZEITIG zu hören. 🎧",
        mct_att_stage_5: "Schneller Wechsel! Folge der roten Markierung auf dem Bildschirm!",
        mct_att_finished: "Training beendet! Du hast deine Aufmerksamkeit erfolgreich trainiert. Spüre die geistige Ruhe.",
        
        schema_title: "Glaubenssatz-Tagebuch (Schematherapie)",
        schema_desc: "Bearbeite deine tiefsten Lebensregeln (Lebensfallen). Vergleiche logische Beweise und formuliere gesunde Annahmen.",
        schema_btn_add: "Neuen Glaubenssatz analysieren ➕",
        schema_lbl_name: "Name des Glaubenssatzes / Schema (z. B. 'Ich bin unzulänglich')",
        schema_lbl_strength: "Wie stark glaubst du aktuell daran? (0-100%)",
        schema_lbl_evidence_pro: "Beweise, die dafür sprechen (Warum dein Kopf das glaubt)",
        schema_lbl_evidence_con: "Beweise, die dagegen sprechen (Objektive Tatsachen & Gegenbeweise)",
        schema_lbl_healthy: "Gesunde Regel (Was sagt deine gesunde, weise Erwachsenen-Stimme?)",
        schema_save: "Glaubenssatz speichern 💾",
        schema_empty: "Noch keine Glaubenssätze eingetragen. Starte mit deiner ersten Glaubenssatz-Analyse.",
        
        values_title: "Werte-Kompass (ACT)",
        values_desc: "Angst macht uns starr. Definiere, was dir in den Kernbereichen deines Lebens wichtig ist, und nimm dir eine kleine Handlung vor.",
        values_cat_relations: "Beziehungen & Familie",
        values_cat_health: "Gesundheit & Selbstfürsorge",
        values_cat_growth: "Karriere & Wachstum",
        values_cat_mindfulness: "Achtsamkeit & Ruhe",
        values_placeholder: "Was ist dir in diesem Bereich besonders wichtig?",
        values_action_lbl: "Mein konkreter Schritt für HEUTE:",
        values_action_placeholder: "z. B. 10 Min. anrufen oder spazieren gehen",
        values_save: "Werte-Schritt sichern 🎯",
        values_dashboard_card: "Heutige Werte-Schritte",

        // New localized additions from index.html
        dashboard_mct_desc: "Metakognitives Training (MCT): Aufmerksamkeitslenkung & strukturierter Sorgenaufschub.",
        dashboard_schemas_desc: "Schemaanalyse: Exploration tiefsitzender Glaubenssätze und dysfunktionaler Kognitionen.",
        dashboard_values_desc: "Werte-Ausrichtung (ACT): Strukturierte Implementierung wertebasierter Verhaltenscommitments.",
        tapping_start_btn: "Klopf-Sitzung starten 🧘‍♀️",
        tapping_point_sidehand: "Handkante (Karate-Punkt)",
        defusion_max_chars: "Max. 35 Zeichen",
        mct_att_left: "LINKS",
        mct_att_center: "MITTE",
        mct_att_right: "RECHTS",
        exp_new_title: "Verhaltensexperiment planen",
        exp_prediction_lbl: "1. Rationale Antizipation des Bedrohungsszenarios (Hypothese):",
        exp_probability_lbl: "Subjektive Eintrittswahrscheinlichkeit (0–100%):",
        exp_severity_lbl: "Antizipierte emotionale Belastung (1–10):",
        exp_design_lbl: "2. Experimentelles Setup zur Falsifizierung (Interventionsdesign):",
        exp_complete_title_modal: "Empirische Auswertung & Integration",
        exp_fear_was: "Antizipierte Bedrohung:",
        exp_outcome_lbl: "1. Empirischer Befund (Was trat tatsächlich ein?):",
        exp_learning_lbl: "2. Kognitive Anpassung & neuroplastische Integration (Erkenntnis):",
        exp_save_btn: "Erkenntnisse im Langzeitgedächtnis sichern 💾",
        psy_back: "Zurück",
        psy_next: "Weiter"
    },
    ar: {
        logo: "واحة الهدوء",
        nav_dashboard: "الواحة (الرئيسية)",
        nav_parking: "موقف المخاوف",
        nav_experiments: "تجارب سلوكية",
        nav_breath: "التنفس والعصب الحائر",
        nav_defusion: "سيل الأفكار",
        nav_knowledge: "واحة المعرفة",
        nav_progress: "مستوى التقدم (GAD-7)",
        nav_settings: "الإعدادات",
        nav_sos: "مساعدة SOS emergency",
        nav_coach: "مرشد الأفكار",
        coach_title: "مرشد الأفكار (العلاج السلوكي المعرفي)",
        coach_subtitle: "إعادة الهيكلة المعرفية للأفكار التلقائية عبر الحوار السكراتي الموجه.",
        coach_name: "مرشد الواحة",
        coach_status_online: "يحاورك لتفكيك الأفكار السلبية",
        coach_send_btn: "إرسال",
        coach_archive_title: "الأفكار المُعاد صياغتها",
        coach_archive_desc: "البدائل المعرفية المدمجة لتقليل أنماط التفكير المفرط.",
        coach_history_empty: "لم يتم إعادة صياغة أي أفكار بعد.",
        coach_delete_btn: "حذف",
        coach_send_defusion_btn: "دعها تطفو 🍃",
        
        greeting_morning: "صباح الخير",
        greeting_noon: "طاب يومك",
        greeting_afternoon: "مساء الخير",
        greeting_evening: "مساء الخير",
        greeting_night: "ليلة سعيدة",
        subtitle: "أدوات سريرية متقدمة لتنظيم الجهاز العصبي الذاتي وإعادة الهيكلة الميتا-معرفية.",
        
        daily_reminder: "رسالة التعافي اليومية",
        checkin_title: "تسجيل الحالة",
        checkin_sub: "كيف تشعر في هذه اللحظة بالذات؟",
        mood_1: "قلق جداً",
        mood_2: "قلق",
        mood_3: "محايد",
        mood_4: "هادئ",
        mood_5: "هادئ جداً",
        
        widget_parked: "موقف المخاوف",
        widget_parked_sub: "مخاوف مركونة",
        widget_sorgenzeit: "وقت القلق القادم",
        widget_sorgenzeit_sub: "يومياً عند الساعة",
        widget_progress: "حالة التعافي",
        
        sofothilfen_title: "المساعدة الفورية والتمارين",
        card_breath_desc: "اخفض نبضات قلبك الحيوية ونشّط العصب الحائر لتهدئة نوبات الهلع الجسدية.",
        card_defusion_desc: "تعلّم التباعد المعرفي (ACT) من خلال وضع أفكارك المقلقة على أوراق شجر تطفو في النهر.",
        card_sos_desc: "تمارين التأريض الحادة (5-4-3-2-1)، أرقام الطوارئ وخطوط المساعدة الساخنة في مكان واحد.",
        
        advisor_title: "المستشار الذكي (Smart Advisor)",
        advisor_evaluating: "جاري تحليل مسار تعافيك...",
        
        parking_title: "موقف المخاوف ووقت القلق",
        parking_subtitle: "تأجيل القلق الاستراتيجي (MCT). الحد من وقت المعالجة المعرفية للقلق الميتا-معرفي لتعزيز التحكم التنفيذي في الانتباه.",
        parking_box_title: "ركن خوف جديد",
        parking_label: "ما الذي يشغل بالك الآن؟",
        parking_placeholder: "قم بتوثيق محفز القلق المتوقع للتحليل الميتا-معرفي اللاحق.",
        parking_submit: "اركن الخوف بأمان 📥",
        parking_overview: "نظرة عامة على الموقف",
        parking_start_btn: "ابدأ وقت القلق 🌅",
        parking_empty: "لا توجد مخاوف مركونة. عقلك صافٍ تماماً!",
        
        worry_time_active: "وقت القلق النشط",
        worry_time_abort: "إلغاء",
        worry_control_question: "هل يمكنك التأثير على هذه المشكلة أو حلها الآن بشكل مباشر؟",
        worry_control_yes: "نعم (قلق إنتاجي)",
        worry_control_no: "لا (قلق غير إنتاجي)",
        worry_action_title: "إنشاء خطة عمل",
        worry_action_desc: "بما أنه يمكنك التأثير على هذه المشكلة، لنحدد خطوة أولى صغيرة جداً.",
        worry_action_label: "ما هي أصغر خطوة أولى يمكنك القيام بها اليوم؟",
        worry_action_placeholder: "مثال: إرسال بريد إلكتروني، حجز موعد...",
        worry_action_save: "احفظ الخطوة وحل الخوف",
        worry_defusion_title: "فك الارتباط المعرفي",
        worry_defusion_desc: "بما أن هذه الفكرة تتعلق بمتغيرات غير قابلة للتحكم، يتم فك الارتباط المعرفي بها (Defusion).",
        worry_defusion_release: "أطلق الخوف إلى الكون ✨",
        worry_complete_title: "انتهى وقت القلق بنجاح!",
        worry_complete_desc: "انتهى وقت القلق. لقد قمت بتقييم العبء المعرفي بشكل منظم، أو دمجت خطط العمل، أو تدربت على فك الارتباط الميتا-معرفي.",
        worry_complete_btn: "العودة إلى موقف المخاوف",
        
        exp_title: "تجارب سلوكية",
        exp_subtitle: "التخطيط لتجارب سلوكية قائمة على الفرضيات للتفنيد التجريبي للافتراضات غير الفعالة.",
        exp_active: "التجارب السلوكية النشطة",
        exp_new_btn: "خطط لتجربة جديدة 🧪",
        exp_empty: "لا توجد تجارب نشطة. ابدأ تجربة لاختبار وتفنيد مخاوفك!",
        exp_completed_title: "الدروس المستفادة والنتائج المحققة",
        exp_no_completed: "لا توجد تجارب مكتملة بعد.",
        
        breath_title: "اتساق التنفس ومكابح العصب الحائر",
        breath_subtitle: "تعديل التوازن السمبتاوي والباراسمبتاوي. تحسين تقلب معدل ضربات القلب (HRV) وتعزيز اضطراب النظم الجيبي التنفسي.",
        breath_pattern_lbl: "نمط التنفس",
        breath_duration_lbl: "مدة الجلسة",
        breath_coherence_lbl: "الاتساق الفسيولوجي",
        breath_sound_lbl: "دليل الصوت الهادئ (توجيه صوتي)",
        breath_start_btn: "ابدأ الجلسة",
        breath_stop_btn: "إنهاء الجلسة",
        breath_ready: "جاهز",
        breath_inhale: "شهيق",
        breath_hold: "حبس النفس",
        breath_exhale: "زفير",
        
        somatic_title: "مرساة الجسد (تمارين جسدية)",
        somatic_subtitle: "التحفيز المباشر للجهاز العصبي الباراسمبتاوي لخفض مستوى الاستثارة الفسيولوجية.",
        somatic_select_lbl: "اختر تمريناً جسدياً:",
        somatic_vagus_opt: "حركة العين للعصب الحائر (تخفيف النظر)",
        somatic_sigh_opt: "التنهد الفسيولوجي (تهوية الرئتين)",
        somatic_grounding_opt: "التأريض الجسدي 5-4-3-2-1",
        somatic_tapping_opt: "تقنية الحرية النفسية (EFT)",
        tapping_title: "تقنية الحرية النفسية (EFT)",
        tapping_desc: "تساعد تقنية الحرية النفسية (EFT) على تقليل التوتر عبر النقر على نقاط الطاقة الحيوية. حدد مشكلتك الحالية، وانقر 7 مرات بإيقاع منتظم على الزر عند ظهور كل نقطة مع تكرار العبارة المذكورة.",
        tapping_phrase_lbl: "مخاوفك/الضغط الحالي (مثال: 'هذا الضيق في صدري'):",
        tapping_pad_lbl: "انقر هنا",
        tapping_stop_btn: "إلغاء",
        
        vagus_title: "حركة العين للعصب الحائر",
        vagus_desc: "تحفيز المنعكس العيني القلبي لتنشيط العصب الحائر (النظرية البولي-فيغالية).<br><br>1. حافظ على استقامة رأسك تماماً.<br>2. اتبع النقطة المتحركة بعينيك فقط إلى أقصى اليمين.<br>3. ثبت نظرك هناك لمدة 30 ثانية حتى تشعر بتنهد أو تثاؤب تلقائي.<br>4. كرر نفس العملية على الجانب الأيسر.",
        vagus_start: "ابدأ التمرين",
        vagus_stop: "إنهاء التمرين",
        vagus_look_right: "انظر إلى أقصى اليمين وحافظ على رأسك مستقيماً",
        vagus_look_left: "انظر إلى أقصى اليسار وحافظ على رأسك مستقيماً",
        vagus_center: "انظر إلى المنتصف واسترخِ",
        vagus_done: "انتهى التمرين. هل تشعر بالتثاؤب، التنهد، أو الابتلاع؟ هذه إشارة استرخاء جهازك العصبي!",
        
        sigh_title: "التنهد الفسيولوجي",
        sigh_desc: "التنهد الفسيولوجي المزدوج للتعويض السريع لفرط ثنائي أكسيد الكربون وتوسيع الحويصلات الرئوية.<br><br>1. خذ شهيقاً عميقاً من الأنف.<br>2. خذ شهيقاً ثانياً قصيراً جداً وسريعاً في النهاية (لتوسيع الحويصلات الهوائية بالكامل).<br>3. ازفر ببطء شديد وتام من الفم. كرر هذا 3 مرات متتالية.",
        
        grounding_title: "التأريض الحسي",
        grounding_desc: "اضغط على الحواس وسمّ الأشياء في محيطك لإعادة وعيك إلى الحاضر والواقع الحالي.",
        grounding_see: "5 أشياء يمكنك رؤيتها:",
        grounding_feel: "4 أشياء يمكنك الشعور بها:",
        grounding_hear: "3 أشياء يمكنك سماعها:",
        grounding_smell: "2 أشياء يمكنك شمها:",
        grounding_taste: "شخص أو شيء يمكنك تذوقه:",
        grounding_btn_see: "رؤية",
        grounding_btn_feel: "لمس",
        grounding_btn_hear: "سماع",
        grounding_btn_smell: "شم",
        grounding_btn_taste: "تذوق",
        
        defusion_title: "سيل الأفكار (ACT Defusion)",
        defusion_subtitle: "تعزيز المرونة النفسية عبر تقنيات فك الارتباط (ACT). افصل هويتك عن تمثيلاتك المعرفية.",
        defusion_box_title: "تحرير الفكرة",
        defusion_box_desc: "تصور فك التماهي المعرفي. راقب الفكرة كظاهرة ذهنية عابرة دون التماهي العاطفي معها.",
        defusion_label: "فكرة ملتصقة بعقلك",
        defusion_placeholder: "مثال: لن أتمكن من النجاح في هذا",
        defusion_submit: "دعها تطفو 🍃",
        defusion_theme_lbl: "اختر السيناريو:",
        defusion_theme_river: "نهر الغابة (أوراق شجر) 🍃",
        defusion_theme_space: "الفضاء (شهب عابرة) 🌠",
        
        knowledge_title: "واحة المعرفة (التثقيف النفسي)",
        knowledge_subtitle: "تثقيف نفسي متقدم. رؤى معمقة في علم الأعصاب، العلاج الجهازي، والتحكم الذاتي.",
        mod1_title: "الدرس 1: علم الأعصاب للقلق العام",
        mod1_desc: "افهم مبدأ حالة الإنذار المزمنة في دماغك ولماذا لا يعتبر القلق درعاً حقيقياً لحمايتك.",
        mod2_title: "الدرس 2: التفكير المفرط والبيانات الميتا-معرفية",
        mod2_desc: "تعرف على سبب التصاق توقعات الخوف، ماهية القلق بشأن القلق، وكيفية تفكيك الحلقات الفكرية المفرطة.",
        mod3_title: "الدرس 3: الجهاز العصبي والتنظيم البولي-فيغالي",
        mod3_desc: "تعرف على فرامل الاسترخاء العضوية في جسمك. اكتشف كل شيء عن تقلب معدل ضربات القلب (HRV) والاتساق.",
        mod4_title: "الدرس 4: التكيف والدمج التجريبي",
        mod4_desc: "التعافي يسير بشكل موجي وليس خطاً مستقيماً. تعلم كيفية التعامل مع الأيام الصعبة وإعداد خطة طوارئ مستدامة.",
        mod5_title: "الدرس 5: إعادة الهيكلة والتفكيك المعرفي",
        mod5_desc: "افحص أنماط التفكير السلبية، وتعلم كيفية التشكيك في التشوهات المعرفية وتطوير وجهات نظر متوازنة.",
        mod6_title: "الدرس 6: التنظيم المشترك وديناميكيات الدعم الجماعي",
        mod6_desc: "تعلم كيف يمكنك دعم الأصدقاء أو العائلة أو الشريك أثناء نوبات القلق وكيف يبدو الدعم النفسي المشترك والصحي.",
        mod_read_btn: "اقرأ الدرس 📖",
        
        tracker_title: "مستوى التقدم والتشخيص",
        tracker_subtitle: "تشخيص المتابعة بناءً على مقياس GAD-7 لتحديد كمية العبء العرضي.",
        tracker_chart_title: "تقييم مقياس GAD-7 الأسبوعي",
        tracker_btn: "ابدأ تقييم مقياس GAD-7 📋",
        tracker_history_title: "سجل التقييمات",
        tracker_empty: "لم يتم تسجيل أي نتائج تقييم بعد.",
        
        archive_title: "أرشيف المخاوف (السجل)",
        archive_desc: "هنا ترى جميع مخاوفك المحلولة وخطوات عملك. دليل قاطع على قوتك وقدرتك على المواجهة والتغلب على الصعاب!",
        archive_control_yes: "خطوة العمل المخططة:",
        archive_control_no: "تم تحريره بوعي وإطلاقه بسلام",
        archive_empty: "الأرشيف فارغ حالياً. قم بحل مخاوفك في جلسة وقت القلق ليتم أرشفتها وتوثيقها هنا.",
        
        settings_title: "الإعدادات",
        settings_worry_lbl: "الوقت المحدد لوقت القلق اليومي:",
        settings_worry_sub: "خصص نافذة زمنية يومية للحد من حلقات التفكير المفرط غير الفعالة.",
        settings_mixer_title: "تعديل الاستثارة السمعية (مستويات الممزج)",
        settings_rain_lbl: "الضوضاء الوردية (محاكاة الضوضاء الوردية المفلترة)",
        settings_waves_lbl: "تذبذب منخفض التردد (تحفيز الاتساق القلبي)",
        settings_wind_lbl: "مرشح ضوضاء التعديل العشوائي (رياح الغابة)",
        settings_chimes_lbl: "إشارات رنين خماسية النغمات (اليقظة الدقيقة) 🔔",
        settings_brown_lbl: "الضوضاء البنية (دمج الأطياف العميقة)",
        settings_save_btn: "حفظ الإعدادات",
        settings_reset_btn: "حذف جميع البيانات",
        settings_export_btn: "تصدير التقرير للمعالج النفسي (JSON) 📤",
        
        sos_title: "طوارئ وتأريض",
        sos_subtitle: "استثارة فسيولوجية حادة مفرطة الديناميكية. استخدم تدخلات جسدية محددة لتنشيط مكابح العصب الحائر الباراسمبتاوية.",
        sos_vagus_title: "إعادة ضبط العصب الحائر الفوري: التنهد الفسيولوجي",
        sos_vagus_desc: "1. خذ شهيقاً **عميقاً جداً** من الأنف.<br>2. خذ شهيقاً **إضافياً سريعاً** فوراً بعده.<br>3. ازفر الهواء **ببطء شديد وتام** من الفم.<br><br>*كرر هذا 3 مرات متتالية الآن.*",
        sos_breath_btn: "ابدأ اتساق التنفس الموجه 🌀",
        sos_helplines_title: "أرقام المساعدة الساخنة وأرقام الطوارئ:",
        sos_helpline_1: "خط الدعم النفسي الهاتفي (مجاني 24/7)",
        sos_helpline_2: "خط مساعدة الأطفال والشباب",
        sos_helpline_3: "خط الاستشارات النفسية للاكتئاب والقلق",
        sos_helpline_4: "الإسعاف الطبي الطارئ السريع",
        gad_title: "التشخيص الموحد لمقياس GAD-7 لمتابعة الحالة",
        gad_subtitle: "تقييم شدة أعراض القلق العام خلال فترة الأسبوعين الماضيين.",
        gad_q1: "1. الشعور بالعصبية أو القلق أو التوتر الشديد",
        gad_q2: "2. عدم القدرة على إيقاف القلق أو السيطرة عليه",
        gad_q3: "3. القلق المفرط بشأن أشياء مختلفة كثيرة",
        gad_q4: "4. صعوبة واضحة في الاسترخاء",
        gad_q5: "5. النشاط الزائد أو التوتر الحركي (لدرجة يصعب معها الجلوس ساكناً)",
        gad_q6: "6. سرعة الغضب أو سهولة الاستثارة والتهيج",
        gad_q7: "7. الشعور بالخوف والهلع كما لو أن شيئاً فظيعاً قد يحدث",
        gad_a0: "أبداً (0)",
        gad_a1: "لعدة أيام (1)",
        gad_a2: "لأكثر من نصف الأيام (2)",
        gad_a3: "كل يوم تقريباً (3)",
        gad_btn_submit: "تحليل وحفظ النتائج 📊",
        
        // Advanced Tools (Tiefenarbeit)
        nav_deepwork: "العمل العميق",
        deepwork_title: "العمل العميق (متقدم)",
        deepwork_subtitle: "طور قوتك العقلية. درب مرونة انتباهك، وتحد قواعد الحياة التلقائية، وتصرف بناءً على قيمك الحقيقية.",
        deepwork_tab_mct: "ميتا-معرفة (MCT)",
        deepwork_tab_schemas: "سجل المعتقدات الأساسية",
        deepwork_tab_values: "بوصلة القيم",
        
        mct_timer_title: "مؤقت وقت القلق (MCT)",
        mct_timer_desc: "حدد وقت قلقك اليومي بـ 15 دقيقة فقط. قم بتأجيل جميع الأفكار المقلقة طوال اليوم إلى هذه الفترة الخاصة.",
        mct_timer_start: "بدء وقت القلق ⏱️",
        mct_timer_stop: "إنهاء وقت القلق 🛑",
        mct_timer_running: "وقت القلق قيد التشغيل... استخدم هذا الوقت للتمعن الواعي في مخاوفك المؤجلة.",
        mct_timer_finished: "انتهى وقت القلق الخاص بك! عد الآن بوعيك الكامل إلى الحاضر والأن.",
        
        mct_att_title: "تدريب تركيز الانتباه (ATT)",
        mct_att_desc: "درب مرونتك العقلية. ضع سماعات الأذن واتبع التعليمات لتوجيه انتباهك الصوتي بشكل هادف.",
        mct_att_start: "بدء تدريب ATT 🎧",
        mct_att_stop: "إلغاء التدريب ⏹️",
        mct_att_stage_1: "ركز انتباهك فقط على صوت المطر في جانبك الأيسر. 🌧️",
        mct_att_stage_2: "ركز انتباهك فقط على صوت الرياح في جانبك الأيمن. 🍃",
        mct_att_stage_3: "ركز انتباهك فقط على أصوات الأجراس في المنتصف. 🔔",
        mct_att_stage_4: "وسع نطاق انتباهك. حاول الاستماع إلى جميع الأصوات الثلاثة في نفس الوقت. 🎧",
        mct_att_stage_5: "تنقل سريع! اتبع المؤشر الأحمر الظاهر على الشاشة!",
        mct_att_finished: "انتهى التدريب بنجاح! لقد قمت بتمرين عضلات انتباهك وتوجيهه بوعي. اشعر بالهدوء الآن.",
        
        schema_title: "مذكرات المعتقدات الأساسية (العلاج بالمخططات)",
        schema_desc: "تحد معتقداتك وقواعد حياتك العميقة (أفخاخ الحياة). قارن الأدلة وصغ قواعد صحية وبديلة.",
        schema_btn_add: "تحليل معتقد أساسي جديد ➕",
        schema_lbl_name: "اسم المعتقد الأساسي / المخطط (مثال: 'أنا غير كافٍ')",
        schema_lbl_strength: "ما مدى تصديقك الحالي لهذا المعتقد؟ (0-100%)",
        schema_lbl_evidence_pro: "الأدلة التي تؤيده (لماذا يعتقد عقلك أنه صحيح؟)",
        schema_lbl_evidence_con: "الأدلة التي تعارضه (الحقائق والأدلة الواقعية المعاكسة)",
        schema_lbl_healthy: "صوت البالغ الحكيم البديل (ما هي القاعدة الجديدة الأكثر عقلانية؟)",
        schema_save: "حفظ المعتقد الأساسي 💾",
        schema_empty: "لا توجد معتقدات مسجلة بعد. ابدأ بأول تحليل لمعتقداتك العميقة.",
        
        values_title: "بوصلة القيم الشخصية (ACT)",
        values_desc: "القلق يجعلنا متصلبين. حدد ما هو مهم بالنسبة لك في مجالات حياتك الأساسية، والتزم بخطوة صغيرة اليوم.",
        values_cat_relations: "العلاقات والعائلة",
        values_cat_health: "الصحة والعناية بالذات",
        values_cat_growth: "العمل والنمو الشخصي",
        values_cat_mindfulness: "اليقظة والهدوء والراحة",
        values_placeholder: "ما الذي يهمك وله قيمة حقيقية بالنسبة لك في هذا مجال؟",
        values_action_lbl: "خطوتي الملموسة لليوم:",
        values_action_placeholder: "مثال: الاتصال بصديق لمدة 5 دقائق أو المشي اليقظ",
        values_save: "حفظ خطوة القيمة 🎯",
        values_dashboard_card: "خطوات القيم اليومية",

        // New localized additions from index.html in Arabic
        dashboard_mct_desc: "التدريب الميتا-معرفي (MCT): توجيه الانتباه وتأجيل القلق المنظم.",
        dashboard_schemas_desc: "تحليل المخططات: استكشاف المعتقدات الأساسية العميقة والإدراك غير الفعال.",
        dashboard_values_desc: "توجيه القيم (ACT): تنفيذ منظم للالتزامات السلوكية القائمة على القيم.",
        tapping_start_btn: "ابدأ جلسة النقر 🧘‍♀️",
        tapping_point_sidehand: "جانب اليد (نقطة الكاراتيه)",
        defusion_max_chars: "الحد الأقصى 35 حرفاً",
        mct_att_left: "اليسار",
        mct_att_center: "المنتصف",
        mct_att_right: "اليمين",
        exp_new_title: "التخطيط لتجربة سلوكية",
        exp_prediction_lbl: "1. التوقع العقلاني لسيناريو التهديد (الفرضية):",
        exp_probability_lbl: "احتمال الحدوث الذاتي (0-100٪):",
        exp_severity_lbl: "العبء العاطفي المتوقع (1-10):",
        exp_design_lbl: "2. الإعداد التجريبي للتفنيد (تصميم التدخل):",
        exp_complete_title_modal: "التقييم التجريبي والدمج",
        exp_fear_was: "التهديد المتوقع:",
        exp_outcome_lbl: "1. النتيجة التجريبية (ماذا حدث بالفعل؟):",
        exp_learning_lbl: "2. التكيف المعرفي والدمج العصبي المرن (الاستنتاج):",
        exp_save_btn: "حفظ الاستنتاجات في الذاكرة طويلة المدى 💾",
        psy_back: "السابق",
        psy_next: "التالي"
    }
};

const DE_QUOTES = [
    { text: "Du musst deinen Gedanken nicht alles glauben. Sie sind wie Wolken am Himmel – sie ziehen nur vorbei.", author: "Jack Kornfield" },
    { text: "Nicht die Dinge selbst beunruhigen die Menschen, sondern ihre Meinungen und Urteile über die Dinge.", author: "Epiktet" },
    { text: "Atme tief durch. Es ist nur ein Gedanke, und Gedanken kann man ändern.", author: "Louise Hay" },
    { text: "Die größte Waffe gegen den Stress ist unsere Fähigkeit, einen Gedanken vor einem anderen zu bevorzugen.", author: "William James" },
    { text: "Gefühle kommen und gehen wie Wellen am Meer. Du musst nicht auf jeder Welle reiten.", author: "Amit Ray" }
];
class RuheOaseApp {
    constructor() {
        // App State
        this.state = {
            parkedWorries: [],
            behavioralExperiments: [],
            moodHistory: [],
            gadScores: [],
            reframedThoughts: [],
            coreBeliefs: [],
            valuesCompass: {
                relationships: "",
                health: "",
                growth: "",
                mindfulness: "",
                actions: {}
            },
            settings: {
                worryTime: "18:00",
                language: "de", // Default language (de)
                defusionTheme: "river", // Default theme (river)
                ambientVolumes: {
                    rain: 0.0,
                    waves: 0.0,
                    wind: 0.0,
                    chimes: 0.0,
                    brown: 0.0
                }
            }
        };

        // Active States
        this.activeTab = 'oase';
        this.breathingInterval = null;
        this.breathingTimeRemaining = 0;
        this.breathingState = 'idle'; // idle, inhale, hold, exhale
        this.breathingCycleTime = 0;
        this.coherenceScore = 0;
        
        // Sorgenzeit Wizard state
        this.activeSorgenzeitWorryIndex = 0;
        this.sorgenzeitTempAnswers = {};

        // Canvas / thoughts
        this.defusionThoughts = [];
        this.canvas = null;
        this.canvasCtx = null;
        this.animationFrameId = null;

        // Psychoeducation reader
        this.activePsyModule = null;
        this.activePsySlide = 0;

        // Somatic Vagus Shifting
        this.vagusShiftingInterval = null;
        this.vagusTimer = 0;
        this.vagusState = 'idle';

        // EFT Tapping
        this.tappingActive = false;
        this.tappingPointIndex = 0;
        this.tapCount = 7;
        this.tappingCustomPhrase = "";
        this.tappingSequence = [
            { id: "karate", de: "Handkante", ar: "جانب اليد (ضربة الكاراتيه)" },
            { id: "crown", de: "Scheitelpunkt (Kopf)", ar: "قمة الرأس" },
            { id: "eyebrow", de: "Augenbraue", ar: "بداية الحاجب" },
            { id: "temple", de: "Schläfe (Auge)", ar: "جانب العين" },
            { id: "undereye", de: "Unter dem Auge", ar: "تحت العين" },
            { id: "undernose", de: "Unter der Nase", ar: "تحت الأنف" },
            { id: "chin", de: "Kinnfalte", ar: "تحت الشفاه (الذقن)" },
            { id: "collarbone", de: "Schlüsselbein", ar: "عظمة الترقوة" },
            { id: "underarm", de: "Unter dem Arm", ar: "تحت الإبط" }
        ];

        // CBT thoughts Coach
        this.coachStep = 0;
        this.coachTempData = { original: "", evidence: "", distortion: "", reframed: "" };
                this.coachDistortions = [
            { id: "catastrophizing", de: "Katastrophisierende Extrapolierung", ar: "الاستقراء الكارثي", desc_de: "Systematisches Antizipieren maximaler Schadensszenarien bei Vernachlässigung von Eintrittswahrscheinlichkeiten.", desc_ar: "الافترض المنهجي لسيناريوهات الضرر الأقصى مع تجاهل احتمالات الحدوث الفعلية." },
            { id: "blackwhite", de: "Dichotome Kognition (Schwarz-Weiß)", ar: "الادراك الثنائي (الكل أو لا شيء)", desc_de: "Binäre Kategorisierung komplexer Zustände unter Ausschluss intermediärer Abstufungen.", desc_ar: "تصنيف ثنائي للحالات المعقدة مع استبعاد التدرجات الوسيطة." },
            { id: "mindreading", de: "Projektive Kognition (Gedankenlesen)", ar: "الادراك الإسقاطي (قراءة الأفكار)", desc_de: "Hypothetische Zuschreibung negativer intentionaler Zustände auf andere Personen ohne empirischen Beleg.", desc_ar: "الإسناد الافتراضي لحالات قصدية سلبية على الآخرين دون دليل تجريبي." },
            { id: "emotional", de: "Emotionale Beweisführung", ar: "الاستدلال الوعائي العاطفي", desc_de: "Kognitiver Fehlschluss, bei dem subjektive affektive Zustände als objektive Evidenz für Gefahren bewertet werden.", desc_ar: "مغالطة معرفية يتم فيها تقييم الحالات العاطفية الذاتية كدليل موضوعي على الخطر." }
        ];

        // Bindings
        this.tickBreathing = this.tickBreathing.bind(this);
        this.animateThoughtsStream = this.animateThoughtsStream.bind(this);
    }

    // Initialize application
    init() {
        this.loadState();
        this.setupLanguage();
        this.setupNavigation();
        this.setupEventListeners();
        this.renderAll();
        this.initSoundSliders();
        this.initCanvas();
    }

    // Translate a key
    _t(key) {
        const lang = this.state.settings.language || 'de';
        return L10N_DICT[lang][key] || L10N_DICT['de'][key] || key;
    }

    // Load local state
    loadState() {
        const stored = localStorage.getItem('ruheoase_state');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                this.state = { ...this.state, ...parsed };
                this.state.coreBeliefs = parsed.coreBeliefs || [];
                this.state.valuesCompass = {
                    relationships: "",
                    health: "",
                    growth: "",
                    mindfulness: "",
                    actions: {},
                    ...parsed.valuesCompass
                };
                // Deep merge settings
                this.state.settings = { 
                    worryTime: "18:00", 
                    language: "de",
                    defusionTheme: "river",
                    ambientVolumes: { rain: 0, waves: 0, wind: 0, chimes: 0, brown: 0 },
                    ...parsed.settings 
                };
            } catch (e) {
                console.error("Failed to parse state", e);
            }
        } else {
            // Seed history
            const today = new Date();
            const date1 = new Date(today.getTime() - 21 * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE');
            const date2 = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE');
            const date3 = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('de-DE');
            this.state.gadScores = [
                { date: date1, score: 14, severity: 'moderate' },
                { date: date2, score: 11, severity: 'moderate' },
                { date: date3, score: 8, severity: 'mild' }
            ];
            this.saveState();
        }
    }

    saveState() {
        localStorage.setItem('ruheoase_state', JSON.stringify(this.state));
    }

    // Language configuration (DE/AR) and RTL setup
    setupLanguage() {
        if (this.vagusShiftingInterval) this.stopVagusExercise();
        const lang = this.state.settings.language || 'de';
        document.documentElement.lang = lang;
        
        // RTL Direction Switching
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.documentElement.classList.add('rtl-mode');
        } else {
            document.documentElement.dir = 'ltr';
            document.documentElement.classList.remove('rtl-mode');
        }

        // Apply translations to all DOM nodes containing data-l10n attribute
        document.querySelectorAll('[data-l10n]').forEach(el => {
            const key = el.getAttribute('data-l10n');
            const trans = this._t(key);
            
            // Check if translating placeholders
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = trans;
            } else {
                el.innerHTML = trans;
            }
        });

        // Set select values
        const langSelect = document.getElementById('select-language');
        if (langSelect) langSelect.value = lang;

        const themeSelect = document.getElementById('select-defusion-theme');
        if (themeSelect) themeSelect.value = this.state.settings.defusionTheme;
    }

    setLanguage(lang) {
        this.state.settings.language = lang;
        this.saveState();
        this.setupLanguage();
        this.renderAll();
    }

    // Setup SPA routing
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-item, .mobile-nav-item');
        navButtons.forEach(item => {
            const btn = item.querySelector('button');
            if (!btn) return;
            btn.addEventListener('click', () => {
                const tabId = item.getAttribute('data-tab');
                if (tabId) {
                    this.switchTab(tabId);
                }
            });
        });

        this.switchTab(this.activeTab);
    }

    switchTab(tabId, subtabId = null) {
        document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(el => {
            if (el.getAttribute('data-tab') === tabId) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        document.querySelectorAll('.tab-content').forEach(el => {
            if (el.id === `${tabId}-tab`) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });

        this.onTabLeave(this.activeTab);
        this.activeTab = tabId;
        if (tabId === 'tiefenarbeit' && subtabId) {
            this.initTiefenarbeit(subtabId);
        } else {
            this.onTabEnter(tabId);
        }
    }

    onTabEnter(tabId) {
        if (tabId === 'oase') {
            this.renderDashboard();
        } else if (tabId === 'sorgenzeit') {
            this.renderWorryParking();
        } else if (tabId === 'experimente') {
            this.renderExperiments();
        } else if (tabId === 'defusion') {
            this.startCanvasLoop();
        } else if (tabId === 'tracker') {
            this.renderHistory();
        } else if (tabId === 'coach') {
            this.initCbtCoach();
        } else if (tabId === 'tiefenarbeit') {
            this.initTiefenarbeit();
        }
    }

    onTabLeave(tabId) {
        if (tabId === 'defusion') {
            this.stopCanvasLoop();
        }
        if (tabId === 'atem') {
            this.stopBreathing();
            this.stopVagusExercise();
        }
        if (tabId === 'tiefenarbeit') {
            this.leaveTiefenarbeit();
        }
    }

    renderAll() {
        this.renderDashboard();
        this.renderWorryParking();
        this.renderExperiments();
        this.renderHistory();
        this.renderReframedThoughts();
    }
    // Global listeners setup
    setupEventListeners() {
        // Language selectors
        document.getElementById('select-language')?.addEventListener('change', (e) => {
            this.setLanguage(e.target.value);
        });
        document.getElementById('select-defusion-theme')?.addEventListener('change', (e) => {
            this.state.settings.defusionTheme = e.target.value;
            this.saveState();
        });

        // SOS Overlay
        document.querySelectorAll('.btn-sos, .mobile-sos-btn').forEach(btn => {
            btn.addEventListener('click', () => this.toggleModal('sos-modal', true));
        });
        document.getElementById('close-sos-modal').addEventListener('click', () => this.toggleModal('sos-modal', false));

        // Settings Overlay
        document.querySelector('.btn-settings').addEventListener('click', () => {
            document.getElementById('input-worry-time').value = this.state.settings.worryTime;
            this.toggleModal('settings-modal', true);
        });
        document.getElementById('close-settings-modal').addEventListener('click', () => this.toggleModal('settings-modal', false));
        document.getElementById('save-settings').addEventListener('click', () => {
            const wt = document.getElementById('input-worry-time').value;
            this.state.settings.worryTime = wt;
            this.saveState();
            this.toggleModal('settings-modal', false);
            this.renderDashboard();
        });

        // Reset
        document.getElementById('reset-app-data').addEventListener('click', () => {
            const confirmMsg = this.state.settings.language === 'ar' 
                ? "هل أنت متأكد تماماً أنك تريد حذف جميع البيانات؟ لا يمكن التراجع عن هذا الإجراء."
                : "Möchtest du wirklich alle Daten löschen? Dies kann nicht rückgängig gemacht werden.";
            if (confirm(confirmMsg)) {
                localStorage.removeItem('ruheoase_state');
                location.reload();
            }
        });

        // Export data for therapist
        document.getElementById('export-app-data')?.addEventListener('click', () => this.exportTherapistReport());

        // Mood logger
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const rating = parseInt(btn.getAttribute('data-rating'));
                this.logMood(rating);
                document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.renderDashboard(); // Update smart advisor recommendations immediately
            });
        });

        // Worry Parking Submit
        document.getElementById('park-worry-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('input-worry-title');
            const title = input.value.trim();
            if (title) {
                this.parkWorry(title);
                input.value = '';
                const successMsg = this._t('parking_submit') + " ✓";
                input.placeholder = successMsg;
                setTimeout(() => input.placeholder = this._t('parking_label'), 3000);
            }
        });

        // Worry wizard actions
        document.getElementById('start-sorgenzeit-btn').addEventListener('click', () => this.startSorgenzeitWizard());
        document.getElementById('sorgenzeit-cancel-btn').addEventListener('click', () => this.stopSorgenzeitWizard());

        // Experiments Submit
        document.getElementById('btn-new-experiment').addEventListener('click', () => {
            this.toggleModal('experiment-modal', true);
        });
        document.getElementById('close-experiment-modal').addEventListener('click', () => this.toggleModal('experiment-modal', false));
        document.getElementById('new-experiment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveNewExperiment();
        });
        document.getElementById('close-outcome-modal').addEventListener('click', () => this.toggleModal('outcome-modal', false));
        document.getElementById('outcome-experiment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveExperimentOutcome();
        });

        // Breathing pacer triggers
        document.getElementById('start-breathing-btn').addEventListener('click', () => this.toggleBreathing());
        document.getElementById('breathing-sound-toggle').addEventListener('change', (e) => {
            if (this.breathingState !== 'idle') {
                if (e.target.checked) {
                    window.synth.startBreathingTone();
                    window.synth.setBreathingToneState(this.breathingState);
                } else {
                    window.synth.stopBreathingTone();
                }
            }
        });

        // Somatic Vagus Shifting Trigger
        document.getElementById('start-vagus-btn')?.addEventListener('click', () => this.toggleVagusExercise());

        // Grounding Buttons Interactive Toggles
        document.querySelectorAll('.grounding-item-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const wasChecked = btn.classList.contains('checked');
                btn.classList.toggle('checked');
                
                if (!wasChecked) {
                    window.synth.playNotificationSound();
                    if ('vibrate' in navigator) {
                        navigator.vibrate(40);
                    }
                }
            });
        });

        // Thoughts Defusion
        document.getElementById('defusion-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('input-defusion-thought');
            const thought = input.value.trim();
            if (thought) {
                this.spawnThought(thought);
                input.value = '';
            }
        });

        // Psychoeducation triggers
        document.querySelectorAll('.btn-read-module').forEach(btn => {
            btn.addEventListener('click', () => {
                const moduleIndex = parseInt(btn.getAttribute('data-module'));
                this.openPsychoReader(moduleIndex);
            });
        });
        document.getElementById('close-psy-reader').addEventListener('click', () => this.closePsychoReader());
        document.getElementById('psy-prev-btn').addEventListener('click', () => this.movePsySlide(-1));
        document.getElementById('psy-next-btn').addEventListener('click', () => this.movePsySlide(1));

        // GAD-7 triggers
        document.getElementById('start-gad-btn').addEventListener('click', () => this.openGadAssessment());
        document.getElementById('close-gad-modal').addEventListener('click', () => this.toggleModal('gad-modal', false));
        document.getElementById('gad-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitGadAssessment();
        });
        // EFT Tapping triggers
        document.getElementById('start-tapping-btn')?.addEventListener('click', () => this.startTapping());
        document.getElementById('stop-tapping-btn')?.addEventListener('click', () => this.resetTapping());
        document.getElementById('tapping-pad-button')?.addEventListener('click', () => this.handleTapInput());
        
        // CBT Coach form submit
        document.getElementById('coach-chat-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendCoachMessage();
        });
    }

    toggleModal(modalId, show) {
        const modal = document.getElementById(modalId);
        if (show) {
            modal.classList.add('active');
            window.synth.resumeContext();
        } else {
            modal.classList.remove('active');
        }
    }

    // === 1. SMART ADVISOR & DASHBOARD ===
    renderDashboard() {
        // Greeting
        const hr = new Date().getHours();
        let greetingKey = 'greeting_morning';
        if (hr >= 11 && hr < 14) greetingKey = 'greeting_noon';
        else if (hr >= 14 && hr < 18) greetingKey = 'greeting_afternoon';
        else if (hr >= 18 && hr < 22) greetingKey = 'greeting_evening';
        else greetingKey = 'greeting_night';

        const greeting = this._t(greetingKey);
        document.getElementById('dashboard-greeting').innerText = greeting;

        // Quote
        const quoteIdx = Math.floor(Math.random() * DE_QUOTES.length);
        const quote = DE_QUOTES[quoteIdx];
        
        // Show Arabic translation if in Arabic mode
        if (this.state.settings.language === 'ar') {
            // Simulated Arabic affirmations
            const arQuotes = [
                { text: "لست بحاجة لتصديق أفكارك. إنها مثل الغيوم في السماء – تعبر فقط.", author: "جاك كورنفيلد" },
                { text: "لا ينبع القلق من الأشياء نفسها، بل من طريقة تفكيرنا ونظرتنا إليها.", author: "إبيكتيتوس" },
                { text: "تنفس بعمق. هذا مجرد فكرة عابرة، والأفكار يمكن تغييرها.", author: "لويز هاي" },
                { text: "أعظم سلاح ضد التوتر والضغط هو قدرتنا على اختيار فكرة وتفضيلها على أخرى.", author: "ويليام جيمس" },
                { text: "المشاعر تأتي وتذهب كأمواج البحر. لست مجبراً على ركوب كل موجة.", author: "أميت راي" }
            ];
            const q = arQuotes[quoteIdx % arQuotes.length];
            document.getElementById('dashboard-quote-text').innerText = `"${q.text}"`;
            document.getElementById('dashboard-quote-author').innerText = `— ${q.author}`;
        } else {
            document.getElementById('dashboard-quote-text').innerText = `"${quote.text}"`;
            document.getElementById('dashboard-quote-author').innerText = `— ${quote.author}`;
        }

        // Widgets
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        document.getElementById('dashboard-worry-count').innerText = activeWorries.length;
        document.getElementById('dashboard-worry-time').innerText = this.state.settings.worryTime;

        const latestGad = this.state.gadScores[this.state.gadScores.length - 1];
        const badge = document.getElementById('dashboard-gad-badge');
        if (latestGad) {
            badge.innerText = `Score: ${latestGad.score} (${this.getGadSeverityLabel(latestGad.severity)})`;
            badge.className = `severity-badge sev-${latestGad.severity}`;
        } else {
            badge.innerText = this._t('tracker_empty');
            badge.className = "severity-badge sev-minimal";
        }

        // Run Smart Advisor
        this.runSmartAdvisor();
    }

    runSmartAdvisor() {
        const advisorText = document.getElementById('dashboard-advisor-text');
        if (!advisorText) return;

        const latestGad = this.state.gadScores[this.state.gadScores.length - 1];
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        const moodLogs = this.state.moodHistory;
        
        let recommendation = "";
        const lang = this.state.settings.language;

        // Smart Logic
        if (latestGad && latestGad.score >= 15) {
            recommendation = lang === 'ar'
                ? "تنبيه ذكي: قلقك الحالي مرتفع. ننصحك بالتركيز الشديد على تمارين النفس والعصب الحائر والابتعاد عن التفكير المفرط. لا تتردد في الاتصال بخطوط المساعدة الساخنة عند الحاجة."
                : "Smart Advisor: Deine Angstwerte liegen im schweren Bereich. Wir empfehlen dir dringend eine 5-minütige Resonanzatmung, gefolgt von einer Vagus-Blick-Entlastung. Scheue dich nicht, im SOS-Bereich Hilfe zu suchen.";
        } else if (activeWorries.length >= 4) {
            recommendation = lang === 'ar'
                ? "تنبيه ذكي: موقف المخاوف لديك ممتلئ (أكثر من 4 مخاوف). من المهم جدًا تفعيل 'وقت القلق' الآن لتفريغ هذه الأفكار وتحليلها بدلاً من تراكمها في رأسك."
                : "Smart Advisor: Dein Sorgen-Parkplatz ist voll. Um den Kopf frei zu bekommen, empfehlen wir dir, jetzt eine geführte Sorgenzeit zu starten und konstruktive Lösungspläne zu schmieden.";
        } else if (moodLogs.length > 0 && moodLogs[moodLogs.length - 1].rating <= 2) {
            recommendation = lang === 'ar'
                ? "تنبيه ذكي: نلاحظ أنك تشعر بالتوتر أو عدم الراحة اليوم. جرّب تمرين 'التنهد الفسيولوجي' (3 تنهدات سريعة) لخفض هرمونات التوتر فوراً وضبط جسدك."
                : "Smart Advisor: Du fühlst dich unruhig. Probiere den 'Physiologischen Seufzer' (3-mal wiederholen) aus. Das ist die schnellste biologische Bremse deines Körpers gegen Stress.";
        } else {
            // Recovery progress recommendations
            recommendation = lang === 'ar'
                ? "تنبيه ذكي: حالتك مستقرة حالياً. هذا وقت ممتاز للتعلم: ننصحك بقراءة 'الدرس 3: العصب الحائر' في واحة المعرفة لتعزيز قدرتك العضوية على الاسترخاء المستقبلي."
                : "Smart Advisor: Dein Geist ist ruhig. Perfekter Zeitpunkt, um dein Wissen zu festigen: Lies Modul 3 in der Wissens-Oase, um die biologische Steuerung deines Körpers noch besser zu verstehen.";
        }

        advisorText.innerText = recommendation;
        this.renderDashboardValues();
    }

    // === 2. WORRY POSTPONEMENT & ARCHIVE ===
    parkWorry(title) {
        const worry = {
            id: 'worry-' + Date.now(),
            title: title,
            date: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE'),
            released: false,
            evaluation: null
        };
        this.state.parkedWorries.push(worry);
        this.saveState();
        this.renderWorryParking();
        this.renderDashboard();
    }

    deleteWorry(id) {
        this.state.parkedWorries = this.state.parkedWorries.filter(w => w.id !== id);
        this.saveState();
        this.renderWorryParking();
        this.renderDashboard();
    }

    renderWorryParking() {
        const container = document.getElementById('parked-worries-list');
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        
        if (activeWorries.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
                    ${this._t('parking_empty')}
                </div>
            `;
            document.getElementById('start-sorgenzeit-btn').disabled = true;
            return;
        }

        document.getElementById('start-sorgenzeit-btn').disabled = false;
        container.innerHTML = activeWorries.map(w => `
            <div class="parked-item">
                <div>
                    <div class="parked-title">${w.title}</div>
                    <div class="parked-date">${this._t('widget_parked')}: ${w.date}</div>
                </div>
                <div class="parked-item-actions">
                    <button class="btn-icon-danger" title="Löschen" onclick="app.deleteWorry('${w.id}')">
                        <svg viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
            </div>
        `).join('');

        // Also render the Worry Archive
        this.renderWorryArchive();
    }

    renderWorryArchive() {
        const container = document.getElementById('resolved-worries-archive');
        if (!container) return;

        const resolved = this.state.parkedWorries.filter(w => w.released);

        if (resolved.length === 0) {
            container.innerHTML = `
                <div style="color: var(--text-muted); padding: 1.5rem; text-align:center;">
                    ${this._t('archive_empty')}
                </div>
            `;
            return;
        }

        container.innerHTML = resolved.map(w => {
            const hasAction = w.evaluation?.control;
            const evalText = hasAction 
                ? `<strong>${this._t('archive_control_yes')}</strong> ${w.evaluation.actionStep}`
                : `<strong>${this._t('archive_control_no')}</strong>`;
            
            return `
                <div style="padding:1rem 0; border-bottom:1px solid var(--border-color);">
                    <div style="font-weight:600; font-family:var(--font-serif); font-style:italic;">"${w.title}"</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin: 0.25rem 0;">
                        ${w.date} &rarr; ${w.evaluation?.resolvedDate || ''}
                    </div>
                    <div style="font-size:0.85rem; color:var(--accent-teal);">${evalText}</div>
                </div>
            `;
        }).join('');
    }

    startSorgenzeitWizard() {
        this.activeSorgenzeitWorryIndex = 0;
        this.sorgenzeitTempAnswers = {};
        
        document.getElementById('sorgenzeit-setup-view').style.display = 'none';
        document.getElementById('sorgenzeit-active-view').style.display = 'block';

        this.renderSorgenzeitStep();
    }

    stopSorgenzeitWizard() {
        document.getElementById('sorgenzeit-setup-view').style.display = 'grid';
        document.getElementById('sorgenzeit-active-view').style.display = 'none';
        this.renderWorryParking();
        this.renderDashboard();
    }

    renderSorgenzeitStep() {
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        const total = activeWorries.length;
        
        if (this.activeSorgenzeitWorryIndex >= total) {
            this.showSorgenzeitCompletion();
            return;
        }

        const progress = ((this.activeSorgenzeitWorryIndex) / total) * 100;
        document.getElementById('sorgenzeit-progress-fill').style.width = `${progress}%`;

        const worry = activeWorries[this.activeSorgenzeitWorryIndex];
        const stepContainer = document.getElementById('sorgenzeit-worry-eval-container');

        // Render Control Question
        const lang = this.state.settings.language;
        const worryCountText = lang === 'ar'
            ? `الخوف ${this.activeSorgenzeitWorryIndex + 1} من ${total}`
            : `Sorge ${this.activeSorgenzeitWorryIndex + 1} von ${total}`;

        stepContainer.innerHTML = `
            <div class="worry-evaluation-card">
                <div class="worry-eval-title">${worryCountText}</div>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem;">${worry.date}</div>
                <div class="worry-eval-prompt" style="font-family: var(--font-serif); font-style: italic; font-size: 1.4rem;">
                    "${worry.title}"
                </div>
                <h3 style="margin-bottom: 1.5rem;">${this._t('worry_control_question')}</h3>
                <div class="worry-eval-choices">
                    <button class="btn btn-primary" onclick="app.setSorgenzeitControl(true)">
                        ${this._t('worry_control_yes')}
                    </button>
                    <button class="btn btn-secondary" onclick="app.setSorgenzeitControl(false)">
                        ${this._t('worry_control_no')}
                    </button>
                </div>
            </div>
        `;
    }

    setSorgenzeitControl(canControl) {
        this.sorgenzeitTempAnswers.control = canControl;
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        const worry = activeWorries[this.activeSorgenzeitWorryIndex];
        const stepContainer = document.getElementById('sorgenzeit-worry-eval-container');

        if (canControl) {
            stepContainer.innerHTML = `
                <div class="worry-evaluation-card">
                    <div class="worry-eval-title">${this._t('worry_action_title')}</div>
                    <div class="worry-eval-prompt" style="font-size: 1.15rem; margin-bottom: 1.5rem;">
                        ${this._t('worry_action_desc')}
                    </div>
                    <div class="cbt-action-input-box">
                        <label class="form-label">${this._t('worry_action_label')}</label>
                        <input type="text" id="worry-next-step-input" class="form-control" placeholder="${this._t('worry_action_placeholder')}">
                    </div>
                    <div class="worry-eval-choices">
                        <button class="btn btn-primary" onclick="app.saveSorgenzeitActionStep()">
                            ${this._t('worry_action_save')}
                        </button>
                    </div>
                </div>
            `;
        } else {
            stepContainer.innerHTML = `
                <div class="worry-evaluation-card">
                    <div class="worry-eval-title">${this._t('worry_defusion_title')}</div>
                    <div class="worry-eval-prompt" style="font-size: 1.15rem; margin-bottom: 1.5rem;">
                        ${this._t('worry_defusion_desc')}
                    </div>
                    
                    <div class="release-container">
                        <div class="floating-worry-text" id="floating-worry-anim">${worry.title}</div>
                    </div>

                    <div class="worry-eval-choices">
                        <button class="btn btn-warning" onclick="app.triggerWorryReleaseAnimation()">
                            ${this._t('worry_defusion_release')}
                        </button>
                    </div>
                </div>
            `;
        }
    }

    saveSorgenzeitActionStep() {
        const input = document.getElementById('worry-next-step-input');
        const nextStep = input.value.trim() || "Kein konkreter Schritt eingetragen.";
        
        const activeWorries = this.state.parkedWorries.filter(w => !w.released);
        const worry = activeWorries[this.activeSorgenzeitWorryIndex];

        const targetWorry = this.state.parkedWorries.find(w => w.id === worry.id);
        if (targetWorry) {
            targetWorry.released = true;
            targetWorry.evaluation = {
                control: true,
                actionStep: nextStep,
                resolvedDate: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE')
            };
        }

        this.saveState();
        this.activeSorgenzeitWorryIndex++;
        this.renderSorgenzeitStep();
    }

    triggerWorryReleaseAnimation() {
        const animText = document.getElementById('floating-worry-anim');
        animText.classList.add('release-animation');

        setTimeout(() => {
            const activeWorries = this.state.parkedWorries.filter(w => !w.released);
            const worry = activeWorries[this.activeSorgenzeitWorryIndex];

            const targetWorry = this.state.parkedWorries.find(w => w.id === worry.id);
            if (targetWorry) {
                targetWorry.released = true;
                targetWorry.evaluation = {
                    control: false,
                    resolvedDate: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE')
                };
            }
            this.saveState();

            this.activeSorgenzeitWorryIndex++;
            this.renderSorgenzeitStep();
        }, 4000);
    }

    showSorgenzeitCompletion() {
        document.getElementById('sorgenzeit-progress-fill').style.width = `100%`;
        const stepContainer = document.getElementById('sorgenzeit-worry-eval-container');

        stepContainer.innerHTML = `
            <div class="worry-evaluation-card" style="padding: 4rem;">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">🌅</div>
                <h2 style="margin-bottom: 1rem; color: var(--accent-teal);">${this._t('worry_complete_title')}</h2>
                <p style="max-width: 500px; color: var(--text-secondary); margin-bottom: 2.5rem; font-size: 1.1rem;">
                    ${this._t('worry_complete_desc')}
                </p>
                <button class="btn btn-primary" onclick="app.stopSorgenzeitWizard()">
                    ${this._t('worry_complete_btn')}
                </button>
            </div>
        `;
    }

    // === 3. BEHAVIORAL EXPERIMENTS ===
    renderExperiments() {
        const activeContainer = document.getElementById('active-experiments');
        const completedContainer = document.getElementById('completed-experiments');

        const active = this.state.behavioralExperiments.filter(e => !e.completed);
        const completed = this.state.behavioralExperiments.filter(e => e.completed);

        const lang = this.state.settings.language;

        if (active.length === 0) {
            activeContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">
                    ${this._t('exp_empty')}
                </div>
            `;
        } else {
            activeContainer.innerHTML = active.map(e => `
                <div class="glass-card" style="border-color: rgba(56, 189, 248, 0.2)">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                        <span class="severity-badge sev-moderate">${lang === 'ar' ? 'نشط' : 'Aktiv'}</span>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${e.date}</span>
                    </div>
                    <h3 style="margin-bottom:0.5rem; font-family:var(--font-serif); font-style:italic;">"${e.prediction}"</h3>
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1rem;">
                        <strong>${lang === 'ar' ? 'الاحتمالية:' : 'Wahrscheinlichkeit:'}</strong> ${e.probability}%, 
                        <strong>${lang === 'ar' ? 'الشدة:' : 'Bedrohlichkeit:'}</strong> ${e.severity}/10
                    </p>
                    <p style="font-size:0.9rem; margin-bottom:1.5rem;">
                        <strong>${lang === 'ar' ? 'التجربة:' : 'Design:'}</strong> ${e.design}
                    </p>
                    <button class="btn btn-accent btn-sm" onclick="app.openExperimentOutcomeModal('${e.id}')">
                        ${lang === 'ar' ? 'تسجيل النتائج' : 'Ergebnis eintragen'}
                    </button>
                </div>
            `).join('');
        }

        if (completed.length === 0) {
            completedContainer.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
                    ${this._t('exp_no_completed')}
                </div>
            `;
        } else {
            completedContainer.innerHTML = completed.map(e => `
                <div class="glass-card" style="margin-bottom:1.5rem; border-color: rgba(16, 185, 129, 0.2)">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
                        <span class="severity-badge sev-minimal" style="background:rgba(16, 185, 129,0.1)">${lang === 'ar' ? 'مكتمل' : 'Abgeschlossen'}</span>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${e.date}</span>
                    </div>
                    <div class="grid-2" style="gap: 1.5rem;">
                        <div>
                            <p style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">${lang === 'ar' ? 'التوقع المقلق' : 'Die Angst-Vorhersage'}</p>
                            <h4 style="font-family:var(--font-serif); font-style:italic; margin-bottom:0.5rem;">"${e.prediction}"</h4>
                            <p style="font-size:0.8rem; color:var(--text-secondary)">${lang === 'ar' ? 'الاحتمالية:' : 'Wahrscheinlichkeit:'} ${e.probability}%, ${lang === 'ar' ? 'الشدة:' : 'Bedrohlichkeit:'} ${e.severity}/10</p>
                        </div>
                        <div>
                            <p style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">${lang === 'ar' ? 'ما حدث بالفعل' : 'Was tatsächlich geschah'}</p>
                            <h4 style="margin-bottom:0.5rem;">"${e.outcome}"</h4>
                            <p style="font-size:0.85rem; color:var(--accent-teal)"><strong>${lang === 'ar' ? 'التعلم المستفاد:' : 'Erkenntnis:'}</strong> ${e.learning}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    saveNewExperiment() {
        const prediction = document.getElementById('exp-prediction').value.trim();
        const probability = parseInt(document.getElementById('exp-probability').value);
        const severity = parseInt(document.getElementById('exp-severity').value);
        const design = document.getElementById('exp-design').value.trim();

        if (prediction && design) {
            const exp = {
                id: 'exp-' + Date.now(),
                prediction: prediction,
                probability: probability,
                severity: severity,
                design: design,
                completed: false,
                date: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE')
            };

            this.state.behavioralExperiments.push(exp);
            this.saveState();
            this.toggleModal('experiment-modal', false);
            
            document.getElementById('exp-prediction').value = '';
            document.getElementById('exp-design').value = '';

            this.renderExperiments();
        }
    }

    openExperimentOutcomeModal(id) {
        this.activeExperimentId = id;
        const exp = this.state.behavioralExperiments.find(e => e.id === id);
        document.getElementById('outcome-prediction-text').innerText = `"${exp.prediction}"`;
        this.toggleModal('outcome-modal', true);
    }

    saveExperimentOutcome() {
        const outcome = document.getElementById('exp-outcome').value.trim();
        const learning = document.getElementById('exp-learning').value.trim();

        if (outcome && learning) {
            const exp = this.state.behavioralExperiments.find(e => e.id === this.activeExperimentId);
            if (exp) {
                exp.completed = true;
                exp.outcome = outcome;
                exp.learning = learning;
            }

            this.saveState();
            this.toggleModal('outcome-modal', false);

            document.getElementById('exp-outcome').value = '';
            document.getElementById('exp-learning').value = '';

            this.renderExperiments();
        }
    }

    // === 4. ATEM-COHERENCE & MOBILE HAPTICS ===
    toggleBreathing() {
        const btn = document.getElementById('start-breathing-btn');
        const select = document.getElementById('breathing-pattern');
        const durationSelect = document.getElementById('breathing-duration');

        if (this.breathingInterval) {
            this.stopBreathing();
            btn.innerText = this._t('breath_start_btn');
            btn.className = "btn btn-primary";
            select.disabled = false;
            durationSelect.disabled = false;
        } else {
            const pattern = select.value;
            const minutes = parseInt(durationSelect.value);
            
            this.breathingTimeRemaining = minutes * 60;
            this.breathingCycleTime = 0;
            this.coherenceScore = 0;
            this.breathingState = 'idle';

            select.disabled = true;
            durationSelect.disabled = true;
            btn.innerText = this._t('breath_stop_btn');
            btn.className = "btn btn-secondary";

            window.synth.resumeContext();
            
            const soundEnabled = document.getElementById('breathing-sound-toggle').checked;
            if (soundEnabled) {
                window.synth.startBreathingTone();
            }

            this.runBreathingPacer(pattern);
            this.breathingInterval = setInterval(() => this.tickBreathing(pattern), 1000);
        }
    }

    stopBreathing() {
        if (this.breathingInterval) {
            clearInterval(this.breathingInterval);
            this.breathingInterval = null;
        }
        window.synth.stopBreathingTone();
        
        const circle = document.getElementById('breath-circle');
        circle.className = "breathing-circle";
        document.getElementById('breath-text').innerText = this._t('breath_ready');
        document.getElementById('breath-timer-count').innerText = "00:00";
        document.getElementById('breath-coherence-fill').style.width = `0%`;
        document.getElementById('breath-coherence-val').innerText = `0%`;
    }

    toggleVagusExercise() {
        const btn = document.getElementById('start-vagus-btn');
        const dot = document.querySelector('#somatic-vagus .vagus-dot');
        const descText = document.querySelector('#somatic-vagus p[data-l10n="vagus_desc"]');
        if (!btn || !dot || !descText) return;

        if (this.vagusShiftingInterval) {
            this.stopVagusExercise();
        } else {
            this.vagusState = 'right';
            this.vagusTimer = 30;
            
            btn.innerText = this._t('vagus_stop');
            btn.className = "btn btn-secondary";
            
            dot.style.left = "calc(100% - 36px)";
            
            descText.innerHTML = `<strong>${this._t('vagus_look_right')}</strong><br><br><span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-lavender);">${this.vagusTimer}s</span>`;
            
            window.synth.playNotificationSound();
            
            this.vagusShiftingInterval = setInterval(() => {
                this.vagusTimer--;
                
                if (this.vagusTimer <= 0) {
                    if (this.vagusState === 'right') {
                        this.vagusState = 'left';
                        this.vagusTimer = 30;
                        dot.style.left = "12px";
                        descText.innerHTML = `<strong>${this._t('vagus_look_left')}</strong><br><br><span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-lavender);">${this.vagusTimer}s</span>`;
                        window.synth.playNotificationSound();
                        if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
                    } else if (this.vagusState === 'left') {
                        this.vagusState = 'done';
                        this.stopVagusExercise(true);
                    }
                } else {
                    const text = this.vagusState === 'right' ? this._t('vagus_look_right') : this._t('vagus_look_left');
                    descText.innerHTML = `<strong>${text}</strong><br><br><span style="font-size: 1.25rem; font-weight: 700; color: var(--accent-lavender);">${this.vagusTimer}s</span>`;
                }
            }, 1000);
        }
    }

    stopVagusExercise(completed = false) {
        if (this.vagusShiftingInterval) {
            clearInterval(this.vagusShiftingInterval);
            this.vagusShiftingInterval = null;
        }
        
        const btn = document.getElementById('start-vagus-btn');
        const dot = document.querySelector('#somatic-vagus .vagus-dot');
        const descText = document.querySelector('#somatic-vagus p[data-l10n="vagus_desc"]');
        if (!btn || !dot || !descText) return;
        
        btn.innerText = this._t('vagus_start');
        btn.className = "btn btn-primary";
        
        dot.style.left = "calc(50% - 12px)";
        
        if (completed) {
            window.synth.playNotificationSound();
            if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
            descText.innerHTML = `<strong>${this._t('vagus_done')}</strong>`;
        } else {
            descText.innerHTML = this._t('vagus_desc');
        }
        this.vagusState = 'idle';
    }

    runBreathingPacer(pattern) {
        this.updateBreathingVisual(pattern);
    }

    tickBreathing(pattern) {
        this.breathingTimeRemaining--;
        this.breathingCycleTime++;

        const m = Math.floor(this.breathingTimeRemaining / 60);
        const s = this.breathingTimeRemaining % 60;
        document.getElementById('breath-timer-count').innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        if (this.breathingTimeRemaining <= 0) {
            this.toggleBreathing();
            const endMsg = this.state.settings.language === 'ar' 
                ? "انتهت الجلسة بسلام. استشعر التغيير الحاصل في هدوء جسدك الآن."
                : "Atemübung beendet. Spüre kurz nach, wie sich dein Körper jetzt anfühlt.";
            alert(endMsg);
            return;
        }

        this.updateBreathingVisual(pattern);
    }

    updateBreathingVisual(pattern) {
        const circle = document.getElementById('breath-circle');
        const text = document.getElementById('breath-text');
        
        let inhaleTime = 5;
        let holdTime1 = 0;
        let exhaleTime = 5;
        let holdTime2 = 0;

        if (pattern === 'box') {
            inhaleTime = 4;
            holdTime1 = 4;
            exhaleTime = 4;
            holdTime2 = 4;
        } else if (pattern === 'calm') {
            inhaleTime = 4;
            holdTime1 = 7;
            exhaleTime = 8;
            holdTime2 = 0;
        }

        const cycleLength = inhaleTime + holdTime1 + exhaleTime + holdTime2;
        const currentSecondInCycle = this.breathingCycleTime % cycleLength;

        let state = 'inhale';
        let transitionDuration = inhaleTime;
        let labelKey = 'breath_inhale';

        if (currentSecondInCycle < inhaleTime) {
            state = 'inhale';
            transitionDuration = inhaleTime - currentSecondInCycle;
            labelKey = 'breath_inhale';
            circle.className = "breathing-circle inhale";
            circle.style.transition = `transform ${transitionDuration}s ease-out`;
        } else if (currentSecondInCycle < inhaleTime + holdTime1) {
            state = 'hold';
            transitionDuration = (inhaleTime + holdTime1) - currentSecondInCycle;
            labelKey = 'breath_hold';
            circle.className = "breathing-circle hold";
            circle.style.transition = `transform ${transitionDuration}s ease-in-out`;
        } else if (currentSecondInCycle < inhaleTime + holdTime1 + exhaleTime) {
            state = 'exhale';
            transitionDuration = (inhaleTime + holdTime1 + exhaleTime) - currentSecondInCycle;
            labelKey = 'breath_exhale';
            circle.className = "breathing-circle exhale";
            circle.style.transition = `transform ${transitionDuration}s ease-in`;
        } else {
            state = 'hold';
            transitionDuration = cycleLength - currentSecondInCycle;
            labelKey = 'breath_hold';
            circle.className = "breathing-circle hold";
            circle.style.transition = `transform ${transitionDuration}s ease-in-out`;
        }

        text.innerText = this._t(labelKey);

        // Adjust Synthesizer state
        if (state !== this.breathingState) {
            this.breathingState = state;
            const soundEnabled = document.getElementById('breathing-sound-toggle').checked;
            if (soundEnabled) {
                window.synth.setBreathingToneState(state, transitionDuration);
            }

            // Mobile Haptic Feedback transition alert (vibrates 50ms)
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        }

        // Increment coherence score
        if (pattern === 'resonant') {
            this.coherenceScore = Math.min(98, this.coherenceScore + 0.35);
        } else {
            this.coherenceScore = Math.min(85, this.coherenceScore + 0.2);
        }

        document.getElementById('breath-coherence-fill').style.width = `${this.coherenceScore}%`;
        document.getElementById('breath-coherence-val').innerText = `${Math.round(this.coherenceScore)}%`;
    }

    // === 5. GEDANKEN-STROM (HIDPI CANVAS & SPACE THEME) ===
    initCanvas() {
        this.canvas = document.getElementById('defusion-canvas');
        if (!this.canvas) return;
        this.canvasCtx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        if (!this.canvas) return;
        const container = document.getElementById('defusion-canvas-container');
        const rect = container.getBoundingClientRect();
        
        // Crisp Canvas: Support device pixel ratio
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.canvasCtx.scale(dpr, dpr);
    }

    startCanvasLoop() {
        if (this.animationFrameId) return;
        this.animateThoughtsStream();
    }

    stopCanvasLoop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    spawnThought(text) {
        const dpr = window.devicePixelRatio || 1;
        const w = this.canvas.width / dpr;
        const h = this.canvas.height / dpr;

        // Arabic alignment: RTL starts from right to left
        const isRtl = this.state.settings.language === 'ar';

        const leaf = {
            id: 'thought-' + Date.now(),
            text: text,
            x: isRtl ? w + 200 : -200, // Spawn on opposite side based on RTL
            y: h * 0.3 + Math.random() * (h * 0.4),
            speed: (0.8 + Math.random() * 0.7) * (isRtl ? -1 : 1), // reverse speed for RTL
            wiggleSpeed: 0.01 + Math.random() * 0.02,
            wiggleAmp: 20 + Math.random() * 15,
            wiggleOffset: Math.random() * 100,
            scale: 0.9 + Math.random() * 0.3,
            alpha: 1.0,
            rotation: (Math.random() - 0.5) * 0.2
        };
        this.defusionThoughts.push(leaf);
    }

    animateThoughtsStream() {
        this.animationFrameId = requestAnimationFrame(this.animateThoughtsStream);
        if (!this.canvasCtx) return;

        const ctx = this.canvasCtx;
        const dpr = window.devicePixelRatio || 1;
        const w = this.canvas.width / dpr;
        const h = this.canvas.height / dpr;

        const theme = this.state.settings.defusionTheme || 'river';
        const isRtl = this.state.settings.language === 'ar';

        // Draw background
        if (theme === 'space') {
            ctx.fillStyle = '#02020a'; // ultra dark space
        } else {
            ctx.fillStyle = '#050714'; // deep indigo river
        }
        ctx.fillRect(0, 0, w, h);

        const now = Date.now() * 0.0015;

        // Draw Stars background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        for (let i = 0; i < 20; i++) {
            const starX = (w * 0.07 + i * 291) % w;
            const starY = (h * 0.03 + i * 143) % (theme === 'space' ? h : h * 0.3); // sky or whole space
            const size = 0.5 + Math.abs(Math.sin(now + i)) * 1.5;
            ctx.fillRect(starX, starY, size, size);
        }

        // Draw River Waves if in river theme
        if (theme === 'river') {
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
            ctx.lineWidth = 4;
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                const yOffset = h * 0.4 + i * 40;
                const freq = 0.003 + i * 0.001;
                const amp = 15 + i * 5;
                for (let x = 0; x <= w; x += 10) {
                    const y = yOffset + Math.sin(x * freq + now + i) * amp;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
        }

        // Render thoughts
        this.defusionThoughts.forEach((t, index) => {
            t.x += t.speed;
            const targetY = t.y + Math.sin(Math.abs(t.x) * t.wiggleSpeed + t.wiggleOffset) * t.wiggleAmp;
            
            // Fade out limits
            if (isRtl) {
                if (t.x < 250) {
                    t.alpha = Math.max(0, t.x / 250);
                }
            } else {
                if (t.x > w - 250) {
                    t.alpha = Math.max(0, (w - t.x) / 250);
                }
            }

            ctx.save();
            ctx.translate(t.x, targetY);
            ctx.rotate(t.rotation + Math.sin(Math.abs(t.x) * 0.01) * 0.05);
            ctx.scale(t.scale, t.scale);

            if (theme === 'space') {
                // Space shooting star drawing
                // Draw glow tail
                const gradient = ctx.createLinearGradient(isRtl ? 0 : -100, 0, isRtl ? 100 : 0, 0);
                gradient.addColorStop(isRtl ? 0 : 1, `rgba(167, 139, 250, ${0.4 * t.alpha})`);
                gradient.addColorStop(isRtl ? 1 : 0, 'rgba(167, 139, 250, 0)');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(isRtl ? 0 : -110, -15, 110, 30);

                // Star core bubble
                ctx.fillStyle = `rgba(167, 139, 250, ${0.1 * t.alpha})`;
                ctx.strokeStyle = `rgba(167, 139, 250, ${0.7 * t.alpha})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, 0, 22, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Sparkle lines
                ctx.beginPath();
                ctx.moveTo(0, -32); ctx.lineTo(0, 32);
                ctx.moveTo(-32, 0); ctx.lineTo(32, 0);
                ctx.stroke();
            } else {
                // Leaf drawing
                ctx.fillStyle = `rgba(13, 148, 136, ${0.15 * t.alpha})`; 
                ctx.strokeStyle = `rgba(45, 212, 191, ${0.7 * t.alpha})`; 
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(-90, 0);
                ctx.quadraticCurveTo(0, -40, 90, 0);
                ctx.quadraticCurveTo(0, 40, -90, 0);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                ctx.strokeStyle = `rgba(45, 212, 191, ${0.3 * t.alpha})`;
                ctx.beginPath();
                ctx.moveTo(-90, 0);
                ctx.lineTo(80, 0);
                ctx.stroke();
            }

            // Draw Text (Arabic fits automatically)
            ctx.fillStyle = `rgba(248, 250, 252, ${t.alpha})`;
            ctx.font = "14px 'Inter', system-ui, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(t.text, 0, -4);

            ctx.restore();
        });

        // Filter out
        if (isRtl) {
            this.defusionThoughts = this.defusionThoughts.filter(t => t.x > -200 && t.alpha > 0);
        } else {
            this.defusionThoughts = this.defusionThoughts.filter(t => t.x < w + 200 && t.alpha > 0);
        }
    }

    // === 6. PSYCHOEDUCATION READER ===
    openPsychoReader(moduleIndex) {
        // Build psycho education modules in both DE and AR
        const lang = this.state.settings.language;

                const modulesDE = [
            {
                title: "Modul 1: Neurobiologie der generalisierten Angst",
                slides: [
                    {
                        title: "Amygdala-Hyperaktivität & Tonisches Arousal",
                        content: "Generalized Anxiety Disorder (GAD) manifestiert sich neurobiologisch als persistierende, unterschwellige Dysregulation des autonomen Nervensystems. Die Amygdala verbleibt in einem chronischen Hyperaktivitätszustand und triggert kontinuierlich defensive Stressreaktionen, unbeeinflusst von der Abwesenheit realer Umweltstressoren.",
                        highlight: "Die Angstreaktion ist kein struktureller Defekt, sondern eine evolutionär konservierte, dysregulationsempfindliche Defensivreaktion."
                    },
                    {
                        title: "Kognitive Kontrollillusionen & Metasorgen",
                        content: "Chronisches Grübeln fungiert oft als dysfunktionale Bewältigungsstrategie. Das Metakognitionssystem etabliert die Überzeugung, dass Antizipation von Katastrophen eine Schutzwirkung entfaltet. Diese kognitive Kontrollillusion perpetuiert das Arousal und führt zur Erschöpfung präfrontaler Kontrollnetzwerke.",
                        highlight: "Grübelen verringert die Entropie zukünftiger Ereignisse nicht; es erschöpft lediglich die exekutiven Ressourcen im Präfrontalkortex."
                    },
                    {
                        title: "Neuronale Plastizität & Präfrontale Regulation",
                        content: "Die Reduktion der Symptomatik gelingt durch Hemmung der kognitiven Perseveration und gezielte Stimulierung top-down regulierender präfrontaler Areale. Techniken wie Sorgenaufschub (MCT) und Vagusstimulation senken die neuronale Reaktivität und fördern synaptische Umstrukturierung (Extinktionslernen).",
                        highlight: "Durch die Reduktion perseverativer Gedankenketten wird das Bedrohungssystem des Gehirns systematisch desensibilisiert."
                    }
                ]
            },
            {
                title: "Modul 2: Kognitive Perseveration & Metakognition",
                slides: [
                    {
                        title: "Verstärkungsmechanismen perseverativer Kognitionen",
                        content: "Was-wäre-wenn-Kognitionen aktivieren vegetative Angstreaktionen. Der unmittelbare Versuch, diese gedanklich aufzulösen, wirkt als negative Verstärkung (Erleichterung) und signalisiert dem Arbeitsgedächtnis die Priorität des Triggers. Dies führt zur Chronifizierung perseverativer Schleifen.",
                        highlight: "Selektive Aufmerksamkeit auf vegetative Symptome verfestigt die dysfunktionale Bedrohungsevaluierung."
                    },
                    {
                        title: "Metakognitive Dysfunktion (Typ-2-Sorgen)",
                        content: "Typ-2-Sorgen (Metasorgen) bezeichnen kognitive Evaluationen über die eigenen Denkprozesse ('Mein Grübeln ist unkontrollierbar oder schädlich'). Diese kognitiven Fehleinschätzungen blockieren die natürliche Extinktion der Angstreaktion. Der Abbau gelingt durch metakognitive Distanzierung (Detached Mindfulness).",
                        highlight: "Gedanken sind temporäre kognitive Repräsentationen und besitzen keine intrinsische Realität oder Handlungsaufforderung."
                    }
                ]
            },
            {
                title: "Modul 3: Vegetatives Nervensystem & Polyvagal-Regulation",
                slides: [
                    {
                        title: "Sympathovagale Balance & Nervus Vagus",
                        content: "Der Nervus Vagus (10. Hirnnerv) moduliert das parasympathische System und dient als primärer kardialer Inhibitor. Bei chronischer Angst überwiegt die sympathische Aktivierung (Fight-or-Flight). Die gezielte somatosensorische und respiratorische Vagusaktivierung reaktiviert die kardiale Bremse.",
                        highlight: "Physiologische Homöostase induziert top-down eine neuronale Beruhigung in kortikalen Angstzentren."
                    },
                    {
                        title: "Kardiorespiratorische Kohärenz & HRV-Optimierung",
                        content: "Atemzyklen im Frequenzbereich von ~0.1 Hz (6 Atemzüge/Minute) maximieren die respiratorische Sinusarrhythmie. Diese cardiopulmonale Resonanz optimiert den Baroreflex und steigert die Herzfrequenzvariabilität (HRV), was direkt mit verbesserter präfrontaler Emotionsregulation korreliert.",
                        highlight: "Gezielte respiratorische Frequenzstimulation optimiert nachweislich den autonomen Regulationsindex."
                    }
                ]
            },
            {
                title: "Modul 4: Adaptives Coping & Extinktionskonsolidierung",
                slides: [
                    {
                        title: "Nicht-lineare Remission & Erholungsverlauf",
                        content: "Die Reduktion der Angstsymptome verläuft phasenhaft und unterliegt neurobiologischen Fluktuationen. Temporäre Arousal-Peaks sind keine Indikatoren für Therapieversagen, sondern physiologische Schwankungen während des neuronalen Umbauprozesses. Sie bieten wertvolle Gelegenheiten zur Konsolidierung neuer Bewältigungsmuster.",
                        highlight: "Akute vegetative Symptomfluktuationen deuten nicht auf einen Verlust erlernter Coping-Strategien hin."
                    },
                    {
                        title: "Strukturiertes Expositions- & Erdungsprotokoll",
                        content: "Bei akutem physiologischem Hyperarousal: 1. Keine Vermeidungsreaktion einleiten (Kognitive Akzeptanz). 2. Somatosensorische Diskrimination aktivieren (5-4-3-2-1 Erdungsprotokoll). 3. Aktivierung des okulokardialen Reflexes oder Durchführung physiologischer Seufzer zur akuten Vagus-Inhibition.",
                        highlight: "Die physiologische Angstreaktion unterliegt einer biologischen Sättigungsgrenze und flacht durch Habituation ab."
                    }
                ]
            },
            {
                title: "Modul 5: Kognitive Restrukturierung & Distanzierung",
                slides: [
                    {
                        title: "Kognitive Verzerrungen & Automatische Gedanken",
                        content: "In stressbehafteten Situationen generiert das Gehirn hochautomatisierte kognitive Appraisals (z. B. 'Ich dekompensiere'). Diese unbewussten Bewertungen basieren auf gespeicherten Repräsentationen und werden fälschlicherweise als objektive Fakten verarbeitet.",
                        highlight: "Automatische Kognitionen sind hypothetische Konstrukte, keine verifizierten Realitäten."
                    },
                    {
                        title: "Strukturanalyse kognitiver Bias",
                        content: "Angstinduzierte kognitive Verzerrungen (z. B. Katastrophisierung, dichotomes Denken) filtrieren die Wahrnehmung asymmetrisch zugunsten von Bedrohungssignalen. Die Identifikation dieser kognitiven Filter schwächt ihre verhaltenssteuernde Wirkung ab.",
                        highlight: "Die Identifikation systematischer Denkfehler entzieht dysfunktionalen Schemata die logische Grundlage."
                    },
                    {
                        title: "Synthese balancierter kognitiver Alternativen",
                        content: "Ziel kognitiver Restrukturierung ist nicht Autosuggestion, sondern rationale Re-Evaluation. Durch empirische Überprüfung wird das dysfunktionale Appraisal durch eine kognitiv balancierte, nuancierte Formulierung ersetzt, die neuronale Aktivierungsmuster modifiziert.",
                        highlight: "Substituiere angstassoziierte Appraisals durch realitätskonforme kognitive Modelle."
                    }
                ]
            },
            {
                title: "Modul 6: Interpersonelle Co-Regulation & Systemisches Coping",
                slides: [
                    {
                        title: "Dyadische Co-Regulation & Non-Invasive Validierung",
                        content: "Bei akuter Fremdangst wirkt die eigene vegetative Stabilität als physiologische Co-Regulation. Ratschläge oder Frustration aktivieren Abwehrreaktionen und erhöhen das Arousal des Betroffenen. Indiziert ist die non-invasive Validierung des Affekts und ruhige, präsente Begleitung.",
                        highlight: "Deine autonome vegetative Stabilität moduliert direkt das Erregungsniveau deines Interaktionspartners."
                    },
                    {
                        title: "Anleitung sensomotorischer Re-Fokussierung",
                        content: "Unterstütze die neuronale De-Eskalation des Partners durch gezielte Lenkung der Aufmerksamkeit: 1. Cardiopulmonale Synchronisation durch gemeinsamen physiologischen Doppelseufzer. 2. Sensomotorische Re-Fokussierung mittels sensorischem Diskriminationstraining.",
                        highlight: "Verschiebe den neuronalen Fokus weg von internen Bedrohungssignalen hin zu exterozeptiven Reizen."
                    },
                    {
                        title: "Systemische Abgrenzung & Funktionale Allokation",
                        content: "Interpersonelle Unterstützung beansprucht begrenzte kognitive Ressourcen. Setze klare Grenzen zur Vermeidung emotionaler Überlastung (Sekundärtraumatisierung). Fördere die Transition zu professioneller Hilfe und sorge anschließend für eigene psychische Regeneration.",
                        highlight: "Effektive Co-Regulation erfordert eine hinreichende Eigenstabilität und funktionale Grenzen."
                    }
                ]
            }
        ];

        const modulesAR = [
            {
                title: "الدرس 1: علم الأعصاب للقلق العام",
                slides: [
                    {
                        title: "فرط نشاط اللوزة الدماغية والاستثارة المستمرة",
                        content: "يتجلى اضطراب القلق العام (GAD) بيولوجيًا كخلل وظيفي مستمر ومنخفض المستوى في تنظيم الجهاز العصبي الذاتي. تظل اللوزة الدماغية في حالة فرط نشاط مزمن، مما يحفز ردود فعل دفاعية مستمرة ضد الإجهاد والتوتر، دون التأثر بغياب مهددات بيئية حقيقية.",
                        highlight: "استجابة القلق ليست عيبًا بنيويًا، بل هي رد فعل دفاعي محفوظ تطوريًا وحساس للاختلال التنظيمي."
                    },
                    {
                        title: "أوهام التحكم المعرفي والقلق الميتا-معرفي",
                        content: "غالبًا ما يعمل القلق المزمن كآلية مواجهة غير فعالة. يؤسس نظام الإدراك الفوقي (الميتا-معرفة) الاعتقاد بأن توقع الكوارث يوفر حماية معينة. هذا الوهم بالسيطرة المعرفية يطيل الاستثارة ويؤدي إلى استنفاد شبكات التحكم الفص الجبهي.",
                        highlight: "التفكير المفرط لا يقلل من عشوائية الأحداث المستقبلية؛ بل يستنزف فقط الموارد التنفيذية في قشرة الفص الجبهي."
                    },
                    {
                        title: "المرونة العصبية والتنظيم الجبهي",
                        content: "تتحقق التهدئة العرضية عن طريق تثبيط التفكير المستمر والتحفيز الموجه لمناطق قشرة الفص الجبهي المنظمة من الأعلى إلى الأسفل. تقنيات مثل تأجيل القلق (MCT) وتحفيز العصب الحائر تقلل من الاستجابة العصبية وتعزز إعادة الهيكلة التشابكية (تعلم التلاشي).",
                        highlight: "من خلال تقليل سلاسل الأفكار المستمرة، يتم تقليل حساسية نظام التهديد في الدماغ بشكل منهجي."
                    }
                ]
            },
            {
                title: "الدرس 2: التفكير المفرط والبيانات الميتا-معرفية",
                slides: [
                    {
                        title: "آليات تعزيز التفكير المعرفي المستمر",
                        content: "تنشط التساؤلات الافتراضية ('ماذا لو') الاستجابات العصبية الذاتية للقلق. المحاولة الفورية لحلها فكرياً تعمل كتعزيز سلبي (شعور بالراحة المؤقتة) وتؤكد لذاكرة العمل أولوية المحفز، مما يؤدي إلى مزمنة هذه الحلقات التفكيرية المفرطة.",
                        highlight: "التركيز الانتقائي على الأعراض الجسدية الذاتية يرسخ التقييم غير الفعال للتهديد."
                    },
                    {
                        title: "الخلل الميتا-معرفي (قلق النوع الثاني)",
                        content: "يشير قلق النوع الثاني (الميتا-قلق) إلى التقييمات المعرفية حول العمليات الفكرية الذاتية ('قلقي غير قابل للسيطرة وضار'). تعوق هذه التقييمات المعرفية الخاطئة التلاشي الطبيعي لاستجابة الخوف. ويتحقق تفكيكها من خلال الانفصال الميتا-معرفي واليقظة المنفصلة (Detached Mindfulness).",
                        highlight: "الأفكار هي تمثيلات معرفية مؤقتة ولا تمتلك واقعاً جوهرياً أو طلباً فورياً للتنفيذ."
                    }
                ]
            },
            {
                title: "الدرس 3: الجهاز العصبي والتنظيم البولي-فيغالي",
                slides: [
                    {
                        title: "التوازن السمبتاوي والباراسمبتاوي والعصب الحائر",
                        content: "ينظم العصب الحائر (العصب القحفي العاشر) الجهاز الباراسمبتاوي ويعمل كعامل كبح أولي للقلب. في حالات القلق المزمن، يطغى التنشيط السمبتاوي (القتال أو الهروب). ويؤدي التنشيط الموجه للعصب الحائر جسدياً وتنفسياً إلى إعادة تفعيل كابح ضربات القلب فسيولوجياً.",
                        highlight: "يؤدي الاستقرار الفسيولوجي (من الأسفل إلى الأعلى) إلى إحداث تهدئة عصبية في مراكز القلق القشرية."
                    },
                    {
                        title: "الاتساق القلبي التنفسي وتحسين تقلب معدل ضربات القلب",
                        content: "دورات التنفس في نطاق تردد يبلغ حوالي 0.1 هرتز (6 أنفاس في الدقيقة) تزيد من اضطراب النظم الجيبي التنفسي. هذا الرنين القلبي الرئوي يحسن المنعكس الضغطي ويزيد من تقلب معدل ضربات القلب (HRV)، وهو ما يرتبط مباشرة بتنظيم انفعالي أفضل.",
                        highlight: "يحسن التحفيز الترددي التنفسي الموجه بشكل مثبت مؤشر التنظيم الذاتي للجهاز العصبي."
                    }
                ]
            },
            {
                title: "الدرس 4: التكيف والدمج التجريبي",
                slides: [
                    {
                        title: "التعافي غير الخطي والتقلبات العصبية",
                        content: "يسير تراجع أعراض القلق في مراحل ويخضع للتقلبات البيولوجية العصبية. ذروات الاستثارة المؤقتة ليست مؤشرات على فشل العلاج، بل هي تقلبات فسيولوجية طبيعية أثناء عملية إعادة البناء العصبي. وهي توفر فرصاً قيمة لدمج أنماط مواجهة جديدة.",
                        highlight: "التقلبات الجسدية الحادة لا تشير إلى فقدان استراتيجيات المواجهة المكتسبة."
                    },
                    {
                        title: "بروتوكول التعرض والتأريض المنظم",
                        content: "في حالات الاستثارة الفسيولوجية الحادة المفرطة: 1. تجنب استجابة التجنب المعرفي (القبول المعرفي). 2. تفعيل التمييز الحسي الجسدي (بروتوكول التأريض 5-4-3-2-1). 3. تنشيط المنعكس العيني القلبي أو إجراء التنهد الفسيولوجي المزدوج لتنشيط كبح العصب الحائر.",
                        highlight: "تخضع استجابة القلق الجسدية لحدود الإشباع البيولوجي وتتراجع تدريجياً عبر الاعتياد والتعود."
                    }
                ]
            },
            {
                title: "الدرس 5: إعادة الهيكلة والتفكيك المعرفي",
                slides: [
                    {
                        title: "التشوهات المعرفية والأفكار التلقائية",
                        content: "في المواقف الضاغطة، يولد الدماغ تقييمات معرفية آلية للغاية (مثل: 'أنا أنهار تماماً'). تستند هذه التقييمات اللاواعية إلى تمثيلات سابقة مخزنة، ويتم معالجتها خطأً كحقائق موضوعية قائمة في الواقع.",
                        highlight: "التقييمات التلقائية هي افتراضات معرفية وليست حقائق واقعية مثبتة."
                    },
                    {
                        title: "التحليل البنيوي للانحياز المعرفي",
                        content: "تقوم التشوهات المعرفية الناجمة عن القلق (مثل الاستقراء الكارثي، والادراك الثنائي) بفلترة الإدراك بشكل غير متماثل لصالح إشارات التهديد. إن تحديد هذه الفلاتر المعرفية يضعف من سيطرتها وتأثيرها على السلوك.",
                        highlight: "تحديد أخطاء التفكير المنهجية يسحب الأساس المنطقي من المخططات العميقة غير الفعالة."
                    },
                    {
                        title: "تركيب بدائل معرفية متوازنة",
                        content: "الهدف من إعادة الهيكلة المعرفية ليس الإيحاء الإيجابي القسري، بل التقييم العقلاني القائم على الأدلة. من خلال الفحص التجريبي، يتم استبدال التقييم القديم بصياغة متوازنة بديلة تعدل مسارات النشاط العصبي المرتبطة بالقلق.",
                        highlight: "استبدل التقييمات المرتبطة بالذعر بنماذج معرفية متوافقة مع الواقع الحقيقي."
                    }
                ]
            },
            {
                title: "الدرس 6: التنظيم المشترك وديناميكيات الدعم الجماعي",
                slides: [
                    {
                        title: "التنظيم المشترك الثنائي والقبول غير الباضع",
                        content: "في حالات قلق الآخرين الحاد، يعمل استقرارك الفسيولوجي الذاتي كتنظيم فسيولوجي مشترك. النصائح المتعجلة أو الإحباط يفعلان استجابات دفاعية ويزيدان من توتر الشخص. الإجراء الموصى به هو القبول والتحقق غير الباضع من المشاعر مع الحضور الهادئ والمستمر.",
                        highlight: "استقرارك الذاتي الفسيولوجي ينظم مباشرة مستوى الاستثارة الفسيولوجية لشريكك التفاعلي."
                    },
                    {
                        title: "توجيه إعادة التركيز الحسي الحركي",
                        content: "ادعم تراجع الاستثارة العصبية للشريك من خلال التوجيه الهادف لانتباهه: 1. المزامنة القلبية الرئوية عبر التنهد الفسيولوجي المزدوج المشترك. 2. إعادة التركيز الحسي الحركي عبر تمرين التمييز الحسي الخارجي.",
                        highlight: "انقل التركيز العصبي بعيداً عن إشارات التهديد الداخلية نحو المثيرات الحسية الخارجية المحيطة."
                    },
                    {
                        title: "الحدود والتوزيع الوظيفي للمسؤوليات",
                        content: "الدعم والمساندة المتبادلة تستهلك موارد معرفية محدودة. ضع حدوداً واضحة لتجنب الإرهاق العاطفي الثانوي. شجع الانتقال إلى مساعدة مهنية متخصصة عند الحاجة، واحرص على تجديد طاقتك النفسية بعد تقديم الدعم.",
                        highlight: "التنظيم المشترك الفعال يتطلب استقراراً ذاتياً كافياً وحدوداً وظيفية واضحة."
                    }
                ]
            }
        ];

        this.activePsyModule = lang === 'ar' ? modulesAR[moduleIndex] : modulesDE[moduleIndex];
        this.activePsySlide = 0;
        this.renderPsychoReaderSlide();
        this.toggleModal('psycho-reader-modal', true);
    }

    closePsychoReader() {
        this.toggleModal('psycho-reader-modal', false);
        this.activePsyModule = null;
    }

    renderPsychoReaderSlide() {
        const slide = this.activePsyModule.slides[this.activePsySlide];
        const container = document.getElementById('psycho-reader-slide-container');
        
        const dots = document.getElementById('psycho-reader-dots');
        dots.innerHTML = this.activePsyModule.slides.map((_, i) => `
            <div class="psycho-progress-dot ${i === this.activePsySlide ? 'active' : ''}"></div>
        `).join('');

        container.innerHTML = `
            <div class="psycho-card-slide active">
                <h2 style="font-family: var(--font-heading);">${slide.title}</h2>
                <p style="color: var(--text-primary); font-size:1.05rem;">${slide.content}</p>
                <div class="psycho-card-highlight">
                    "${slide.highlight}"
                </div>
            </div>
        `;

        document.getElementById('psy-prev-btn').disabled = this.activePsySlide === 0;
        const isLast = this.activePsySlide === this.activePsyModule.slides.length - 1;
        
        // Translate button next/finish
        const lang = this.state.settings.language;
        if (isLast) {
            document.getElementById('psy-next-btn').innerText = lang === 'ar' ? "إنهاء وقراءة" : "Abschließen";
        } else {
            document.getElementById('psy-next-btn').innerText = lang === 'ar' ? "التالي" : "Weiter";
        }
    }

    movePsySlide(direction) {
        if (!this.activePsyModule) return;
        const newSlide = this.activePsySlide + direction;
        
        if (newSlide >= this.activePsyModule.slides.length) {
            this.closePsychoReader();
        } else if (newSlide >= 0) {
            this.activePsySlide = newSlide;
            this.renderPsychoReaderSlide();
        }
    }

    // === 7. GENESUNGS-TRACKER & GAD-7 DIAGNOSTICS ===
    openGadAssessment() {
        document.querySelectorAll('.gad-answer-btn').forEach(btn => btn.classList.remove('selected'));
        this.toggleModal('gad-modal', true);
    }

    selectGadAnswer(questionIndex, score) {
        const buttons = document.querySelectorAll(`[data-question="${questionIndex}"]`);
        buttons.forEach(btn => {
            if (parseInt(btn.getAttribute('data-score')) === score) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        });
    }

    submitGadAssessment() {
        const answers = [];
        let completed = true;

        for (let i = 1; i <= 7; i++) {
            const selected = document.querySelector(`.gad-answer-btn.selected[data-question="${i}"]`);
            if (selected) {
                answers.push(parseInt(selected.getAttribute('data-score')));
            } else {
                completed = false;
                break;
            }
        }

        if (!completed) {
            const warnMsg = this.state.settings.language === 'ar'
                ? "يرجى الإجابة على جميع الأسئلة السبعة للحصول على نتيجة تقييم صحيحة سريرياً."
                : "Bitte beantworte alle 7 Fragen, um eine klinisch valide Auswertung zu erhalten.";
            alert(warnMsg);
            return;
        }

        const totalScore = answers.reduce((a, b) => a + b, 0);
        let severity = 'minimal';
        
        if (totalScore >= 15) severity = 'severe';
        else if (totalScore >= 10) severity = 'moderate';
        else if (totalScore >= 5) severity = 'mild';

        const result = {
            date: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE'),
            score: totalScore,
            severity: severity
        };

        this.state.gadScores.push(result);
        this.saveState();
        this.toggleModal('gad-modal', false);

        this.renderHistory();
        this.renderDashboard();
    }

    getGadSeverityLabel(sev) {
        const lang = this.state.settings.language;
        if (sev === 'minimal') return lang === 'ar' ? 'حد أدنى' : 'Minimal';
        if (sev === 'mild') return lang === 'ar' ? 'خفيف' : 'Leicht';
        if (sev === 'moderate') return lang === 'ar' ? 'متوسط' : 'Mittelschwer';
        if (sev === 'severe') return lang === 'ar' ? 'شديد' : 'Schwer';
        return sev;
    }

    renderHistory() {
        const list = document.getElementById('gad-history-list');
        const scores = this.state.gadScores;
        const lang = this.state.settings.language;

        if (scores.length === 0) {
            list.innerHTML = `
                <div style="color: var(--text-muted); padding: 1.5rem; text-align:center;">
                    ${this._t('tracker_empty')}
                </div>
            `;
            return;
        }

        // List view
        list.innerHTML = scores.map(s => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 0; border-bottom:1px solid var(--border-color);">
                <div>
                    <div style="font-weight:600; font-size:1.05rem;">${lang === 'ar' ? 'النتيجة' : 'Score'}: ${s.score} / 21</div>
                    <div style="font-size:0.8rem; color:var(--text-muted);">${s.date}</div>
                </div>
                <span class="severity-badge sev-${s.severity}">${this.getGadSeverityLabel(s.severity)}</span>
            </div>
        `).join('');

        // Chart rendering
        const chart = document.getElementById('gad-chart-bars');
        if (chart) {
            chart.innerHTML = scores.slice(-7).map(s => {
                const pct = (s.score / 21) * 100;
                return `
                    <div class="gad-chart-bar-wrapper">
                        <div class="gad-chart-bar" style="height: ${Math.max(10, pct)}%;" title="Score: ${s.score} am ${s.date}">
                            <div class="gad-chart-value-label">${s.score}</div>
                        </div>
                        <div class="gad-chart-date-label">
                            ${(() => {
                                if (s.date.includes('/')) {
                                    const parts = s.date.split('/');
                                    return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : s.date;
                                } else if (s.date.includes('.')) {
                                    const parts = s.date.split('.');
                                    return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : s.date;
                                }
                                return s.date;
                            })()}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Render trend analysis
        const trendEl = document.getElementById('gad-trend-analysis');
        if (trendEl && scores.length >= 2) {
            const last = scores[scores.length - 1].score;
            const prev = scores[scores.length - 2].score;
            const diff = last - prev;
            
            let message = "";
            if (diff < 0) {
                const pct = Math.round((Math.abs(diff) / (prev || 1)) * 100);
                message = lang === 'ar' 
                    ? `📉 رائع! مستوى قلقك انخفض بمقدار ${Math.abs(diff)} نقاط (${pct}%) مقارنة بالتقييم السابق. تعافيك يسير بشكل ممتاز!`
                    : `📉 Großartig! Dein GAD-7 Angstwert ist im Vergleich zur Vorwoche um ${Math.abs(diff)} Punkte (${pct}%) gesunken. Deine Bemühungen zahlen sich aus!`;
                trendEl.style.color = "var(--success)";
            } else if (diff > 0) {
                message = lang === 'ar'
                    ? `📈 تنبيه: ارتفع مستوى القلق لديك بمقدار ${diff} نقاط. هذا طبيعي في مسار التعافي الموجي؛ تذكر استخدام تمارين النفس والتهدئة بانتظام.`
                    : `📈 Achtung: Dein Angstwert ist um ${diff} Punkte gestiegen. Das ist kein Misserfolg – Heilung verläuft wellenförmig. Nutze heute verstärkt den Atem-Trainer.`;
                trendEl.style.color = "var(--accent-gold)";
            } else {
                message = lang === 'ar'
                    ? `➡️ مستويات القلق لديك مستقرة تماماً مقارنة بالأسبوع الماضي. واصل ممارسة تمارين التأريض وبناء روتين الأمان.`
                    : `➡️ Deine Angstwerte sind im Vergleich zur Vorwoche stabil. Fahre fort mit deinem täglichen Sorgen-Parkplatz und den Vagus-Übungen.`;
                trendEl.style.color = "var(--accent-blue)";
            }
            trendEl.innerText = message;
        } else if (trendEl) {
            trendEl.innerText = lang === 'ar' 
                ? "سيتوفر تحليل مسار التعافي بمجرد تسجيل نتيجتين لمقياس GAD-7." 
                : "Der Genesungstrend wird berechnet, sobald mindestens zwei Testergebnisse vorliegen.";
            trendEl.style.color = "var(--text-muted)";
        }
    }

    // === CLINICAL CLINICAL DATA EXPORT ===
    exportTherapistReport() {
        const report = {
            appName: "RuheOase GAD Recovery Companion",
            exportDate: new Date().toLocaleString(),
            gadScores: this.state.gadScores,
            moodHistory: this.state.moodHistory,
            behavioralExperiments: this.state.behavioralExperiments,
            resolvedWorries: this.state.parkedWorries.filter(w => w.released)
        };

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `RuheOase_Therapeuten_Report_${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }

    logMood(rating) {
        const timestamp = new Date().toISOString();
        this.state.moodHistory.push({
            id: 'mood-' + Date.now(),
            timestamp: timestamp,
            rating: rating
        });
        this.saveState();
    }

    startTapping() {
        const inputPhrase = document.getElementById('tapping-custom-phrase').value.trim();
        const lang = this.state.settings.language;
        
        if (inputPhrase) {
            this.tappingCustomPhrase = inputPhrase;
        } else {
            this.tappingCustomPhrase = lang === 'ar' 
                ? "هذا القلق والتوتر في جسدي" 
                : "diese Angst und Anspannung in meinem Körper";
        }
        
        this.tappingActive = true;
        this.tappingPointIndex = 0;
        this.tapCount = 7;
        
        document.getElementById('tapping-setup-ui').style.display = 'none';
        document.getElementById('tapping-active-ui').style.display = 'block';
        
        this.updateTappingUI();
        
        if (window.synth) {
            window.synth.playNotificationSound();
        }
    }

    resetTapping() {
        this.tappingActive = false;
        this.tappingPointIndex = 0;
        this.tapCount = 7;
        this.tappingCustomPhrase = "";
        
        document.getElementById('tapping-custom-phrase').value = '';
        document.getElementById('tapping-setup-ui').style.display = 'block';
        document.getElementById('tapping-active-ui').style.display = 'none';
    }

    handleTapInput() {
        if (!this.tappingActive) return;
        
        if (window.synth) {
            window.synth.playNotificationSound();
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(25);
        }
        
        this.tapCount--;
        
        if (this.tapCount <= 0) {
            this.tappingPointIndex++;
            if (this.tappingPointIndex >= this.tappingSequence.length) {
                const lang = this.state.settings.language;
                const finishMsg = lang === 'ar'
                    ? "أحسنت! انتهت جلسة الربت بنجاح. خذ نفساً عميقاً ولاحظ كيف تشعر الآن."
                    : "Wunderbar! Die Klopf-Sitzung ist beendet. Nimm einen tiefen Atemzug und spüre nach.";
                alert(finishMsg);
                this.resetTapping();
                return;
            } else {
                this.tapCount = 7;
                if (window.synth) {
                    setTimeout(() => window.synth.playNotificationSound(), 100);
                }
            }
        }
        
        this.updateTappingUI();
    }

    updateTappingUI() {
        const currentPoint = this.tappingSequence[this.tappingPointIndex];
        const lang = this.state.settings.language;
        
        const pointLabel = lang === 'ar' ? currentPoint.ar : currentPoint.de;
        document.getElementById('tapping-point-name').innerText = pointLabel;
        
        let displayText = "";
        if (currentPoint.id === "karate") {
            displayText = lang === 'ar'
                ? `«حتى لو كان لدي ${this.tappingCustomPhrase}، فإنني أتقبل نفسي تماماً وبشدة» (كرر 3 مرات)`
                : `„Auch wenn ich ${this.tappingCustomPhrase} habe, akzeptiere ich mich voll und ganz.“ (3x wiederholen)`;
        } else {
            displayText = lang === 'ar'
                ? `«${this.tappingCustomPhrase}»`
                : `„${this.tappingCustomPhrase}“`;
        }
        document.getElementById('tapping-phrase-text').innerText = displayText;
        
        document.getElementById('tapping-pad-counter').innerText = this.tapCount;
        
        const progressPercent = (this.tappingPointIndex / this.tappingSequence.length) * 100;
        document.getElementById('tapping-progress-fill').style.width = `${progressPercent}%`;
    }

    initCbtCoach() {
        this.coachStep = 0;
        this.coachTempData = { original: "", evidence: "", distortion: "", reframed: "" };
        
        const messagesContainer = document.getElementById('coach-chat-messages');
        if (messagesContainer) messagesContainer.innerHTML = '';
        
        const inputField = document.getElementById('coach-chat-input');
        if (inputField) {
            inputField.disabled = false;
            inputField.value = '';
        }
        
        const lang = this.state.settings.language;
        if (inputField) {
            inputField.placeholder = lang === 'ar' ? "اكتب هنا..." : "Schreibe dem Begleiter...";
        }
        
        const welcomeText = lang === 'ar'
            ? "مرحباً! أنا مرشد الأفكار الخاص بك. معاً سنقوم بتفكيك ومراجعة الأفكار السلبية لتخفيف القلق. ما هي الفكرة التي تضغط عليك وتشغل بالك حالياً؟ (مثال: 'لن أتمكن من إتمام عملي بنجاح')"
            : "Hallo! Ich bin dein Gedanken-Coach. Zusammen hinterfragen wir negative Gedanken, um den Stress zu reduzieren. Welcher Gedanke belastet dich gerade am meisten? Schreib ihn mir auf.";
            
        this.appendCoachMessage('bot', welcomeText);
        this.renderReframedThoughts();
    }

    appendCoachMessage(sender, text, htmlContent = null) {
        const messagesContainer = document.getElementById('coach-chat-messages');
        if (!messagesContainer) return;
        
        const bubble = document.createElement('div');
        bubble.className = `chat-msg ${sender}`;
        
        if (htmlContent) {
            bubble.innerHTML = htmlContent;
        } else {
            bubble.innerText = text;
        }
        
        messagesContainer.appendChild(bubble);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendCoachMessage() {
        const inputField = document.getElementById('coach-chat-input');
        if (!inputField) return;
        const text = inputField.value.trim();
        if (!text) return;
        
        inputField.value = '';
        this.appendCoachMessage('user', text);
        
        const lang = this.state.settings.language;
        
        if (this.coachStep === 0) {
            this.coachTempData.original = text;
            this.coachStep = 1;
            
            setTimeout(() => {
                const response = lang === 'ar'
                    ? "لقد قمت بتدوين ذلك. الآن لنفحص الأدلة. ما الذي يثبت صحة هذه الفكرة بموضوعية؟ والأهم من ذلك: ما هي الأدلة التي تدحضها وتثبت عدم صحتها؟"
                    : "Das habe ich notiert. Nun lass uns Beweise prüfen. Was spricht objektiv für diesen Gedanken? Und noch wichtiger: Welche Beweise sprechen dagegen?";
                this.appendCoachMessage('bot', response);
            }, 500);
            
        } else if (this.coachStep === 1) {
            this.coachTempData.evidence = text;
            this.coachStep = 2;
            
            inputField.disabled = true;
            
            setTimeout(() => {
                const promptText = lang === 'ar'
                    ? "تحليل جيد. أفكار القلق غالباً ما تستخدم أخطاء تفكير (تشوهات معرفية). أي من التشوهات التالية ينطبق أكثر على فكرتك؟ اختر واحداً:"
                    : "Gute Analyse. Ängstliche Gedanken nutzen oft Denkfehler (kognitive Verzerrungen). Welcher Denkfehler passt am ehesten zu deinem Gedanken? Wähle einen aus:";
                
                const buttonsHtml = `
                    <p>${promptText}</p>
                    <div class="coach-distortion-grid">
                        ${this.coachDistortions.map(d => `
                            <button class="coach-distortion-btn" onclick="app.selectCoachDistortion('${d.id}')">
                                <strong>${lang === 'ar' ? d.ar : d.de}</strong><br>
                                <span style="font-size:0.75rem; opacity:0.8;">${lang === 'ar' ? d.desc_ar : d.desc_de}</span>
                            </button>
                        `).join('')}
                    </div>
                `;
                this.appendCoachMessage('bot', '', buttonsHtml);
            }, 500);
            
        } else if (this.coachStep === 3) {
            this.coachTempData.reframed = text;
            this.coachStep = 4;
            
            inputField.disabled = true;
            
            setTimeout(() => {
                const promptText = lang === 'ar'
                    ? "رائع! هذه الفكرة الجديدة صحية وأكثر توازناً بكثير. هل تريد حفظها في أرشيفك الخاص كدرع واقٍ؟"
                    : "Ausgezeichnet! Dieser Gedanke ist viel gesünder. Möchtest du ihn in deinem Archiv als Schutzschild speichern?";
                
                const saveButtonHtml = `
                    <p>${promptText}</p>
                    <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:center;">
                        <button class="btn btn-primary" onclick="app.saveReframedThought()">${lang === 'ar' ? 'نعم، احفظها' : 'Ja, speichern 💾'}</button>
                        <button class="btn btn-secondary" onclick="app.initCbtCoach()">${lang === 'ar' ? 'جلسة جديدة' : 'Neustart 🔄'}</button>
                    </div>
                `;
                this.appendCoachMessage('bot', '', saveButtonHtml);
            }, 500);
        }
    }

    selectCoachDistortion(distortionId) {
        this.coachTempData.distortion = distortionId;
        this.coachStep = 3;
        
        const distortionObj = this.coachDistortions.find(d => d.id === distortionId);
        const lang = this.state.settings.language;
        const distortionName = lang === 'ar' ? distortionObj.ar : distortionObj.de;
        
        this.appendCoachMessage('user', distortionName);
        
        const inputField = document.getElementById('coach-chat-input');
        if (inputField) {
            inputField.disabled = false;
            inputField.focus();
        }
        
        setTimeout(() => {
            const promptText = lang === 'ar'
                ? `لقد حددنا تشوه «${distortionName}». الآن لنصيغ فكرة أكثر واقعية وتوازناً. بدلاً من الفكرة القديمة، ما هي العبارة الجديدة الأكثر هدوءاً وموضوعية؟`
                : `Wir haben „${distortionName}“ als Denkfehler erkannt. Lass uns nun eine realistischere Sichtweise (einen ausgewogenen Gedanken) formulieren. Wie lautet dein neuer, hilfreicher Satz?`;
            this.appendCoachMessage('bot', promptText);
        }, 500);
    }

    saveReframedThought() {
        const lang = this.state.settings.language;
        const dateStr = new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'de-DE');
        
        const reframedThought = {
            id: 'reframed-' + Date.now(),
            date: dateStr,
            original: this.coachTempData.original,
            reframed: this.coachTempData.reframed,
            distortion: this.coachTempData.distortion
        };
        
        this.state.reframedThoughts.push(reframedThought);
        this.saveState();
        
        this.renderReframedThoughts();
        
        setTimeout(() => {
            const successText = lang === 'ar'
                ? "تم حفظ الفكرة الجديدة بنجاح في أرشيفك. خذ نفساً عميقاً، وانظر إلى درعك الجديد."
                : "Erfolgreich gespeichert! Du kannst die umformulierten Gedanken jederzeit rechts in deiner Liste ansehen.";
            
            const actionHtml = `
                <p>${successText}</p>
                <div style="margin-top:1rem; display:flex; gap:0.5rem; justify-content:center;">
                    <button class="btn btn-accent btn-sm" onclick="app.sendThoughtToDefusion('${reframedThought.original.replace(/'/g, "\\'")}', '${reframedThought.reframed.replace(/'/g, "\\'")}')">${lang === 'ar' ? 'أطلقها في نهر الأفكار 🍃' : 'In den Gedanken-Strom schicken 🍃'}</button>
                    <button class="btn btn-primary btn-sm" onclick="app.initCbtCoach()">${lang === 'ar' ? 'جلسة جديدة' : 'Nächste Sitzung 🔄'}</button>
                </div>
            `;
            this.appendCoachMessage('bot', '', actionHtml);
        }, 500);
    }

    deleteReframedThought(id) {
        const lang = this.state.settings.language;
        const confirmMsg = lang === 'ar'
            ? "هل تريد حذف هذا التفكير المُعاد صياغته من الأرشيف؟"
            : "Möchtest du diesen Gedanken aus deinem Archiv löschen?";
            
        if (confirm(confirmMsg)) {
            this.state.reframedThoughts = this.state.reframedThoughts.filter(t => t.id !== id);
            this.saveState();
            this.renderReframedThoughts();
        }
    }

    renderReframedThoughts() {
        const listContainer = document.getElementById('coach-reframed-list');
        if (!listContainer) return;
        
        const lang = this.state.settings.language;
        
        if (this.state.reframedThoughts.length === 0) {
            listContainer.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
                    ${this._t('coach_history_empty')}
                </div>
            `;
            return;
        }
        
        listContainer.innerHTML = this.state.reframedThoughts.map(t => {
            const distortionObj = this.coachDistortions.find(d => d.id === t.distortion);
            const distortionName = distortionObj ? (lang === 'ar' ? distortionObj.ar : distortionObj.de) : "CBT";
            
            return `
                <div class="reframed-thought-card">
                    <div>
                        <span class="reframed-label original">${lang === 'ar' ? 'الفكرة التلقائية السابقة:' : 'Alter Gedanke:'}</span>
                        <p class="reframed-text" style="text-decoration: line-through; opacity: 0.5;">"${t.original}"</p>
                    </div>
                    <div>
                        <span class="reframed-label new">${lang === 'ar' ? 'الفكرة الجديدة المتوازنة:' : 'Neuer Gedanke:'}</span>
                        <p class="reframed-text" style="font-weight:600; color:var(--accent-teal);">"${t.reframed}"</p>
                    </div>
                    <div class="reframed-footer">
                        <span class="reframed-date">${t.date} • <strong style="color:var(--accent-lavender);">${distortionName}</strong></span>
                        <div style="display:flex; gap:0.5rem;">
                            <button class="btn btn-secondary btn-sm" style="padding:0.2rem 0.5rem; font-size:0.75rem;" onclick="app.sendThoughtToDefusion('${t.original.replace(/'/g, "\\'")}', '${t.reframed.replace(/'/g, "\\'")}')">🍃</button>
                            <button class="btn btn-danger btn-sm" style="padding:0.2rem 0.5rem; font-size:0.75rem;" onclick="app.deleteReframedThought('${t.id}')">${this._t('coach_delete_btn')}</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    sendThoughtToDefusion(original, reframed) {
        this.switchTab('defusion');
        const lang = this.state.settings.language;
        const msg = lang === 'ar'
            ? `بدلاً من: ${original} ➔ البديل: ${reframed}`
            : `Alt: ${original} ➔ Neu: ${reframed}`;
            
        this.spawnThought(msg);
    }

    initSoundSliders() {
        const volumeSliders = {
            rain: 'volume-rain',
            waves: 'volume-waves',
            wind: 'volume-wind',
            chimes: 'volume-chimes',
            brown: 'volume-brown'
        };

        Object.keys(volumeSliders).forEach(key => {
            const id = volumeSliders[key];
            const slider = document.getElementById(id);
            if (!slider) return;

            slider.value = this.state.settings.ambientVolumes[key] * 100;

            slider.addEventListener('input', (e) => {
                const vol = parseFloat(e.target.value) / 100;
                this.state.settings.ambientVolumes[key] = vol;
                this.saveState();

                window.synth.resumeContext();

                if (key === 'rain') {
                    if (vol > 0) { window.synth.startRain(); window.synth.setRainVolume(vol); }
                    else { window.synth.stopRain(); }
                } else if (key === 'waves') {
                    if (vol > 0) { window.synth.startWaves(); window.synth.setWavesVolume(vol); }
                    else { window.synth.stopWaves(); }
                } else if (key === 'wind') {
                    if (vol > 0) { window.synth.startWind(); window.synth.setWindVolume(vol); }
                    else { window.synth.stopWind(); }
                } else if (key === 'chimes') {
                    window.synth.setChimesVolume(vol);
                } else if (key === 'brown') {
                    if (vol > 0) { window.synth.startBrownian(); window.synth.setBrownianVolume(vol); }
                    else { window.synth.stopBrownian(); }
                }
            });
        });
    }

    // === TIEFENARBEIT (FORTGESCHRITTEN) CONTROLLER ===
    initTiefenarbeit(defaultSubtab = 'mct') {
        this.switchTiefenarbeitSubtab(defaultSubtab);
        this.renderCoreBeliefs();
        this.renderValuesCompass();
    }

    leaveTiefenarbeit() {
        this.stopAttExercise();
    }

    switchTiefenarbeitSubtab(subtabId) {
        document.querySelectorAll('.subtab-btn').forEach(btn => {
            if (btn.getAttribute('data-subtab') === subtabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.querySelectorAll('.subtab-content').forEach(content => {
            if (content.id === `${subtabId}-subtab-content`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        
        this.activeSubtab = subtabId;
    }

    // === METAKOGNITIVE THERAPIE (MCT) & TIMER ===
    toggleMctWorryTimer() {
        if (this.worryTimerInterval) {
            this.stopMctWorryTimer();
        } else {
            this.startMctWorryTimer();
        }
    }

    startMctWorryTimer() {
        if (this.worryTimerInterval) return;
        
        window.synth.resumeContext();
        
        let secondsRemaining = 15 * 60; // 15 minutes
        const timerText = document.getElementById('worry-timer-text');
        const timerRing = document.getElementById('worry-timer-ring');
        const btn = document.getElementById('worry-timer-btn');
        const statusText = document.getElementById('worry-timer-status');
        
        if (btn) btn.innerText = this._t('mct_timer_stop');
        if (statusText) statusText.innerText = this._t('mct_timer_running');
        
        const updateTimerUI = () => {
            const mins = Math.floor(secondsRemaining / 60);
            const secs = secondsRemaining % 60;
            if (timerText) timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            
            const percent = secondsRemaining / (15 * 60);
            const offset = 283 * (1 - percent);
            if (timerRing) timerRing.style.strokeDashoffset = offset;
        };
        
        updateTimerUI();
        
        this.worryTimerInterval = setInterval(() => {
            secondsRemaining--;
            updateTimerUI();
            
            if (secondsRemaining <= 0) {
                this.stopMctWorryTimer();
                window.synth.playNotificationSound();
                alert(this._t('mct_timer_finished'));
            }
        }, 1000);
    }

    stopMctWorryTimer() {
        if (this.worryTimerInterval) {
            clearInterval(this.worryTimerInterval);
            this.worryTimerInterval = null;
        }
        
        const btn = document.getElementById('worry-timer-btn');
        const statusText = document.getElementById('worry-timer-status');
        const timerText = document.getElementById('worry-timer-text');
        const timerRing = document.getElementById('worry-timer-ring');
        
        if (btn) btn.innerText = this._t('mct_timer_start');
        if (statusText) statusText.innerText = "";
        if (timerText) timerText.innerText = "15:00";
        if (timerRing) timerRing.style.strokeDashoffset = 0;
    }

    // === ATTENTION TRAINING TECHNIQUE (ATT) ===
    toggleAttExercise() {
        if (this.attInterval) {
            this.stopAttExercise();
        } else {
            this.startAttExercise();
        }
    }

    startAttExercise() {
        if (this.attInterval) return;

        window.synth.resumeContext();
        
        const btn = document.getElementById('att-start-btn');
        if (btn) btn.innerText = this._t('mct_att_stop');
        
        let elapsedSeconds = 0;
        const totalDuration = 180; // 3 minutes total
        
        const progressFill = document.getElementById('att-progress-fill');
        const instructionText = document.getElementById('att-instruction-text');
        
        window.synth.startSpatialRain(-1.0, 0.05);
        window.synth.startSpatialWind(1.0, 0.05);
        window.synth.startSpatialChimes(0.0, 0.05);
        
        const updateAttUI = (stage, activeSpeakerId, textKey) => {
            if (instructionText) instructionText.innerText = this._t(textKey);
            
            document.querySelectorAll('.att-speaker').forEach(spk => {
                if (spk.id === activeSpeakerId) {
                    spk.classList.add('active');
                } else {
                    spk.classList.remove('active');
                }
            });
        };
        
        let lastShiftTime = 0;
        let currentSpeaker = 'center';
        
        const tick = () => {
            elapsedSeconds++;
            
            const pct = (elapsedSeconds / totalDuration) * 100;
            if (progressFill) progressFill.style.width = `${pct}%`;
            
            if (elapsedSeconds <= 60) {
                updateAttUI(1, 'att-spk-left', 'mct_att_stage_1');
                window.synth.setSpatialRainVolume(0.5);
                window.synth.setSpatialWindVolume(0.03);
                window.synth.setSpatialChimesVolume(0.03);
            } else if (elapsedSeconds <= 120) {
                updateAttUI(2, 'att-spk-right', 'mct_att_stage_2');
                window.synth.setSpatialRainVolume(0.03);
                window.synth.setSpatialWindVolume(0.5);
                window.synth.setSpatialChimesVolume(0.03);
            } else if (elapsedSeconds <= 150) {
                updateAttUI(3, 'att-spk-center', 'mct_att_stage_3');
                window.synth.setSpatialRainVolume(0.03);
                window.synth.setSpatialWindVolume(0.03);
                window.synth.setSpatialChimesVolume(0.5);
            } else if (elapsedSeconds <= 165) {
                updateAttUI(4, '', 'mct_att_stage_4');
                window.synth.setSpatialRainVolume(0.35);
                window.synth.setSpatialWindVolume(0.35);
                window.synth.setSpatialChimesVolume(0.35);
            } else if (elapsedSeconds < totalDuration) {
                updateAttUI(5, 'att-spk-' + currentSpeaker, 'mct_att_stage_5');
                
                if (elapsedSeconds - lastShiftTime >= 3) {
                    const speakers = ['left', 'center', 'right'];
                    const nextIndex = (speakers.indexOf(currentSpeaker) + 1) % speakers.length;
                    currentSpeaker = speakers[nextIndex];
                    lastShiftTime = elapsedSeconds;
                    
                    if (currentSpeaker === 'left') {
                        window.synth.setSpatialRainVolume(0.5);
                        window.synth.setSpatialWindVolume(0.05);
                        window.synth.setSpatialChimesVolume(0.05);
                    } else if (currentSpeaker === 'right') {
                        window.synth.setSpatialRainVolume(0.05);
                        window.synth.setSpatialWindVolume(0.5);
                        window.synth.setSpatialChimesVolume(0.05);
                    } else {
                        window.synth.setSpatialRainVolume(0.05);
                        window.synth.setSpatialWindVolume(0.05);
                        window.synth.setSpatialChimesVolume(0.5);
                    }
                }
            } else {
                this.stopAttExercise();
                window.synth.playNotificationSound();
                if (instructionText) instructionText.innerText = this._t('mct_att_finished');
            }
        };
        
        tick();
        this.attInterval = setInterval(tick, 1000);
    }

    stopAttExercise() {
        if (this.attInterval) {
            clearInterval(this.attInterval);
            this.attInterval = null;
        }
        
        window.synth.stopSpatialRain();
        window.synth.stopSpatialWind();
        window.synth.stopSpatialChimes();
        
        const btn = document.getElementById('att-start-btn');
        if (btn) btn.innerText = this._t('mct_att_start');
        
        const progressFill = document.getElementById('att-progress-fill');
        if (progressFill) progressFill.style.width = '0%';
        
        document.querySelectorAll('.att-speaker').forEach(spk => {
            spk.classList.remove('active');
        });
        
        const instructionText = document.getElementById('att-instruction-text');
        if (instructionText) instructionText.innerText = this._t('mct_att_start');
    }

    // === SCHEMATHERAPIE / GLAUBENSSATZ-TAGEBUCH ===
    addCoreBelief(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('schema-input-name');
        const strengthInput = document.getElementById('schema-input-strength');
        const proInput = document.getElementById('schema-input-pro');
        const conInput = document.getElementById('schema-input-con');
        const healthyInput = document.getElementById('schema-input-healthy');
        
        if (!nameInput || !proInput || !conInput || !healthyInput) return;
        
        const belief = {
            id: 'schema_' + Date.now(),
            date: new Date().toLocaleDateString(this.state.settings.language === 'ar' ? 'ar-EG' : 'de-DE'),
            name: nameInput.value.trim(),
            strength: parseInt(strengthInput.value),
            pro: proInput.value.trim(),
            con: conInput.value.trim(),
            healthy: healthyInput.value.trim()
        };
        
        this.state.coreBeliefs.unshift(belief);
        this.saveState();
        
        nameInput.value = "";
        strengthInput.value = 80;
        const valIndicator = document.getElementById('schema-strength-val');
        if (valIndicator) valIndicator.innerText = "80%";
        proInput.value = "";
        conInput.value = "";
        healthyInput.value = "";
        
        this.renderCoreBeliefs();
    }

    deleteCoreBelief(id) {
        this.state.coreBeliefs = this.state.coreBeliefs.filter(b => b.id !== id);
        this.saveState();
        this.renderCoreBeliefs();
    }

    renderCoreBeliefs() {
        const container = document.getElementById('schema-beliefs-list');
        if (!container) return;
        
        const beliefs = this.state.coreBeliefs || [];
        if (beliefs.length === 0) {
            container.innerHTML = `<p style="font-size:0.9rem; color:var(--text-muted); text-align:center; padding: 2rem 0;">${this._t('schema_empty')}</p>`;
            return;
        }
        
        container.innerHTML = beliefs.map(b => `
            <div class="schema-belief-card">
                <div class="schema-card-header">
                    <h3 class="schema-card-title">${this.escapeHtml(b.name)}</h3>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <span class="schema-card-strength-badge">${b.strength}%</span>
                        <button class="btn-icon-danger" title="Löschen" onclick="app.deleteCoreBelief('${b.id}')" style="background:none; border:none; color:var(--accent-red); cursor:pointer; font-size:1.1rem;">🗑️</button>
                    </div>
                </div>
                <div class="schema-card-section">
                    <span class="schema-card-section-label">${this._t('schema_lbl_evidence_pro')}</span>
                    <div class="schema-card-section-content">${this.escapeHtml(b.pro)}</div>
                </div>
                <div class="schema-card-section">
                    <span class="schema-card-section-label">${this._t('schema_lbl_evidence_con')}</span>
                    <div class="schema-card-section-content">${this.escapeHtml(b.con)}</div>
                </div>
                <div class="schema-card-section">
                    <span class="schema-card-section-label" style="color:var(--accent-teal);">${this._t('schema_lbl_healthy')}</span>
                    <div class="schema-card-section-content" style="border-color: rgba(45, 212, 191, 0.15); background: rgba(45, 212, 191, 0.02);">${this.escapeHtml(b.healthy)}</div>
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted); text-align:right;">${b.date}</div>
            </div>
        `).join('');
    }

    // === ACT WERTE-KOMPASS ===
    saveValueCommit(area, value) {
        this.state.valuesCompass[area] = value.trim();
        this.saveState();
        this.renderDashboardValues();
    }

    saveValueAction(area, action) {
        this.state.valuesCompass.actions = this.state.valuesCompass.actions || {};
        this.state.valuesCompass.actions[area] = action.trim();
        this.saveState();
        this.renderDashboardValues();
    }

    renderValuesCompass() {
        const areas = ['relationships', 'health', 'growth', 'mindfulness'];
        areas.forEach(area => {
            const inputVal = document.getElementById(`value-input-${area}`);
            const inputAction = document.getElementById(`value-action-${area}`);
            
            if (inputVal) inputVal.value = this.state.valuesCompass[area] || "";
            if (inputAction) inputAction.value = (this.state.valuesCompass.actions && this.state.valuesCompass.actions[area]) || "";
        });
        
        this.renderDashboardValues();
    }

    renderDashboardValues() {
        const container = document.getElementById('dashboard-values-list');
        if (!container) return;
        
        const actions = this.state.valuesCompass.actions || {};
        const activeActions = Object.entries(actions).filter(([area, action]) => action.trim() !== "");
        
        if (activeActions.length === 0) {
            container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); margin:0;">${this.state.settings.language === 'ar' ? 'لا توجد خطوات قيم محددة لليوم.' : 'Keine heutigen Werte-Schritte festgelegt. Setze einen im Werte-Kompass!'}</p>`;
            return;
        }
        
        const areaLabels = {
            relationships: this._t('values_cat_relations'),
            health: this._t('values_cat_health'),
            growth: this._t('values_cat_growth'),
            mindfulness: this._t('values_cat_mindfulness')
        };
        
        container.innerHTML = activeActions.map(([area, action]) => `
            <div style="display:flex; align-items:center; gap:0.5rem; font-size:0.9rem; background:rgba(255,255,255,0.02); padding:0.5rem 0.75rem; border-radius:10px; border:1px solid rgba(255,255,255,0.03)">
                <span style="font-size:1.1rem;">🎯</span>
                <div>
                    <strong style="color:var(--accent-gold); font-size:0.75rem; text-transform:uppercase; display:block;">${areaLabels[area] || area}</strong>
                    <span>${this.escapeHtml(action)}</span>
                </div>
            </div>
        `).join('');
    }

    escapeHtml(str) {
        if (!str) return '';
        return str.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

const app = new RuheOaseApp();
window.app = app;

document.addEventListener('DOMContentLoaded', () => {
    app.init();
    
    // Register PWA Service Worker for offline capability
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered successfully!', reg.scope))
            .catch(err => console.error('Service Worker registration failed:', err));
    }
    
    // iOS Safari AudioContext unlocker trigger
    const unlockAudio = () => {
        if (window.synth) {
            window.synth.resumeContext();
        }
        document.body.removeEventListener('click', unlockAudio);
        document.body.removeEventListener('touchstart', unlockAudio);
    };
    document.body.addEventListener('click', unlockAudio);
    document.body.addEventListener('touchstart', unlockAudio);
});
