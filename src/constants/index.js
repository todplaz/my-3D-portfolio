import { ericsson, sonel, homework, weatherland, shoppyland, nynecorp } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    portfolio,
    shoppylandsvg,
    weatherlandsvg,
    homeworksvg
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Développeur Junior front-end React",
        company_name: "Nyne Corp – Cergy France",
        icon: nynecorp,
        iconBg: "#1289e7bd",
        date: "Juillet 2022 – Novembre 2023",
        points: [
            "• Aide au développement d’interfaces utilisateur pour des applications web utilisant React.js.",
            "• Collaboration avec l’équipe de développement pour diagnostiquer et résoudre les problèmes présents.",
            "• Participer aux revues de code, en fournissant des commentaires constructifs pour améliorer la qualité du code.",
            "• Aide à la maintenance et à la mise à jour des applications web existantes."
        ],
    },
    {
        title: "Application e-commerce (Next.js – React.js – Prisma – PostgresSQL – Zustand - Tailwind )",
        company_name: "Projet personnel",
        icon: shoppyland,
        iconBg: "#fbc3bc",
        date: "Juin 2023 – Decembre 2023",
        points: [
            "• Développement d’un site e-commerce responsive utilisant React.js, présentant des produits, un panier d’achat, la gestion de panier et l’authentification des utilisateurs.",
            "• Intégration avec une API RESTful pour récupérer les données produit.",
            "• Utilisation de Zustand pour la gestion des states et amélioration de l’expérience utilisateur en optimisant les temps de chargement.",
            "• Mise en oeuvre de fonctionnalités telles que le filtrage des produits, le tri et les mises à jours dynamiques à l’aide des composants React et de la gestion des states."
        ],
    },
    {
        title: "Application de prévisions météorologiques (HTML – Tailwind – Javascript - API OpenWeather )",
        company_name: "Projet personnel",
        icon: weatherland,
        iconBg: "#f5fcfccc",
        date: "Juin 2023 – Decembre 2023",
        points: [
            "• Création d’une application de prévisions météorologiques à l’aide de vanilla javascript qui récupère les données d’une API météo publique (OpenWeather) et affiche les prévisions météo en temps réel en fonction de l’entrée de l’utilisateur.",
            "• Gestion et intégration d’API tierces pour les données météorologiques.",
            "• Amélioration des performances du site web en optimisant les images grâce à lazy loading."
        ],
    },
    {
        title: "Application de gestion des tâches - Kanban (React.js, Firebase, Drag & Drop, MUI v5, Zustand)",
        company_name: "Projet personnel",
        icon: homework,
        iconBg: "#ecf527cc",
        date: "Juin 2023 – Decembre 2023",
        points: [
            "• Création d’une application de gestion des tâches utilisant React.js et Zustand pour gérer et suivre les tâches quotidiennes.",
            "• Mise en place de l’authentification et de l’autorisation à l’aide de JWT pour un accès sécurisé.",
            "• Conception et développement de l’application, permettant aux utilisateurs de créer, modifier et supprimer des taches de leur board.",
            "• Mise en place de fonctionnalités d’authentification et d’autorisation pour le contrôle d’accès des utilisateurs."
        ],
    },
    {
        title: "Technicien Réseaux Informatiques",
        company_name: "ERICSSON – Tallinn Estonie",
        icon: ericsson,
        iconBg: "#a2d2ff",
        date: "Octobre 2015 - Mars 2019",
        points: [
            "• Montage/assemblage des équipements de télécommunication.",
            "• Effectuer des audits de sécurité et des évaluations de vulnérabilité réguliers pour assurer la conformité aux normes de l’entreprise et à sa politique.",
            "• Gestion des processus d’approvisionnement en IT, en veillant à la rentabilité et à l’alignement avec les besoins organisationnels.",
            "• Effectuer des tests et des validations approfondis pour assurer une transition en douceur et une perturbation minimale des opérations quotidiennes."
        ],
    },
    {
        title: "Technicien Réseaux Informatiques",
        company_name: "AES SONEL – Douala Cameroun",
        icon: sonel,
        iconBg: "#a2d2ff",
        date: "Octobre 2011 - Avril 2013",
        points: [
            "• Mise en place, organisation et gestion des incidents réseaux ainsi que l ouverture de paquets sur les plateformes NAGIOS et SOLARWINDS .",
            "• Fournir un soutien technique aux employés, résoudre les problèmes matériels et logiciels et mettre en oeuvre des solutions pour optimiser la productivité.",
            "• Configurer et administrer les périphériques réseaux, garantissant un flux de données sécurisé et efficace.",
            "• Mise en place de mesures de sécurités informatiques pour protéger les données et les systèmes, en assurant la conformité aux normes et réglementations de l’entreprise."
        ],
    },
    {
        title: "Technicien en maintenance informatique",
        company_name: "AES SONEL – Douala Cameroun.",
        icon: sonel,
        iconBg: "#a2d2ff",
        date: "Aout 2010 - Janvier 2011",
        points: [
            "• Fournir un support d’assistance informatique, résoudre les problèmes matériels et logiciels.",
            "• Installer et configurer des systèmes d’exploitation, des applications logicielles et des périphériques réseau.",
            "• Tenir à jour l’inventaire des actifs informatiques et gérer l’approvisionnement en équipements.",
            "• Aide à la planification et à l’exécution des mises à niveau et des migrations du système, minimisant ainsi les temps d’arrêt et les perturbations."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/todplaz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alex-balomog-b6a683222/',
    }
];

export const projects = [
    {
        iconUrl: weatherlandsvg,
        theme: 'btn-back-red',
        name: 'Application de prévisions météorologiques',
        description: "L’application comporte des fonctionnalités qui fournissent des informations sur le temps actuel et prévu, des prévisions météorologiques sur 10 jours,des précipitations prévues,de la qualité de l'air, direction du vent et bien encore",
        link: 'https://github.com/todplaz/weatherland',
    },
    {
        iconUrl: shoppylandsvg,
        theme: 'btn-back-green',
        name: "Application e-commerce (Next.js – React.js – Prisma – PostgresSQL – Zustand - Tailwind )",
        description: "L'application de vente en ligne shoppify vous permettra de faire vos achats en ligne, de conserver vos achats dans votre panier après vous etre préalablement identifié, de valider vos commandes et de payer de facon securisé via la plateforme stripe.",
        link: 'https://github.com/todplaz/shoppylandnext',
    },
    {
        iconUrl: homeworksvg,
        theme: 'btn-back-blue',
        name: 'Application de gestion des tâches - Kanban',
        description: "L'application de gestion de tache vous aidera a planifier vos taches de facon simple afin de rester toujours a la page de toutes vos activités, peu importe leur nature.",
        link: 'https://github.com/todplaz/homeboard',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: '3D-Portfolio',
        description: "Je vous présente un de mes portfolios en ligne, celui ci étant en 3D pour une immersion rare et différente de ce que vous avez l'habitude de consulter.",
        link: 'https://github.com/todplaz/my-3D-portfolio',
    },
];