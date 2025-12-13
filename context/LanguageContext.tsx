"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// DICTIONNAIRE COMPLET DE TRADUCTIONS
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    name: "Hammami Wiem",
    about: "À propos",
    education: "Éducation",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    downloadCV: "Télécharger CV",
    
    // Hero
    engineerTitle: "Ingénieure Informatique",
    heroDescription: "Créatrice de solutions numériques modernes, alliant élégance technique et innovation. Je conçois et développe des applications centrées sur l’expérience utilisateur.",
    contactMe: "Me Contacter",
    viewProjects: "Voir Projets",
    
    // About
    aboutMe: "À propos de moi",
    profile: "Profil",
    profileDesc: "Diplômée en génie informatique, spécialité Nouvelles Technologies et Sécurité, je possède une formation solide couvrant les systèmes informatiques, les réseaux et le développement logiciel. Mon parcours académique et mes expériences pratiques m’ont permis d’acquérir une vision globale des systèmes d’information, allant de la conception des applications à la compréhension des enjeux de performance et de fiabilité. Sérieuse, rigoureuse et motivée, je m’appuie sur mes compétences techniques pour apporter une contribution concrète aux projets informatiques.",
    training: "Formation",
    languages: "Langues",
    associativeLife: "Vie Associative",
    
    // Education (Formation)
    edu1Date: "2022 – 2025",
    edu1Title: "Ingénieur en Informatique",
    edu1School: "École nationale supérieure d'ingénieurs de Tunis (ENSIT)",
    edu1Spec: "Spécialisation en Nouvelles Technologies et Sécurité",
    edu2Date: "2020 – 2022",
    edu2Title: "Cycle Préparatoire",
    edu2School: "Institut Préparatoire aux Etudes d'Ingénieur de Bizerte (IPEIB)",
    edu2Spec: "Mathématiques/Physique",
    edu3Date: "2020",
    edu3Title: "Baccalauréat Mathématiques",
    edu3School: "Lycée Khayr Eddine Bacha",
    
    // Languages Section
    arabicLang: "Arabe",
    frenchLang: "Français",
    englishLang: "Anglais",
    nativeLevel: "Langue maternelle",
    intermediateLevel: "Intermédiaire",
    
    // Associative Life
    assoc1Title: "IEEE ENSIT Student Branch",
    assoc1Desc: "Membre active avec participation à l'organisation du TSYP 11 (2023). Certificats d'appréciation et de reconnaissance.",
    assoc2Title: "SIT 2022",
    assoc2Desc: "Participation au forum avec contribution reconnue. Certificat d'achievement.",
    assoc3Title: "Club GEEKS ENSIT",
    assoc3Desc: "Membre active participant aux activités de formation et événements techniques.",
    
    // Skills
    programmingLanguages: "Langages de programmation",
    frontendDev: "Développement Frontend",
    backendFrameworks: "Frameworks Backend",
    mobileDev: "Développement Mobile",
    databases: "Bases de données",
    toolsEnv: "Outils et environnements",
    
    // Projects
    academicProjects: "Projets Académiques",
    seeMore: "Voir plus",
    seeLess: "Voir moins",
    seeMoreProjects: "Voir plus de projets",
    seeLessProjects: "Voir moins de projets",
    
    // Project 1
    proj1Title: "Casque IoT Intelligent",
    proj1Date: "Novembre - Décembre 2024",
    proj1Desc: "Développement d'un casque IoT intelligent équipé de capteurs pour surveiller la température, l'humidité et les gaz toxiques. Intégration d'alertes sonores, visuelles et notifications mobiles via Flutter et module Bluetooth.",
    
    // Project 2
    proj2Title: "App E-learning pour Malvoyants",
    proj2Date: "Janvier - Avril 2024",
    proj2Desc: "Application mobile d'apprentissage en ligne pour personnes malvoyantes, intégrant la synthèse vocale et la navigation tactile pour une meilleure accessibilité.",
    
    // Project 3
    proj3Title: "App Web de Donations Scolaires",
    proj3Date: "Janvier - Avril 2024",
    proj3Desc: "Projet IEEE TSYP — Développement d'une application web permettant aux utilisateurs de faire des dons pour soutenir les écoles défavorisées.",
    
    // Project 4
    proj4Title: "BeTrendy - Plateforme E-Commerce Mobile",
    proj4Date: "Janvier - Avril 2024",
    proj4Desc: "Application mobile e-commerce complète avec Ionic et Angular. Gestion du panier, paiement sécurisé, et suivi de livraison en temps réel.",
    
    // Project 5
    proj5Title: "eBiblio - Système de Gestion de Bibliothèque",
    proj5Date: "Novembre - Décembre 2023",
    proj5Desc: "Application JavaFX de gestion de bibliothèque avec MySQL. Permet la gestion des livres, utilisateurs et emprunts.",
    
    // Project 6
    proj6Title: "Système de Gestion de Cabinet d'Avocats",
    proj6Date: "Janvier - Avril 2023",
    proj6Desc: "Application web moderne pour la gestion des clients, dossiers, rendez-vous et facturation dans un cabinet d'avocats.",
    
    // Experience
    seeDetails: "Voir les détails",
    hideDetails: "Masquer les détails",
    miniProjects: "Mini-projets réalisés :",
    keyFeatures: "Fonctionnalités clés :",
    achievements: "Réalisations :",
    toolsUsed: "Outils utilisés :",
    
    // Experience 1 - DECADE
    exp1Date: "Février - Mai 2025",
    exp1Title: "DECADE - Projet de fin d'études",
    exp1Subtitle: "Refonte du tunnel de commande d'un site e-commerce",
    exp1Desc: "Ce projet a consisté en la refonte du tunnel de commande d'un site e-commerce, notamment les pages de livraison et de mise à jour du compte, pour améliorer la performance, la maintenabilité et l'expérience utilisateur. Le front-end a été migré de TWIG vers Next.js avec un design responsive. Le back-end repose sur une architecture modulaire avec des APIs REST en PHP, assurant un découplage net entre front-end et back-end.",
    exp1Mini1Title: "Site e-commerce React.js",
    exp1Mini1Desc: "Création d'un site e-commerce avec React.js, basé sur des APIs pour la gestion des produits et du panier. L'objectif était de maîtriser le fonctionnement du front-end découplé.",
    exp1Mini2Title: "Site e-commerce Next.js (SSR/CSR)",
    exp1Mini2Desc: "Développement d'un second site e-commerce avec Next.js intégrant le rendu côté serveur (SSR) et le rendu côté client (CSR), en interaction avec des APIs pour une meilleure performance.",
    
    // Experience 2 - ConvergeINNOV
    exp2Date: "Juin - Août 2024",
    exp2Title: "ConvergeINNOV - Développeur Full Stack",
    exp2Subtitle: "Stage Technicien",
    exp2Desc: "Conception et développement d'une application mobile dédiée à la gestion d'hôtels, permettant l'administration des réservations et la gestion des chambres. Développement avec Flutter pour une interface multiplateforme fluide et moderne, et utilisation de Firebase pour la gestion en temps réel des données et l'authentification.",
    exp2Feature1: "Administration des réservations en temps réel",
    exp2Feature2: "Gestion complète des chambres et disponibilités",
    exp2Feature3: "Système d'authentification sécurisé",
    exp2Feature4: "Interface multiplateforme (iOS/Android)",
    
    // Experience 3 - Fortis Soft
    exp3Date: "Juin - Juillet 2023",
    exp3Title: "Fortis Soft - Développeur Front-End",
    exp3Subtitle: "Stage Ouvrier",
    exp3Desc: "Développement d'un site vitrine présentant les services et produits de l'entreprise, avec une navigation intuitive. Implémentation front-end en HTML, CSS et JavaScript, avec un formulaire de demande de devis dynamique développé en PHP.",
    exp3Feature1: "Design responsive et moderne",
    exp3Feature2: "Navigation intuitive et fluide",
    exp3Feature3: "Formulaire de demande de devis dynamique",
    exp3Feature4: "Présentation claire des services et produits",
    
    // Certifications
    certifications: "Certifications",
    skillsAcquired: "Compétences acquises",
    
    // Footer/Contact
    contactTitle: "Contactez-moi",
    contactInfo: "Informations de contact",
    sendMessage: "Envoyer un message",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    subject: "Sujet",
    yourMessage: "Votre message",
    sendBtn: "Envoyer le message",
    allRightsReserved: "Tous droits réservés.",
    location: "Mourouj 3, Ben Arous, Tunisie",
    messageSent: "Votre message a été envoyé avec succès !",
