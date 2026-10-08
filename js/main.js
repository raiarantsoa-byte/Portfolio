/**
 * Portfolio Interactive Script
 * Handles: Dark/Light Mode, Language Switcher (FR/EN), Dynamic Portfolio Rendering by Folder,
 * Image Lightbox Modal, and Video Player Modal.
 */

// --- TRANSLATIONS DICTIONARY ---
const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_profile: "Profil",
    nav_experiences: "Expériences",
    nav_projects: "Mes réalisations",
    nav_contacts: "Contacts",

    // Hero / Banner
    banner_role: "Spécialiste en communication et Web Manager",
    banner_cv: "Voir mon CV",

    // About
    about_title: "Qui suis-je ?",
    about_role: "Responsable Médias Sociaux and Assistant de Communication",
    about_p1: "J'évolue aujourd'hui avec une <span class=\"highlight\">double casquette</span> qui fait ma force.",
    about_p2: "D'un côté, je suis <span class=\"highlight\">Responsable Médias Sociaux du Groupe Megaprint</span>, où je pilote la stratégie digitale de 4 marques : <strong>Megaprint, Megapower, Slimmo et La Résidence Fenofitia</strong>. Création de contenu, animation de communautés, campagnes : je gère leur visibilité au quotidien.",
    about_p3: "De l'autre, je suis <span class=\"highlight\">Assistant de Communication à la Concertation des Sociétés Civiles Malagasy</span>, où je mets mes compétences au service de l'engagement citoyen et des initiatives à impact.",
    about_p4: "Ce parcours, de la Croix-Rouge Malagasy au secteur privé, m'a appris une chose : qu'on parle d'une marque ou d'une cause, on a besoin de la même chose - une histoire vraie, bien racontée, qui fédère.",
    about_sig: "Créatif, rigoureux et engagé.",

    // Experiences
    exp_title: "Mes Expériences",
    exp_megaprint_role: "Responsable Médias Sociaux Megaprint",
    exp_megaprint_1: "Stratégie de contenu pour l'impression and signalétique",
    exp_megaprint_2: "Création de visuels produits et réalisations clients",
    exp_megaprint_3: "Animation Facebook / LinkedIn et génération de leads B2B",

    exp_megapower_role: "Responsable Médias Sociaux Megapower",
    exp_megapower_1: "Promotion des solutions d'énergie solaire",
    exp_megapower_2: "Vulgarisation technique en contenus pédagogiques",
    exp_megapower_3: "Campagnes de sensibilisation à l'autonomie énergétique",

    exp_slimmo_role: "Responsable Médias Sociaux SLIMMO",
    exp_slimmo_1: "Développement de l'identité de marque lifestyle",
    exp_slimmo_2: "Contenus créatifs, Reels et tendances TikTok / FB",
    exp_slimmo_3: "Animation de communauté jeune et engagement",

    exp_fenofitia_role: "Responsable Médias Sociaux La Résidence Fenofitia",
    exp_fenofitia_1: "Valorisation immobilière et cadre de vie",
    exp_fenofitia_2: "Contenus haut de gamme : photos, visites, témoignages",
    exp_fenofitia_3: "Gestion de la e-réputation et demandes d'infos",

    exp_croixrouge_role: "Création de contenus de sensibilisation sur Facebook, valorisation des volontaires, animation de campagnes humanitaires.",
    exp_croixrouge_1: "Posts Facebook avec visuels et storytelling",
    exp_croixrouge_2: "Campagnes de sensibilisation aux premiers secours",
    exp_croixrouge_3: "Coordination des actions digitales et terrain",

    exp_aika_role: "Animateur et chef de projet digital.",
    exp_aika_1: "Organisation d’activités pour les jeunes",
    exp_aika_2: "Création de visuels et vidéos de mobilisation",
    exp_aika_3: "Animation d’événements communautaires",

    exp_cscm_role: "Assistant de Communication",
    exp_cscm_1: "Valorisation des initiatives citoyennes et plaidoyers",
    exp_cscm_2: "Création de contenus institutionnels et digitaux",
    exp_cscm_3: "Appui à la communication pour l'engagement citoyen",

    exp_cfk_role: "Coordinateur d’activités éducatives et mobilisations terrain.",
    exp_cfk_1: "Campagnes Facebook pour sensibiliser les familles",
    exp_cfk_2: "Organisation d’événements éducatifs",
    exp_cfk_3: "Communication avec partenaires et parents",

    exp_konecta_role: "Responsable mobilisation clients et communication multicanale.",
    exp_konecta_1: "Création de contenus pour réseaux sociaux",
    exp_konecta_2: "Analyse des retours et feedback clients",
    exp_konecta_3: "Coordination interne des campagnes",

    exp_isic_role: "Responsable logistique événementiel et promotion.",
    exp_isic_1: "Organisation et coordination des événements académiques",
    exp_isic_2: "Gestion de la logistique et des équipes",
    exp_isic_3: "Promotion des activités via réseaux sociaux et supports visuels",

    // Projects Section
    projects_title: "Mes réalisations",
    projects_p1: "Chaque projet est une histoire, chaque image un témoignage, chaque vidéo une voix. À travers mes créations, je cherche à <span class=\"highlight\">inspirer, mobiliser et valoriser</span> les initiatives sociales, humanitaires et de marque.",
    projects_p2: "Découvrez mes créations organisées par catégories : graphismes, affiches, campagnes de marque et productions vidéo.",

    // Filters
    filter_all: "Tous les projets",
    filter_visuals: "Contenus Visuels",
    filter_videos: "Vidéos",

    // Category Section Headings
    section_visuals_heading: "📷 Contenus Visuels and Graphiques",
    section_videos_heading: "🎬 Réalisations Vidéo",

    // Folder Sub-Category Titles & Descriptions
    folder_megaprint_title: "Megaprint - Impression and Signalétique",
    folder_megaprint_desc: "Réalisations graphiques, visuels d'impression grand format et supports de communication d'entreprise.",

    folder_megapower_title: "Megapower - Énergie Solaire",
    folder_megapower_desc: "Supports de sensibilisation et visuels pédagogiques sur l'autonomie énergétique solaire.",

    folder_slimmo_title: "SLIMMO - Content and Lifestyle",
    folder_slimmo_desc: "Visuels créatifs, visuels réseaux sociaux et campagnes d'engagement de marque.",

    folder_fenofitia_title: "La Résidence Fenofitia - Immobilier",
    folder_fenofitia_desc: "Présentation vidéo et contenus visuels valorisant le cadre de vie et la résidence.",

    folder_croixrouge_title: "Croix-Rouge Malagasy - Action Humanitaire",
    folder_croixrouge_desc: "Affiches de sensibilisation, appels d'offres, appels à volontaires et reportages terrain.",

    folder_cscm_title: "CSCM - Plaidoyer and Engagement Citoyen",
    folder_cscm_desc: "Vidéos et contenus institutionnels pour la Concertation des Sociétés Civiles Malagasy.",

    folder_associations_title: "Projets Associatifs and Communautaires",
    folder_associations_desc: "Campagnes de jeunesse, mobilisations citoyennes et événements éducatifs (Alliance Aika, Challenge for Kids, Konecta, ISIC).",

    folder_general_visuals_title: "Affiches and Publications Générales",
    folder_general_visuals_desc: "Conceptions graphiques et créations visuelles multicanales.",

    folder_general_videos_title: "Vidéos Générales and Reportages",
    folder_general_videos_desc: "Capsules vidéo, portraits et documentaires terrain.",

    // UI Buttons & Modals
    view_detail: "Agrandir le visuel",
    watch_video: "Plein écran",
    play_video: "Lecture",
    modal_close: "Fermer",
    modal_prev: "Précédent",
    modal_next: "Suivant",

    // Contacts
    contact_title: "Contacts",
    contact_intro: "N'hésitez pas à me contacter pour toute collaboration, projet ou opportunité professionnelle.",
    contact_linkedin_p: "Voir mon profil professionnel",
    contact_facebook_p: "Suivre mon actualité",
    contact_insta_p: "Découvrir mes publications",
    contact_phone_title: "Téléphone",
    contact_email_title: "Email",
    contact_phone_p: "+261 37 78 055 87",
    contact_email_p: "raiarantsoa@gmail.com",
    contact_whatsapp_p: "+261 38 40 211 52",

    // Theme Switcher
    theme_light_btn: "☀️ Jour",
    theme_dark_btn: "🌙 Nuit"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_profile: "Profile",
    nav_experiences: "Experience",
    nav_projects: "Portfolio",
    nav_contacts: "Contact",

    // Hero / Banner
    banner_role: "Communication Specialist and Web Manager",
    banner_cv: "View Resume",

    // About
    about_title: "About Me",
    about_role: "Social Media Manager and Communication Assistant",
    about_p1: "I evolve today with a <span class=\"highlight\">dual role</span> that is my strength.",
    about_p2: "On one side, I am <span class=\"highlight\">Social Media Manager for Megaprint Group</span>, leading the digital strategy for 4 brands: <strong>Megaprint, Megapower, Slimmo, and La Résidence Fenofitia</strong>. Content creation, community management, campaigns: I manage their visibility daily.",
    about_p3: "On the other side, I am <span class=\"highlight\">Communication Assistant at the Malagasy Civil Society Concertation</span>, using my skills for civic engagement and high-impact initiatives.",
    about_p4: "This journey, from the Malagasy Red Cross to the private sector, taught me one core principle: whether speaking for a brand or a cause, we need a genuine, well-told story that brings people together.",
    about_sig: "Creative, rigorous, and committed.",

    // Experiences
    exp_title: "My Experience",
    exp_megaprint_role: "Social Media Manager - Megaprint",
    exp_megaprint_1: "Content strategy for printing and signage",
    exp_megaprint_2: "Creation of product visuals and client showcases",
    exp_megaprint_3: "Facebook / LinkedIn management and B2B lead generation",

    exp_megapower_role: "Social Media Manager - Megapower",
    exp_megapower_1: "Promotion of solar energy solutions",
    exp_megapower_2: "Technical outreach through educational content",
    exp_megapower_3: "Awareness campaigns for energy independence",

    exp_slimmo_role: "Social Media Manager - SLIMMO",
    exp_slimmo_1: "Development of lifestyle brand identity",
    exp_slimmo_2: "Creative content, Reels and TikTok/FB trends",
    exp_slimmo_3: "Youth community engagement and growth",

    exp_fenofitia_role: "Social Media Manager - La Résidence Fenofitia",
    exp_fenofitia_1: "Real estate valuation and lifestyle showcase",
    exp_fenofitia_2: "Premium content: photos, virtual tours, testimonials",
    exp_fenofitia_3: "E-reputation management and inquiry handling",

    exp_croixrouge_role: "Awareness content creation on Facebook, volunteer spotlight, humanitarian campaign management.",
    exp_croixrouge_1: "Facebook posts with visual storytelling",
    exp_croixrouge_2: "First aid awareness campaigns",
    exp_croixrouge_3: "Coordination of digital and field operations",

    exp_aika_role: "Community manager and digital project lead.",
    exp_aika_1: "Organization of youth activities",
    exp_aika_2: "Creation of mobilization visuals and videos",
    exp_aika_3: "Community event management",

    exp_cscm_role: "Communication Assistant",
    exp_cscm_1: "Showcasing civic initiatives and advocacy campaigns",
    exp_cscm_2: "Creation of institutional and digital content",
    exp_cscm_3: "Communication support for civic engagement",

    exp_cfk_role: "Educational activities coordinator and field mobilizer.",
    exp_cfk_1: "Facebook campaigns for family awareness",
    exp_cfk_2: "Organization of educational events",
    exp_cfk_3: "Communication with partners and parents",

    exp_konecta_role: "Customer engagement manager and multichannel communication.",
    exp_konecta_1: "Social media content creation",
    exp_konecta_2: "Customer feedback analysis",
    exp_konecta_3: "Internal campaign coordination",

    exp_isic_role: "Event logistics and promotional lead.",
    exp_isic_1: "Academic event planning and coordination",
    exp_isic_2: "Logistics and team management",
    exp_isic_3: "Activity promotion via social networks and visuals",

    // Projects Section
    projects_title: "My Portfolio",
    projects_p1: "Every project is a story, every image a witness, every video a voice. Through my creations, I strive to <span class=\"highlight\">inspire, mobilize, and highlight</span> social, humanitarian, and brand initiatives.",
    projects_p2: "Explore my work categorized by media type: graphic design, posters, brand campaigns, and video productions.",

    // Filters
    filter_all: "All Projects",
    filter_visuals: "Visual Content",
    filter_videos: "Videos",

    // Category Section Headings
    section_visuals_heading: "📷 Visual and Graphic Content",
    section_videos_heading: "🎬 Video Works",

    // Folder Sub-Category Titles & Descriptions
    folder_megaprint_title: "Megaprint Group - Print and Signage",
    folder_megaprint_desc: "Graphic creations, large format print visuals, and corporate communication media.",

    folder_megapower_title: "Megapower - Solar Energy",
    folder_megapower_desc: "Awareness materials and educational visuals on solar energy independence.",

    folder_slimmo_title: "SLIMMO - Content and Lifestyle",
    folder_slimmo_desc: "Creative visuals, social media graphics, and brand engagement campaigns.",

    folder_fenofitia_title: "La Résidence Fenofitia - Real Estate",
    folder_fenofitia_desc: "Video tour and visual content showcasing the residence and living environment.",

    folder_croixrouge_title: "Malagasy Red Cross - Humanitarian Action",
    folder_croixrouge_desc: "Awareness posters, tender notices, call for volunteers, and field reports.",

    folder_cscm_title: "CSCM - Advocacy and Civic Engagement",
    folder_cscm_desc: "Videos and institutional content for the Malagasy Civil Society Concertation.",

    folder_associations_title: "NGO and Community Projects",
    folder_associations_desc: "Youth campaigns, civic mobilizations, and educational events (Alliance Aika, Challenge for Kids, Konecta, ISIC).",

    folder_general_visuals_title: "Posters and General Publications",
    folder_general_visuals_desc: "Graphic design creations and multichannel visual assets.",

    folder_general_videos_title: "General Videos and Reports",
    folder_general_videos_desc: "Video clips, volunteer portraits, and field documentaries.",

    // UI Buttons & Modals
    view_detail: "Enlarge Visual",
    watch_video: "Fullscreen",
    play_video: "Play",
    modal_close: "Close",
    modal_prev: "Previous",
    modal_next: "Next",

    // Contacts
    contact_title: "Contact",
    contact_intro: "Feel free to reach out for collaborations, projects, or professional opportunities.",
    contact_linkedin_p: "View professional profile",
    contact_facebook_p: "Follow latest updates",
    contact_insta_p: "Discover posts",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_phone_p: "+261 37 78 055 87",
    contact_email_p: "raiarantsoa@gmail.com",
    contact_whatsapp_p: "+261 38 40 211 52",

    // Theme Switcher
    theme_light_btn: "☀️ Day",
    theme_dark_btn: "🌙 Night"
  }
};