messageError: "Une erreur est survenue. Veuillez réessayer plus tard.",
sending: "Envoi en cours...",

  // Certifications
  downloadCertificate: "Télécharger le certificat",
  certOpenSuccess: "Ouverture du certificat {title}...",
  certNotAvailable: "Le certificat {id} n'est pas encore disponible.",
  certOpenAttempt: "Tentative d'ouverture du certificat {title}...",
  
  // CCNA 1
  cert1Date: "Juin 2024",
  cert1Title: "CCNA 1: Introduction aux réseaux",
  cert1Source: "Cisco Networking Academy",
  cert1Skill1: "Modèle OSI",
  cert1Skill2: "TCP/IP",
  cert1Skill3: "Adressage IP",
  cert1Skill4: "Ethernet",
  
  // CCNA 2
  cert2Date: "Sept 2024",
  cert2Title: "CCNA 2: Commutation et routage",
  cert2Source: "Cisco Networking Academy",
  cert2Skill1: "VLAN",
  cert2Skill2: "STP",
  cert2Skill3: "Routage statique",
  cert2Skill4: "RIP",
  
  // CCNA 3
  cert3Date: "Déc 2024",
  cert3Title: "CCNA 3: Réseaux d'entreprise",
  cert3Source: "Cisco Networking Academy",
  cert3Skill1: "OSPF",
  cert3Skill2: "EIGRP",
  cert3Skill3: "ACL",
  cert3Skill4: "NAT/PAT",
  
  // AWS Cloud
  cert4Date: "Mars 2024",
  cert4Title: "Introduction au Cloud",
  cert4Source: "AWS Academy",
  cert4Skill1: "EC2",
  cert4Skill2: "S3",
  cert4Skill3: "VPC",
  cert4Skill4: "IAM",
  cert4Skill5: "CloudWatch",
  
  // AWS ML
  cert5Date: "Avril 2024",
  cert5Title: "Fondements de ML",
  cert5Source: "AWS Academy",
  cert5Skill1: "SageMaker",
  cert5Skill2: "Deep Learning",
  cert5Skill3: "NLP",
  cert5Skill4: "Computer Vision",
  
  // Angular
  cert6Date: "Jan 2024",
  cert6Title: "Formation Angular - 24h",
  cert6Source: "CrocoCoder Academy",
  cert6Skill1: "Components",
  cert6Skill2: "Services",
  cert6Skill3: "Routing",
  cert6Skill4: "RxJS",
  cert6Skill5: "TypeScript",

  },
  en: {
    // Header
    name: "Wiem Hammami",
    about: "About",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV",
    
    // Hero
    engineerTitle: "Software Engineer",
    heroDescription: "Builder of modern digital solutions, blending technical precision with creativity. I design and develop applications focused on seamless user experience.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    
    // About
    aboutMe: "About Me",
    profile: "Profile",
    profileDesc: "Graduated in Computer Engineering, specialized in New Technologies and Security, I have a solid academic background covering computer systems, networks, and software development. My academic journey and practical experiences have enabled me to acquire a comprehensive understanding of information systems, ranging from application design to performance and reliability considerations. Serious, rigorous, and motivated, I rely on my technical skills to make a concrete contribution to IT projects.",
    training: "Education",
    languages: "Languages",
    associativeLife: "Associative Life",
    
    // Education
    edu1Date: "2022 – 2025",
    edu1Title: "Computer Science Engineer",
    edu1School: "National School of Engineering of Tunis (ENSIT)",
    edu1Spec: "Specialization in New Technologies and Security",
    edu2Date: "2020 – 2022",
    edu2Title: "Preparatory Cycle",
    edu2School: "Preparatory Institute for Engineering Studies of Bizerte (IPEIB)",
    edu2Spec: "Mathematics/Physics",
    edu3Date: "2020",
    edu3Title: "Mathematics Baccalaureate",
    edu3School: "Khayr Eddine Bacha High School",
    
    // Languages Section
    arabicLang: "Arabic",
    frenchLang: "French",
    englishLang: "English",
    nativeLevel: "Native language",
    intermediateLevel: "Intermediate",
    
    // Associative Life
    assoc1Title: "IEEE ENSIT Student Branch",
    assoc1Desc: "Active member with participation in organizing TSYP 11 (2023). Certificates of appreciation and recognition.",
    assoc2Title: "SIT 2022",
    assoc2Desc: "Forum participation with recognized contribution. Certificate of achievement.",
    assoc3Title: "GEEKS ENSIT Club",
    assoc3Desc: "Active member participating in training activities and technical events.",
    
    // Skills
    programmingLanguages: "Programming Languages",
    frontendDev: "Frontend Development",
    backendFrameworks: "Backend Frameworks",
    mobileDev: "Mobile Development",
    databases: "Databases",
    toolsEnv: "Tools & Environments",
    
    // Projects
    academicProjects: "Academic Projects",
    seeMore: "See more",
    seeLess: "See less",
    seeMoreProjects: "See more projects",
    seeLessProjects: "See less projects",
    
    // Project 1
    proj1Title: "Smart IoT Helmet",
    proj1Date: "November - December 2024",
    proj1Desc: "Development of a smart IoT helmet equipped with sensors to monitor temperature, humidity and toxic gases. Integration of sound, visual alerts and mobile notifications via Flutter and Bluetooth module.",
    
    // Project 2
    proj2Title: "E-learning App for Visually Impaired",
    proj2Date: "January - April 2024",
    proj2Desc: "Mobile e-learning application for visually impaired people, integrating text-to-speech and tactile navigation for better accessibility.",
    
    // Project 3
    proj3Title: "School Donations Web App",
    proj3Date: "January - April 2024",
    proj3Desc: "IEEE TSYP Project — Development of a web application allowing users to make donations to support disadvantaged schools.",
    
    // Project 4
    proj4Title: "BeTrendy - Mobile E-Commerce Platform",
    proj4Date: "January - April 2024",
    proj4Desc: "Complete mobile e-commerce application with Ionic and Angular. Shopping cart management, secure payment, and real-time delivery tracking.",
    
    // Project 5
    proj5Title: "eBiblio - Library Management System",
    proj5Date: "November - December 2023",
    proj5Desc: "JavaFX library management application with MySQL. Allows management of books, users and loans.",
    
    // Project 6
    proj6Title: "Law Firm Management System",
    proj6Date: "January - April 2023",
    proj6Desc: "Modern web application for managing clients, cases, appointments and billing in a law firm.",
    
    // Experience
    seeDetails: "View details",
    hideDetails: "Hide details",
    miniProjects: "Completed mini-projects:",
    keyFeatures: "Key features:",
    achievements: "Achievements:",
    toolsUsed: "Tools used:",
    
    // Experience 1 - DECADE
    exp1Date: "February - May 2025",
    exp1Title: "DECADE - Final Year Project",
    exp1Subtitle: "E-commerce checkout flow redesign",
    exp1Desc: "This project consisted of redesigning the checkout flow of an e-commerce site, including delivery and account update pages, to improve performance, maintainability and user experience. The front-end was migrated from TWIG to Next.js with responsive design. The back-end is based on a modular architecture with REST APIs in PHP, ensuring clear separation between front-end and back-end.",
    exp1Mini1Title: "React.js E-commerce Site",
    exp1Mini1Desc: "Creation of an e-commerce site with React.js, based on APIs for product and cart management. The goal was to master decoupled front-end operations.",
    exp1Mini2Title: "Next.js E-commerce Site (SSR/CSR)",
    exp1Mini2Desc: "Development of a second e-commerce site with Next.js integrating server-side rendering (SSR) and client-side rendering (CSR), interacting with APIs for better performance.",
    
    // Experience 2 - ConvergeINNOV
    exp2Date: "June - August 2024",
    exp2Title: "ConvergeINNOV - Full Stack Developer",
    exp2Subtitle: "Technical Internship",
    exp2Desc: "Design and development of a mobile application dedicated to hotel management, allowing reservation administration and room management. Development with Flutter for a smooth and modern cross-platform interface, and use of Firebase for real-time data management and authentication.",
    exp2Feature1: "Real-time reservation administration",
    exp2Feature2: "Complete room and availability management",
    exp2Feature3: "Secure authentication system",
    exp2Feature4: "Cross-platform interface (iOS/Android)",
    
    // Experience 3 - Fortis Soft
    exp3Date: "June - July 2023",
    exp3Title: "Fortis Soft - Front-End Developer",
    exp3Subtitle: "Worker Internship",
    exp3Desc: "Development of a showcase website presenting the company's services and products, with intuitive navigation. Front-end implementation in HTML, CSS and JavaScript, with a dynamic quote request form developed in PHP.",
    exp3Feature1: "Responsive and modern design",
    exp3Feature2: "Intuitive and smooth navigation",
    exp3Feature3: "Dynamic quote request form",
    exp3Feature4: "Clear presentation of services and products",
    
    // Certifications
    certifications: "Certifications",
    skillsAcquired: "Skills Acquired",
    
    // Footer/Contact
    contactTitle: "Contact Me",
    contactInfo: "Contact Information",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sendBtn: "Send Message",
    allRightsReserved: "All rights reserved.",
    location: "Mourouj 3, Ben Arous, Tunisia",
    messageSent: "Your message has been sent successfully!",
messageError: "An error occurred. Please try again later.",
sending: "Sending...",
// Certifications
  downloadCertificate: "Download certificate",
  certOpenSuccess: "Opening certificate {title}...",
  certNotAvailable: "Certificate {id} is not yet available.",
  certOpenAttempt: "Attempting to open certificate {title}...",
  
  // CCNA 1
  cert1Date: "June 2024",
  cert1Title: "CCNA 1: Introduction to Networks",
  cert1Source: "Cisco Networking Academy",
  cert1Skill1: "OSI Model",
  cert1Skill2: "TCP/IP",
  cert1Skill3: "IP Addressing",
  cert1Skill4: "Ethernet",
  
  // CCNA 2
  cert2Date: "Sept 2024",
  cert2Title: "CCNA 2: Switching and Routing",
  cert2Source: "Cisco Networking Academy",
  cert2Skill1: "VLAN",
  cert2Skill2: "STP",
  cert2Skill3: "Static Routing",
  cert2Skill4: "RIP",
  
  // CCNA 3
  cert3Date: "Dec 2024",
  cert3Title: "CCNA 3: Enterprise Networks",
  cert3Source: "Cisco Networking Academy",
  cert3Skill1: "OSPF",
  cert3Skill2: "EIGRP",
  cert3Skill3: "ACL",
  cert3Skill4: "NAT/PAT",
  
  // AWS Cloud
  cert4Date: "March 2024",
  cert4Title: "Introduction to Cloud",
  cert4Source: "AWS Academy",
  cert4Skill1: "EC2",
  cert4Skill2: "S3",
  cert4Skill3: "VPC",
  cert4Skill4: "IAM",
  cert4Skill5: "CloudWatch",
  
  // AWS ML
  cert5Date: "April 2024",
  cert5Title: "Machine Learning Foundations",
  cert5Source: "AWS Academy",
  cert5Skill1: "SageMaker",
  cert5Skill2: "Deep Learning",
  cert5Skill3: "NLP",
  cert5Skill4: "Computer Vision",
  
  // Angular
  cert6Date: "Jan 2024",
  cert6Title: "Angular Training - 24h",
  cert6Source: "CrocoCoder Academy",
  cert6Skill1: "Components",
  cert6Skill2: "Services",
  cert6Skill3: "Routing",
  cert6Skill4: "RxJS",
  cert6Skill5: "TypeScript",


  },
  ar: {
    // Header
    name: "وئام الهمامي",
    about: "حولي",
    education: "التعليم",
    experience: "الخبرة",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "اتصل بي",
    downloadCV: "تحميل السيرة الذاتية",
    
    // Hero
    engineerTitle: "مهندسة برمجيات",
    heroDescription: "أبتكر حلولًا رقمية عصرية تجمع بين الدقّة التقنية والإبداع. أصمّم وأطوّر تطبيقات بتركيز على تجربة المستخدم.",
    contactMe: "اتصل بي",
    viewProjects: "عرض المشاريع",
    
    // About
    aboutMe: "حولي",
    profile: "الملف الشخصي",
    profileDesc:"حاصلة على شهادة في هندسة الحاسوب، اختصاص التقنيات الحديثة والأمن، أمتلك تكوينًا متينًا يشمل أنظمة الحاسوب، الشبكات، وتطوير البرمجيات. مكّنني مساري الأكاديمي وتجربتي العملية من اكتساب رؤية شاملة لأنظمة المعلومات، تمتد من تصميم التطبيقات إلى فهم متطلبات الأداء والموثوقية. أتميز بالجدية والانضباط والدافعية، وأعتمد على كفاءاتي التقنية لتقديم مساهمة فعلية في المشاريع المعلوماتية.",
    training: "التعليم",
    languages: "اللغات",
    associativeLife: "الحياة الجمعوية",
    
    // Education
    edu1Date: "2022 – 2025",
    edu1Title: "مهندس في علوم الحاسوب",
    edu1School: "المدرسة الوطنية العليا للمهندسين بتونس (ENSIT)",
    edu1Spec: "تخصص في التقنيات الجديدة والأمان",
    edu2Date: "2020 – 2022",
    edu2Title: "الدورة التحضيرية",
    edu2School: "المعهد التحضيري للدراسات الهندسية ببنزرت (IPEIB)",
    edu2Spec: "رياضيات/فيزياء",
    edu3Date: "2020",
    edu3Title: "بكالوريا رياضيات",
    edu3School: "ثانوية خير الدين باشا",
    
    // Languages Section
    arabicLang: "العربية",
    frenchLang: "الفرنسية",
    englishLang: "الإنجليزية",
    nativeLevel: "اللغة الأم",
    intermediateLevel: "متوسط",
    
    // Associative Life
    assoc1Title: "فرع طلاب IEEE ENSIT",
    assoc1Desc: "عضو نشط مع المشاركة في تنظيم TSYP 11 (2023). شهادات تقدير واعتراف.",
    assoc2Title: "SIT 2022",
    assoc2Desc: "المشاركة في المنتدى مع مساهمة معترف بها. شهادة إنجاز.",
    assoc3Title: "نادي GEEKS ENSIT",
    assoc3Desc: "عضو نشط يشارك في أنشطة التدريب والفعاليات التقنية.",
    
    // Skills
    programmingLanguages: "لغات البرمجة",
    frontendDev: "تطوير الواجهة الأمامية",
    backendFrameworks: "إطارات العمل الخلفية",
    mobileDev: "تطوير التطبيقات المحمولة",
    databases: "قواعد البيانات",
    toolsEnv: "الأدوات والبيئات",
    
    // Projects
    academicProjects: "المشاريع الأكاديمية",
    seeMore: "اقرأ المزيد",
    seeLess: "اقرأ أقل",
    seeMoreProjects: "عرض المزيد من المشاريع",
    seeLessProjects: "عرض أقل من المشاريع",
    
    // Project 1
    proj1Title: "خوذة ذكية بإنترنت الأشياء",
    proj1Date: "نوفمبر - ديسمبر 2024",
    proj1Desc: "تطوير خوذة ذكية بإنترنت الأشياء مجهزة بأجهزة استشعار لمراقبة درجة الحرارة والرطوبة والغازات السامة. دمج التنبيهات الصوتية والمرئية والإشعارات المحمولة عبر Flutter ووحدة Bluetooth.",
    
    // Project 2
    proj2Title: "تطبيق تعليم إلكتروني للمكفوفين",
    proj2Date: "يناير - أبريل 2024",
    proj2Desc: "تطبيق محمول للتعلم الإلكتروني للأشخاص ضعاف البصر، يدمج تحويل النص إلى كلام والتنقل باللمس لتحسين إمكانية الوصول.",
    
    // Project 3
    proj3Title: "تطبيق ويب للتبرعات المدرسية",
    proj3Date: "يناير - أبريل 2024",
    proj3Desc: "مشروع IEEE TSYP - تطوير تطبيق ويب يتيح للمستخدمين التبرع لدعم المدارس المحرومة.",
    
    // Project 4
    proj4Title: "BeTrendy - منصة تجارة إلكترونية محمولة",
    proj4Date: "يناير - أبريل 2024",
    proj4Desc: "تطبيق تجارة إلكترونية محمول كامل مع Ionic و Angular. إدارة سلة التسوق، الدفع الآمن، وتتبع التسليم في الوقت الفعلي.",
    
    // Project 5
    proj5Title: "eBiblio - نظام إدارة المكتبات",
    proj5Date: "نوفمبر - ديسمبر 2023",
    proj5Desc: "تطبيق JavaFX لإدارة المكتبات مع MySQL. يسمح بإدارة الكتب والمستخدمين والقروض.",
    
    // Project 6
    proj6Title: "نظام إدارة مكتب محاماة",
    proj6Date: "يناير - أبريل 2023",
    proj6Desc: "تطبيق ويب حديث لإدارة العملاء والملفات والمواعيد والفواتير في مكتب محاماة.",
    
    // Experience
    seeDetails: "عرض التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    miniProjects: "المشاريع الصغيرة المنجزة:",
    keyFeatures: "الميزات الرئيسية:",
    achievements: "الإنجازات:",
    toolsUsed: "الأدوات المستخدمة:",
    
    // Experience 1 - DECADE
    exp1Date: "فبراير - مايو 2025",
    exp1Title: "DECADE - مشروع التخرج",
    exp1Subtitle: "إعادة تصميم مسار الدفع لموقع التجارة الإلكترونية",
    exp1Desc: "يتألف هذا المشروع من إعادة تصميم مسار الدفع لموقع التجارة الإلكترونية، بما في ذلك صفحات التسليم وتحديث الحساب، لتحسين الأداء وقابلية الصيانة وتجربة المستخدم. تم ترحيل الواجهة الأمامية من TWIG إلى Next.js بتصميم متجاوب. تعتمد الواجهة الخلفية على بنية معيارية مع واجهات برمجة تطبيقات REST في PHP، مما يضمن فصلاً واضحاً بين الواجهة الأمامية والخلفية.",
    exp1Mini1Title: "موقع تجارة إلكترونية React.js",
    exp1Mini1Desc: "إنشاء موقع تجارة إلكترونية مع React.js، يعتمد على واجهات برمجة التطبيقات لإدارة المنتجات وسلة التسوق. كان الهدف هو إتقان عمليات الواجهة الأمامية المنفصلة.",
    exp1Mini2Title: "موقع تجارة إلكترونية Next.js (SSR/CSR)",
    exp1Mini2Desc: "تطوير موقع تجارة إلكترونية ثانٍ مع Next.js يدمج العرض من جانب الخادم (SSR) والعرض من جانب العميل (CSR)، بالتفاعل مع واجهات برمجة التطبيقات لأداء أفضل.",
    
    // Experience 2 - ConvergeINNOV
    exp2Date: "يونيو - أغسطس 2024",
    exp2Title: "ConvergeINNOV - مطور Full Stack",
    exp2Subtitle: "تدريب تقني",
    exp2Desc: "تصميم وتطوير تطبيق محمول مخصص لإدارة الفنادق، يتيح إدارة الحجوزات وإدارة الغرف. التطوير باستخدام Flutter لواجهة متعددة المنصات سلسة وحديثة، واستخدام Firebase لإدارة البيانات في الوقت الفعلي والمصادقة.",
    exp2Feature1: "إدارة الحجوزات في الوقت الفعلي",
    exp2Feature2: "إدارة كاملة للغرف والتوافر",
    exp2Feature3: "نظام مصادقة آمن",
    exp2Feature4: "واجهة متعددة المنصات (iOS/Android)",
    
    // Experience 3 - Fortis Soft
    exp3Date: "يونيو - يوليو 2023",
    exp3Title: "Fortis Soft - مطور واجهة أمامية",
    exp3Subtitle: "تدريب عامل",
    exp3Desc: "تطوير موقع واجهة عرض يقدم خدمات ومنتجات الشركة، مع تنقل بديهي. تنفيذ الواجهة الأمامية بـ HTML و CSS و JavaScript، مع نموذج طلب عرض أسعار ديناميكي تم تطويره بـ PHP.",
    exp3Feature1: "تصميم متجاوب وحديث",
    exp3Feature2: "تنقل بديهي وسلس",
    exp3Feature3: "نموذج طلب عرض أسعار ديناميكي",
    exp3Feature4: "عرض واضح للخدمات والمنتجات",
    
    // Certifications
    certifications: "الشهادات",
    skillsAcquired: "المهارات المكتسبة",
    
    // Footer/Contact
    contactTitle: "اتصل بي",
    contactInfo: "معلومات الاتصال",
    sendMessage: "إرسال رسالة",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    subject: "الموضوع",
    yourMessage: "رسالتك",
    sendBtn: "إرسال الرسالة",
    allRightsReserved: "جميع الحقوق محفوظة.",
    location: "المروج 3، بن عروس، تونس",
    messageSent: "تم إرسال رسالتك بنجاح!",
messageError: "حدث خطأ. يرجى المحاولة لاحقاً.",
sending: "جارٍ الإرسال...",
// Certifications
  downloadCertificate: "تحميل الشهادة",
  certOpenSuccess: "جارٍ فتح الشهادة {title}...",
  certNotAvailable: "الشهادة {id} غير متوفرة بعد.",
  certOpenAttempt: "محاولة فتح الشهادة {title}...",
  
  // CCNA 1
  cert1Date: "جوان 2024",
  cert1Title: "CCNA 1: مقدمة في الشبكات",
  cert1Source: "أكاديمية سيسكو للشبكات",
  cert1Skill1: "نموذج OSI",
  cert1Skill2: "TCP/IP",
  cert1Skill3: "عنونة IP",
  cert1Skill4: "إيثرنت",
  
  // CCNA 2
  cert2Date: "سبتمبر 2024",
  cert2Title: "CCNA 2: التبديل والتوجيه",
  cert2Source: "أكاديمية سيسكو للشبكات",
  cert2Skill1: "VLAN",
  cert2Skill2: "STP",
  cert2Skill3: "التوجيه الثابت",
  cert2Skill4: "RIP",
  
  // CCNA 3
  cert3Date: "ديسمبر 2024",
  cert3Title: "CCNA 3: شبكات المؤسسات",
  cert3Source: "أكاديمية سيسكو للشبكات",
  cert3Skill1: "OSPF",
  cert3Skill2: "EIGRP",
  cert3Skill3: "ACL",
  cert3Skill4: "NAT/PAT",
  
  // AWS Cloud
  cert4Date: "مارس 2024",
  cert4Title: "مقدمة في السحابة",
  cert4Source: "أكاديمية AWS",
  cert4Skill1: "EC2",
  cert4Skill2: "S3",
  cert4Skill3: "VPC",
  cert4Skill4: "IAM",
  cert4Skill5: "CloudWatch",
  
  // AWS ML
  cert5Date: "أبريل 2024",
  cert5Title: "أساسيات التعلم الآلي",
  cert5Source: "أكاديمية AWS",
  cert5Skill1: "SageMaker",
  cert5Skill2: "التعلم العميق",
  cert5Skill3: "معالجة اللغة الطبيعية",
  cert5Skill4: "رؤية الحاسوب",
  
  // Angular
  cert6Date: "يناير 2024",
  cert6Title: "تدريب Angular - 24 ساعة",
  cert6Source: "أكاديمية CrocoCoder",
  cert6Skill1: "المكونات",
  cert6Skill2: "الخدمات",
  cert6Skill3: "التوجيه",
  cert6Skill4: "RxJS",
  cert6Skill5: "TypeScript",

  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language | null;
      return savedLang || "fr";
    }
    return "fr";
  });

  useEffect(() => {
    if (language === "ar") {
      document.body.style.direction = "rtl";
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.body.style.direction = "ltr";
      document.documentElement.setAttribute("lang", language);
    }
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}