// --- PORTFOLIO DATA STRUCTURE (ORGANIZED BY FOLDER) ---

// 1. VISUAL CONTENT (img/)
const visualItems = [
  // Folder: img/Megaprint/
  {
    id: 'vis_mp1',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/video & (1).jpg',
    titleFR: 'Signalétique and Habillage de Véhicules',
    titleEN: 'Signage and Vehicle Wrapping',
    descFR: 'Création visuelle pour la communication visuelle grand format et habillage de véhicules d\'entreprise.',
    descEN: 'Visual design for large-format visual communication and corporate vehicle wrapping.'
  },
  {
    id: 'vis_mp2',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/video & (3).jpg',
    titleFR: 'Impression Grand Format and Signalétique',
    titleEN: 'Large Format Printing and Signage',
    descFR: 'Visuel promotionnel mettant en valeur les solutions d\'impression numérique et offset.',
    descEN: 'Promotional visual showcasing digital and offset printing solutions.'
  },
  {
    id: 'vis_mp3',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/video & (5).jpg',
    titleFR: 'Campagne de Communication B2B',
    titleEN: 'B2B Communication Campaign',
    descFR: 'Conception visuelle pour la promotion des services d\'imprimerie et de communication visuelle.',
    descEN: 'Visual design for promoting printing and visual communication services.'
  },

  // Folder: img/megapower/
  {
    id: 'vis_mpw1',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/video & (4).jpg',
    titleFR: 'Solutions Solaire Photovoltaïque',
    titleEN: 'Solar Photovoltaic Solutions',
    descFR: 'Visuel de sensibilisation et de promotion des solutions d\'autonomie énergétique.',
    descEN: 'Awareness and promotional visual for energy independence solutions.'
  },
  {
    id: 'vis_mpw2',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/video & (6).jpg',
    titleFR: 'Équipements Solaires and Vulgarisation',
    titleEN: 'Solar Equipment and Outreach',
    descFR: 'Contenu de vulgarisation technique sur les installations de panneaux solaires.',
    descEN: 'Technical outreach content regarding solar panel installations.'
  },

  // Folder: img/SLIMMO/
  {
    id: 'vis_sl1',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/video & (2).jpg',
    titleFR: 'Identité Lifestyle SLIMMO',
    titleEN: 'SLIMMO Lifestyle Identity',
    descFR: 'Visuel créatif pour la marque SLIMMO axé sur les tendances et l\'engagement social media.',
    descEN: 'Creative visual for SLIMMO brand focused on social media trends and engagement.'
  },

  // Folder: img/croixrouge/
  {
    id: 'vis_cr1',
    folderKey: 'folder_croixrouge',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/croixrouge/5.jpg',
    titleFR: 'Affiche de Sensibilisation Humanitaire',
    titleEN: 'Humanitarian Awareness Poster',
    descFR: 'Conception graphique d\'affiche pour la sensibilisation aux gestes de secours et valeurs humanitaires.',
    descEN: 'Graphic design poster for first aid awareness and humanitarian values.'
  },
  {
    id: 'vis_cr2',
    folderKey: 'folder_croixrouge',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/croixrouge/4.jpg',
    titleFR: 'Affiche d\'Appel d\'Offres Institutionnel',
    titleEN: 'Institutional Tender Notice Poster',
    descFR: 'Support de communication institutionnelle pour la diffusion d\'appels d\'offres.',
    descEN: 'Institutional communication poster for tender notices.'
  },
  {
    id: 'vis_cr3',
    folderKey: 'folder_croixrouge',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/croixrouge/3.jpg',
    titleFR: 'Affiche d\'Appel à Volontaires',
    titleEN: 'Call for Volunteers Poster',
    descFR: 'Visuel d\'appel à l\'engagement et au recrutement de nouveaux volontaires.',
    descEN: 'Visual calling for commitment and recruitment of new volunteers.'
  },

  // Folder: img/ (Associations & Partners)
  {
    id: 'vis_ass1',
    folderKey: 'folder_associations',
    brand: 'Alliance Aika',
    src: 'img/aika.jpg',
    titleFR: 'Mobilisation Jeunesse Alliance Aika',
    titleEN: 'Alliance Aika Youth Mobilization',
    descFR: 'Support visuel de mobilisation pour les activités et rassemblements de jeunes.',
    descEN: 'Mobilization visual support for youth activities and gatherings.'
  },
  {
    id: 'vis_ass2',
    folderKey: 'folder_associations',
    brand: 'Challenge for Kids',
    src: 'img/cfk1.jpg',
    titleFR: 'Campagne Éducative and Événements',
    titleEN: 'Educational Campaign and Events',
    descFR: 'Visuel promotionnel pour des activités éducatives et événements destinés aux familles.',
    descEN: 'Promotional visual for educational activities and family events.'
  },
  {
    id: 'vis_ass3',
    folderKey: 'folder_associations',
    brand: 'Konecta',
    src: 'img/000.jpg',
    titleFR: 'Campagne de Mobilisation Client',
    titleEN: 'Customer Engagement Campaign',
    descFR: 'Visuel de communication multicanale et suivi de la satisfaction client.',
    descEN: 'Multichannel communication visual and customer satisfaction tracking.'
  },
  {
    id: 'vis_ass4',
    folderKey: 'folder_associations',
    brand: 'ISIC',
    src: 'img/cfk.jpg',
    titleFR: 'Événement Académique and Cinéma',
    titleEN: 'Academic and Cinema Event',
    descFR: 'Conception d\'affiche promotionnelle pour les événements et la coordination logistique.',
    descEN: 'Promotional poster design for academic events and logistics coordination.'
  },

  // Folder: img/ (General / Publications)
  {
    id: 'vis_gen1',
    folderKey: 'folder_general_visuals',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/1.jpg',
    titleFR: 'Reportage Photo Terrain Humanitaire',
    titleEN: 'Humanitarian Field Photo Story',
    descFR: 'Documentation visuelle des activités de secours et d\'aide aux populations.',
    descEN: 'Visual documentation of relief activities and community support.'
  },
  {
    id: 'vis_gen2',
    folderKey: 'folder_general_visuals',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/3.jpg',
    titleFR: 'Affiche de Recrutement and Secourisme',
    titleEN: 'Recruitment and First Aid Poster',
    descFR: 'Création graphique pour la promotion de l\'engagement bénévole.',
    descEN: 'Graphic design promoting volunteer engagement.'
  },
  {
    id: 'vis_gen3',
    folderKey: 'folder_general_visuals',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/4.jpg',
    titleFR: 'Support d\'Appel d\'Offres Officiel',
    titleEN: 'Official Tender Communication',
    descFR: 'Visuel d\'information institutionnelle pour les marchés et partenariats.',
    descEN: 'Institutional information visual for contracts and partnerships.'
  },
  {
    id: 'vis_gen4',
    folderKey: 'folder_general_visuals',
    brand: 'Croix-Rouge Malagasy',
    src: 'img/5.jpg',
    titleFR: 'Affiche de Prévention and Sensibilisation',
    titleEN: 'Prevention and Awareness Poster',
    descFR: 'Affiche communautaire diffusée dans le cadre de campagnes sociales.',
    descEN: 'Community poster distributed as part of social campaigns.'
  },
  {
    id: 'vis_gen5',
    folderKey: 'folder_general_visuals',
    brand: 'Communication Visuelle',
    src: 'img/video & (2).jpg',
    titleFR: 'Visuel Creative Brand Content',
    titleEN: 'Creative Brand Content Visual',
    descFR: 'Conception graphique moderne pour les réseaux sociaux et campagnes web.',
    descEN: 'Modern graphic design for social media and web campaigns.'
  },
  {
    id: 'vis_gen6',
    folderKey: 'folder_general_visuals',
    brand: 'Communication Visuelle',
    src: 'img/video & (4).jpg',
    titleFR: 'Infographie and Supports Pédagogiques',
    titleEN: 'Infographic and Educational Media',
    descFR: 'Mise en page d\'informations clés pour une meilleure compréhension du public.',
    descEN: 'Key information layout for enhanced public understanding.'
  },
  {
    id: 'vis_gen7',
    folderKey: 'folder_general_visuals',
    brand: 'Communication Visuelle',
    src: 'img/video & (6).jpg',
    titleFR: 'Création Graphique Promotionnelle',
    titleEN: 'Promotional Graphic Creation',
    descFR: 'Support de promotion digitale décliné pour le web et les médias sociaux.',
    descEN: 'Digital promotional support tailored for web and social media.'
  },

  // --- MISSING IMAGES ADDED ---
  // Folder: img/fenofitia/
  {
    id: 'vis_fen_logo',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/fenofitia/ffb20f (1).png',
    titleFR: 'Logo and Identité Visuelle Fenofitia',
    titleEN: 'Fenofitia Logo and Visual Identity',
    descFR: 'Branding et identité visuelle officielle de La Résidence Fenofitia.',
    descEN: 'Official branding and visual identity of La Résidence Fenofitia.'
  },
  {
    id: 'vis_fen_c1',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/fenofitia/Copie de ffb20f (1).jpg',
    titleFR: 'Cadre de Vie and Résidence Fenofitia',
    titleEN: 'Fenofitia Living Environment and Residence',
    descFR: 'Visuel promotionnel valorisant les appartements meublés et le cadre de vie.',
    descEN: 'Promotional visual highlighting furnished apartments and living environment.'
  },
  {
    id: 'vis_fen_c2',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/fenofitia/Copie de ffb20f (2).jpg',
    titleFR: 'Espaces et Confort Fenofitia',
    titleEN: 'Fenofitia Spaces and Comfort',
    descFR: 'Présentation des aménagements et du standing des logements meublés.',
    descEN: 'Showcase of amenities and premium living spaces.'
  },
  {
    id: 'vis_fen_c3',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/fenofitia/Copie de ffb20f (3).jpg',
    titleFR: 'Séjour and Hébergement Fenofitia',
    titleEN: 'Fenofitia Accommodations and Stay',
    descFR: 'Visuel de communication immobilière et réservation de séjours.',
    descEN: 'Real estate communication visual for stay reservations.'
  },
  {
    id: 'vis_fen_c4',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/fenofitia/Copie de ffb20f (4).jpg',
    titleFR: 'Vue and Architecture Résidence Fenofitia',
    titleEN: 'Fenofitia Architecture and View',
    descFR: 'Valorisation architecturale et environnementale de la résidence.',
    descEN: 'Architectural and environmental highlight of the residence.'
  },
  {
    id: 'vis_fen_mavam',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'img/SLIMMO/Copie de LE MAVAM MAHANORO APPARTEMENTS MEUBLES TAMATAVE (4).jpg',
    titleFR: 'Appartements Meublés Le Mavam',
    titleEN: 'Le Mavam Furnished Apartments',
    descFR: 'Support visuel promotionnel pour les offres d\'hébergement et appartements meublés.',
    descEN: 'Promotional visual support for accommodation offers and furnished apartments.'
  },

  // Folder: img/megapower/ (Additional)
  {
    id: 'vis_mpw_aio1',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/AllInOne1.jpg',
    titleFR: 'Solution Solaire All-In-One 1',
    titleEN: 'All-In-One Solar Solution 1',
    descFR: 'Visuel produit pour kit solaire autonome tout-en-un.',
    descEN: 'Product visual for all-in-one standalone solar kit.'
  },
  {
    id: 'vis_mpw_aio2',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/AllInOne2.jpg',
    titleFR: 'Solution Solaire All-In-One 2',
    titleEN: 'All-In-One Solar Solution 2',
    descFR: 'Présentation technique des fonctionnalités du système solaire All-In-One.',
    descEN: 'Technical presentation of All-In-One solar system features.'
  },
  {
    id: 'vis_mpw_aio3',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/AllInOne3.jpg',
    titleFR: 'Solution Solaire All-In-One 3',
    titleEN: 'All-In-One Solar Solution 3',
    descFR: 'Support de communication sur les performances énergétiques des équipements.',
    descEN: 'Communication support on energy equipment performance.'
  },
  {
    id: 'vis_mpw_roadshow',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/Copie de ROADSHOW MEGAPOWER.jpg',
    titleFR: 'Roadshow Megapower',
    titleEN: 'Megapower Roadshow',
    descFR: 'Visuel de la campagne événementielle et démonstrations terrain Megapower.',
    descEN: 'Visual for event campaign and Megapower field demonstrations.'
  },
  {
    id: 'vis_mpw_deye',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/Onduleur Deye + Batterie Deye  L\'alliance parfaite pour zéro panne et zéro prise de tête. (11).jpg',
    titleFR: 'Onduleur and Batterie Deye',
    titleEN: 'Deye Inverter and Battery',
    descFR: 'Visuel de promotion pour l\'association onduleur et batterie solaire Deye.',
    descEN: 'Promotional visual for Deye solar inverter and battery system.'
  },
  {
    id: 'vis_mpw_panel',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/megapower/PanneauSolaire.png',
    titleFR: 'Panneaux Solaires Haute Performance',
    titleEN: 'High-Performance Solar Panels',
    descFR: 'Support visuel mettant en avant la technologie des panneaux solaires Megapower.',
    descEN: 'Visual support highlighting Megapower solar panel technology.'
  },
  {
    id: 'vis_mpw_mada9',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'img/Megaprint/MEGAPOWER MADA (9).jpg',
    titleFR: 'Offre Megapower Mada',
    titleEN: 'Megapower Mada Offer',
    descFR: 'Visuel publicitaire pour les offres de solutions solaires Megapower.',
    descEN: 'Advertising visual for Megapower solar solution offers.'
  },

  // Folder: img/Megaprint/ (Additional)
  {
    id: 'vis_mp_eq1',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (1).jpg',
    titleFR: 'Conception d\'Étiquettes and Packaging 1',
    titleEN: 'Label and Packaging Design 1',
    descFR: 'Création graphique d\'étiquettes personnalisées pour emballages et bouteilles.',
    descEN: 'Graphic creation of custom labels for packaging and bottles.'
  },
  {
    id: 'vis_mp_eq5',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/éTIQUETTEs (5).jpg',
    titleFR: 'Design Étiquettes Produits 5',
    titleEN: 'Product Label Design 5',
    descFR: 'Visuel d\'impression d\'étiquettes adhésives sur mesure pour marques locales.',
    descEN: 'Custom adhesive label printing visual for local brands.'
  },
  {
    id: 'vis_mp_eq5c',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (5).jpg',
    titleFR: 'Design Étiquettes Produits 5 (Variante)',
    titleEN: 'Product Label Design 5 (Variant)',
    descFR: 'Déclinaison visuelle pour la gamme d\'étiquettes personnalisées Megaprint.',
    descEN: 'Visual variant for Megaprint custom label range.'
  },
  {
    id: 'vis_mp_eq6',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/éTIQUETTEs (6).jpg',
    titleFR: 'Design Étiquettes Produits 6',
    titleEN: 'Product Label Design 6',
    descFR: 'Modèle d\'étiquettes adhésives et packaging de produit.',
    descEN: 'Adhesive label and product packaging model.'
  },
  {
    id: 'vis_mp_eq6c',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (6).jpg',
    titleFR: 'Design Étiquettes Produits 6 (Dark)',
    titleEN: 'Product Label Design 6 (Dark)',
    descFR: 'Création visuelle packaging haut de gamme fond sombre.',
    descEN: 'Premium dark background packaging visual design.'
  },
  {
    id: 'vis_mp_eq7',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/éTIQUETTEs (7).jpg',
    titleFR: 'Design Étiquettes Produits 7',
    titleEN: 'Product Label Design 7',
    descFR: 'Impression d\'étiquettes de marque et packaging personnalisé.',
    descEN: 'Brand label printing and custom packaging.'
  },
  {
    id: 'vis_mp_eq7c',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (7).jpg',
    titleFR: 'Design Étiquettes Produits 7 (Variante)',
    titleEN: 'Product Label Design 7 (Variant)',
    descFR: 'Déclinaison graphique pour packaging et étiquettes adhésives.',
    descEN: 'Graphic variant for packaging and adhesive labels.'
  },
  {
    id: 'vis_mp_eq8c',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (8).jpg',
    titleFR: 'Design Étiquettes Produits 8',
    titleEN: 'Product Label Design 8',
    descFR: 'Conception d\'étiquettes pour emballages commerciaux.',
    descEN: 'Label design for commercial packaging.'
  },
  {
    id: 'vis_mp_eq9c',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Copie de éTIQUETTEs (9).jpg',
    titleFR: 'Design Étiquettes Produits 9',
    titleEN: 'Product Label Design 9',
    descFR: 'Création visuelle pour étiquettes adhésives imprimées.',
    descEN: 'Visual creation for printed adhesive labels.'
  },
  {
    id: 'vis_mp_fin',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/Finition.jpg',
    titleFR: 'Finition and Découpe d\'Impression',
    titleEN: 'Printing Finishing and Cutting',
    descFR: 'Visuel mettant en avant les travaux de finition et découpe de précision Megaprint.',
    descEN: 'Visual highlighting precision finishing and cutting at Megaprint.'
  },
  {
    id: 'vis_mp_off7',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/off7.jpg',
    titleFR: 'Impression Offset and Qualité',
    titleEN: 'Offset Printing and Quality',
    descFR: 'Présentation des solutions d\'impression offset pour grands tirages.',
    descEN: 'Presentation of offset printing solutions for large runs.'
  },
  {
    id: 'vis_mp_pao',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'img/Megaprint/PAO.jpg',
    titleFR: 'Studio PAO and Design Graphique',
    titleEN: 'DTP Studio and Graphic Design',
    descFR: 'Mise en page et préparation des fichiers d\'impression au studio PAO.',
    descEN: 'Layout and file preparation for printing at DTP studio.'
  },

  // Folder: img/SLIMMO/ (Additional)
  {
    id: 'vis_sl_b1',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/B1.jpg',
    titleFR: 'Visuel SLIMMO Brand 1',
    titleEN: 'SLIMMO Brand Visual 1',
    descFR: 'Création graphique pour la communication digitale et réseaux sociaux SLIMMO.',
    descEN: 'Graphic creation for SLIMMO digital and social media communication.'
  },
  {
    id: 'vis_sl_b2',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/B2.jpg',
    titleFR: 'Visuel SLIMMO Brand 2',
    titleEN: 'SLIMMO Brand Visual 2',
    descFR: 'Visuel lifestyle et tendances d\'engagement pour la marque SLIMMO.',
    descEN: 'Lifestyle visual and engagement trends for SLIMMO brand.'
  },
  {
    id: 'vis_sl_b3',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/B3.jpg',
    titleFR: 'Visuel SLIMMO Brand 3',
    titleEN: 'SLIMMO Brand Visual 3',
    descFR: 'Contenu de communication visuelle décliné pour les médias sociaux.',
    descEN: 'Visual communication content tailored for social media.'
  },
  {
    id: 'vis_sl_b4',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/B4.jpg',
    titleFR: 'Visuel SLIMMO Brand 4',
    titleEN: 'SLIMMO Brand Visual 4',
    descFR: 'Support visuel promotionnel pour la communauté SLIMMO.',
    descEN: 'Promotional visual support for SLIMMO community.'
  },
  {
    id: 'vis_sl_b5',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'img/SLIMMO/B5.jpg',
    titleFR: 'Visuel SLIMMO Brand 5',
    titleEN: 'SLIMMO Brand Visual 5',
    descFR: 'Visuel créatif de campagne sociale et engagement web.',
    descEN: 'Creative visual for social campaign and web engagement.'
  },

  // Folder: img/ (Additional General Visual)
  {
    id: 'vis_gen_shoot',
    folderKey: 'folder_general_visuals',
    brand: 'Communication Visuelle',
    src: 'img/20261002_134033.jpg',
    titleFR: 'Shooting Photo and Production Terrain',
    titleEN: 'Photo Shoot and Field Production',
    descFR: 'Prise de vue terrain et documentation visuelle pour projet de communication.',
    descEN: 'Field photo shoot and visual documentation for communication project.'
  }
];

// 2. VIDEOS (videos/)
const videoItems = [
  // Folder: videos/megaprint/
  {
    id: 'vid_mp1',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'videos/megaprint/3.mp4',
    poster: 'img/Megaprint/video & (1).jpg',
    titleFR: 'Spot Promotionnel Megaprint',
    titleEN: 'Megaprint Commercial Spot',
    descFR: 'Capsule vidéo présentant l\'expertise en impression grand format et signalétique.',
    descEN: 'Video spot presenting expertise in large-format printing and signage.'
  },

  // Folder: videos/megapower/
  {
    id: 'vid_mpw1',
    folderKey: 'folder_megapower',
    brand: 'Megapower',
    src: 'videos/megapower/power.mp4',
    poster: 'img/megapower/video & (4).jpg',
    titleFR: 'Solutions Solaire Photovoltaïque',
    titleEN: 'Photovoltaic Solar Solutions',
    descFR: 'Présentation vidéo des équipements et avantages de l\'autonomie énergétique.',
    descEN: 'Video feature on equipment and benefits of solar energy independence.'
  },

  // Folder: videos/SLIMMO/
  {
    id: 'vid_sl1',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'videos/SLIMMO/SLIMMO2.mp4',
    poster: 'img/SLIMMO/video & (2).jpg',
    titleFR: 'Reel Dynamic SLIMMO Brand',
    titleEN: 'SLIMMO Dynamic Brand Reel',
    descFR: 'Contenu vidéo court et captivant conçu pour Reels, TikTok et Facebook.',
    descEN: 'Short and engaging video content designed for Reels, TikTok, and Facebook.'
  },

  // Folder: videos/fenofitia/
  {
    id: 'vid_fen1',
    folderKey: 'folder_fenofitia',
    brand: 'La Résidence Fenofitia',
    src: 'videos/fenofitia/5.mp4',
    poster: 'img/photopdp.jpg',
    titleFR: 'Présentation Résidence Fenofitia',
    titleEN: 'Fenofitia Residence Tour',
    descFR: 'Visite guidée en vidéo valorisant le cadre de vie et les appartements.',
    descEN: 'Guided video tour spotlighting the living environment and apartments.'
  },

  // Folder: videos/croix rouge/
  {
    id: 'vid_cr1',
    folderKey: 'folder_croixrouge',
    brand: 'Croix-Rouge Malagasy',
    src: 'videos/croix rouge/1.mp4',
    poster: 'img/croixrouge/5.jpg',
    titleFR: 'Sensibilisation aux Gestes de Secours',
    titleEN: 'First Aid Awareness Campaign',
    descFR: 'Vidéo pédagogique sur l\'apprentissage des premiers secours et le secourisme.',
    descEN: 'Educational video on learning first aid and lifesaving skills.'
  },
  {
    id: 'vid_cr2',
    folderKey: 'folder_croixrouge',
    brand: 'Croix-Rouge Malagasy',
    src: 'videos/croix rouge/2.mp4',
    poster: 'img/croixrouge/3.jpg',
    titleFR: 'Portrait and Storytelling Volontaire',
    titleEN: 'Volunteer Portrait and Storytelling',
    descFR: 'Reportage vidéo mettant à l\'honneur l\'engagement des volontaires sur le terrain.',
    descEN: 'Video report honoring the dedication of volunteers on the ground.'
  },

  // Folder: videos/concertation/
  {
    id: 'vid_cscm1',
    folderKey: 'folder_cscm',
    brand: 'CSCM',
    src: 'videos/concertation/concertation.mp4',
    poster: 'img/1.jpg',
    titleFR: 'Plaidoyer and Engagement Citoyen',
    titleEN: 'Advocacy and Civic Engagement',
    descFR: 'Vidéo institutionnelle pour la Concertation des Sociétés Civiles Malagasy.',
    descEN: 'Institutional video for the Malagasy Civil Society Concertation.'
  },

  // Folder: videos/ (General Videos)
  {
    id: 'vid_gen1',
    folderKey: 'folder_general_videos',
    brand: 'Croix-Rouge Malagasy',
    src: 'videos/1.mp4',
    poster: 'img/croixrouge/5.jpg',
    titleFR: 'Campagne Humanitaire Digital',
    titleEN: 'Digital Humanitarian Campaign',
    descFR: 'Capsule de sensibilisation aux actions de terrain et mobilisation sociale.',
    descEN: 'Awareness video on field operations and social mobilization.'
  },
  {
    id: 'vid_gen2',
    folderKey: 'folder_general_videos',
    brand: 'Croix-Rouge Malagasy',
    src: 'videos/2.mp4',
    poster: 'img/croixrouge/3.jpg',
    titleFR: 'Actions Bénévoles and Témoignages',
    titleEN: 'Volunteer Actions and Testimonials',
    descFR: 'Capsule vidéo capturant l\'impact des bénévoles auprès des communautés.',
    descEN: 'Video clip capturing volunteer impact within communities.'
  },
  {
    id: 'vid_gen3',
    folderKey: 'folder_general_videos',
    brand: 'Megaprint',
    src: 'videos/3.mp4',
    poster: 'img/Megaprint/video & (1).jpg',
    titleFR: 'Présentation des Réalisations Megaprint',
    titleEN: 'Megaprint Projects Showcase',
    descFR: 'Spot vidéo résumant les créations graphiques et signalétiques.',
    descEN: 'Video spot summarizing graphic design and signage projects.'
  },
  {
    id: 'vid_gen4',
    folderKey: 'folder_general_videos',
    brand: 'La Résidence Fenofitia',
    src: 'videos/5.mp4',
    poster: 'img/photopdp.jpg',
    titleFR: 'Visite Immersive and Cadre de Vie',
    titleEN: 'Immersive Tour and Living Space',
    descFR: 'Aperçu des espaces de vie et commodités de la Résidence Fenofitia.',
    descEN: 'Overview of living spaces and amenities at Residence Fenofitia.'
  },

  // --- MISSING VIDEOS ADDED ---
  // Folder: videos/megaprint/ (Additional)
  {
    id: 'vid_mp_anniv',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'videos/megaprint/anniversaireMegaprint.mp4',
    poster: 'img/Megaprint/video & (1).jpg',
    titleFR: 'Vidéo Anniversaire Groupe Megaprint',
    titleEN: 'Megaprint Group Anniversary Video',
    descFR: 'Rétrospective vidéo et célébration des réalisations du Groupe Megaprint.',
    descEN: 'Video retrospective and celebration of Megaprint Group achievements.'
  },
  {
    id: 'vid_mp_fb',
    folderKey: 'folder_megaprint',
    brand: 'Megaprint',
    src: 'videos/megaprint/facebook-20261002-3_YCYPuWQX.mp4',
    poster: 'img/Megaprint/video & (3).jpg',
    titleFR: 'Capsule Vidéo Facebook Megaprint',
    titleEN: 'Megaprint Facebook Video Clip',
    descFR: 'Contenu vidéo promotionnel court diffusé sur les réseaux sociaux.',
    descEN: 'Short promotional video content broadcast on social media.'
  },

  // Folder: videos/SLIMMO/ (Additional)
  {
    id: 'vid_sl_alizes',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'videos/SLIMMO/Les Alizés.mp4',
    poster: 'img/SLIMMO/video & (2).jpg',
    titleFR: 'Spot Vidéo Les Alizés - SLIMMO',
    titleEN: 'Les Alizés Video Spot - SLIMMO',
    descFR: 'Capsule vidéo promotionnelle pour le projet Les Alizés et la marque SLIMMO.',
    descEN: 'Promotional video clip for Les Alizés project and SLIMMO brand.'
  },
  {
    id: 'vid_sl_2026',
    folderKey: 'folder_slimmo',
    brand: 'SLIMMO',
    src: 'videos/SLIMMO/SLIMMO 2026.mp4',
    poster: 'img/SLIMMO/video & (2).jpg',
    titleFR: 'Campagne Vidéo SLIMMO 2026',
    titleEN: 'SLIMMO 2026 Video Campaign',
    descFR: 'Production vidéo institutionnelle et créative pour la campagne SLIMMO 2026.',
    descEN: 'Institutional and creative video production for SLIMMO 2026 campaign.'
  }
];

// --- APP STATE ---
let currentLang = localStorage.getItem('portfolio_lang') || 'fr';
let currentTheme = localStorage.getItem('portfolio_theme') || 'light';
let activeFilter = 'all'; // 'all', 'visuals', 'videos'
let currentLightboxIndex = 0;
let currentLightboxList = [];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderPortfolio();
  initModals();
  initNavListeners();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  updateThemeButtonUI();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('portfolio_theme', currentTheme);
  initTheme();
}

function updateThemeButtonUI() {
  const btnText = document.querySelector('#theme-toggle-btn .theme-label');
  const btnIcon = document.querySelector('#theme-toggle-btn i');
  
  const isDark = currentTheme === 'dark';
  if (btnText) {
    btnText.textContent = isDark ? translations[currentLang].theme_light_btn : translations[currentLang].theme_dark_btn;
  }
  if (btnIcon) {
    btnIcon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
  }
}

// --- LANGUAGE MANAGEMENT ---
function initLanguage() {
  applyLanguage(currentLang);
}

function switchLanguage(lang) {
  if (lang !== currentLang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', currentLang);
    applyLanguage(currentLang);
    renderPortfolio(); // Re-render dynamic elements with new language
  }
}

function applyLanguage(lang) {
  // Update data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language selector active states
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateThemeButtonUI();
}

// --- PORTFOLIO GALLERY RENDERING ---
function renderPortfolio() {
  const container = document.getElementById('portfolio-gallery-container');
  if (!container) return;

  const lang = currentLang;
  let html = '';

  // 1. RENDER VISUAL CONTENT SECTION
  if (activeFilter === 'all' || activeFilter === 'visuals') {
    html += `
      <div class="portfolio-section-block fade-in" id="section-visuals">
        <div class="portfolio-section-header">
          <h3 data-i18n="section_visuals_heading">${translations[lang].section_visuals_heading}</h3>
        </div>
        ${renderFolderGroupedItems(visualItems, 'visual')}
      </div>
    `;
  }

  // 2. RENDER VIDEOS SECTION
  if (activeFilter === 'all' || activeFilter === 'videos') {
    html += `
      <div class="portfolio-section-block fade-in" id="section-videos">
        <div class="portfolio-section-header">
          <h3 data-i18n="section_videos_heading">${translations[lang].section_videos_heading}</h3>
        </div>
        ${renderFolderGroupedItems(videoItems, 'video')}
      </div>
    `;
  }

  container.innerHTML = html;

  // Re-attach card click handlers
  attachCardListeners();
}

function renderFolderGroupedItems(items, type) {
  const lang = currentLang;
  
  // Group items by folderKey
  const grouped = {};
  items.forEach(item => {
    if (!grouped[item.folderKey]) {
      grouped[item.folderKey] = [];
    }
    grouped[item.folderKey].push(item);
  });

  let groupHtml = '';
  for (const [folderKey, itemList] of Object.entries(grouped)) {
    const titleKey = `${folderKey}_title`;
    const descKey = `${folderKey}_desc`;

    const title = translations[lang][titleKey] || folderKey;
    const desc = translations[lang][descKey] || '';

    const cardsHtml = type === 'visual' 
      ? renderVisualCards(itemList) 
      : renderVideoCards(itemList);

    groupHtml += `
      <div class="portfolio-category-group">
        <div class="category-header">
          <h4><i class="fa ${type === 'visual' ? 'fa-folder-open' : 'fa-film'}"></i> ${title}</h4>
          ${desc ? `<p>${desc}</p>` : ''}
        </div>
        <div class="portfolio-grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  return groupHtml;
}

function renderVisualCards(items) {
  const lang = currentLang;
  return items.map(item => {
    const title = lang === 'fr' ? item.titleFR : item.titleEN;
    const desc = lang === 'fr' ? item.descFR : item.descEN;
    const viewBtnText = translations[lang].view_detail;

    return `
      <div class="portfolio-card visual-card zoom" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.src}" alt="${title}" loading="lazy">
          <span class="brand-badge">${item.brand}</span>
          <div class="card-overlay">
            <button class="open-lightbox-btn" aria-label="${viewBtnText}">
              <i class="fa fa-search-plus"></i> ${viewBtnText}
            </button>
          </div>
        </div>
        <div class="card-info">
          <h5>${title}</h5>
          <p>${desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderVideoCards(items) {
  const lang = currentLang;
  return items.map(item => {
    const title = lang === 'fr' ? item.titleFR : item.titleEN;
    const desc = lang === 'fr' ? item.descFR : item.descEN;
    const watchBtnText = translations[lang].watch_video;

    return `
      <div class="portfolio-card video-card zoom" data-id="${item.id}">
        <div class="card-media video-media">
          <video controls preload="metadata" poster="${item.poster || ''}">
            <source src="${item.src}" type="video/mp4">
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
          <span class="brand-badge">${item.brand}</span>
        </div>
        <div class="card-info">
          <h5>${title}</h5>
          <p>${desc}</p>
          <button class="open-video-modal-btn" aria-label="${watchBtnText}" data-id="${item.id}">
            <i class="fa fa-expand"></i> ${watchBtnText}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// --- FILTERING CONTROLS ---
function setFilter(filter) {
  activeFilter = filter;

  // Update button active state
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderPortfolio();
}

// --- MODAL & LIGHTBOX HANDLERS ---
function attachCardListeners() {
  // Visual Cards Click -> Open Lightbox
  const visualCards = document.querySelectorAll('.visual-card');
  visualCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.getAttribute('data-id');
      openImageLightbox(id);
    });
  });

  // Video Modal Buttons -> Open Video Modal
  const videoModalBtns = document.querySelectorAll('.open-video-modal-btn');
  videoModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openVideoModal(id);
    });
  });
}

function initModals() {
  // Keydown handler for Esc and Arrow Keys
  document.addEventListener('keydown', (e) => {
    const imgModal = document.getElementById('image-lightbox-modal');
    const vidModal = document.getElementById('video-modal');

    if (imgModal && imgModal.classList.contains('active')) {
      if (e.key === 'Escape') closeImageLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    }

    if (vidModal && vidModal.classList.contains('active')) {
      if (e.key === 'Escape') closeVideoModal();
    }
  });
}

// --- IMAGE LIGHTBOX LOGIC ---
function openImageLightbox(id) {
  currentLightboxList = visualItems;
  currentLightboxIndex = currentLightboxList.findIndex(item => item.id === id);
  if (currentLightboxIndex === -1) currentLightboxIndex = 0;

  updateLightboxContent();

  const modal = document.getElementById('image-lightbox-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function updateLightboxContent() {
  const item = currentLightboxList[currentLightboxIndex];
  if (!item) return;

  const lang = currentLang;
  const title = lang === 'fr' ? item.titleFR : item.titleEN;
  const desc = lang === 'fr' ? item.descFR : item.descEN;

  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const brandEl = document.getElementById('lightbox-brand');
  const counterEl = document.getElementById('lightbox-counter');

  if (imgEl) imgEl.src = item.src;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  if (brandEl) brandEl.textContent = item.brand;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightboxContent();
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
  updateLightboxContent();
}

function closeImageLightbox() {
  const modal = document.getElementById('image-lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- VIDEO MODAL LOGIC ---
function openVideoModal(id) {
  const item = videoItems.find(v => v.id === id);
  if (!item) return;

  const lang = currentLang;
  const title = lang === 'fr' ? item.titleFR : item.titleEN;
  const desc = lang === 'fr' ? item.descFR : item.descEN;

  const modal = document.getElementById('video-modal');
  const videoEl = document.getElementById('modal-video-player');
  const titleEl = document.getElementById('video-modal-title');
  const descEl = document.getElementById('video-modal-desc');
  const brandEl = document.getElementById('video-modal-brand');

  if (videoEl) {
    videoEl.src = item.src;
    videoEl.load();
    videoEl.play().catch(() => {});
  }

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  if (brandEl) brandEl.textContent = item.brand;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const videoEl = document.getElementById('modal-video-player');

  if (videoEl) {
    videoEl.pause();
    videoEl.src = '';
  }

  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- NAVIGATION & MENU TOGGLE ---
function initNavListeners() {
  let toggle = document.querySelector('.toggle');
  let topbar = document.querySelector('.topbar');
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');

  if (toggle) {
    toggle.onclick = function () {
      toggle.classList.toggle('active');
      if (topbar) topbar.classList.toggle('active');
      if (navigation) navigation.classList.toggle('active');
      if (main) main.classList.toggle('active');
    };
  }
}

function toogleMenu() {
  let navigation = document.querySelector('.navigation');
  let main = document.querySelector('.main');
  let toggle = document.querySelector('.toggle');
  let topbar = document.querySelector('.topbar');

  if (navigation) navigation.classList.remove('active');
  if (main) main.classList.remove('active');
  if (toggle) toggle.classList.remove('active');
  if (topbar) topbar.classList.remove('active');
}
