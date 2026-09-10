export default {
  locale: "fr",

  meta: {
    title: "Dave — Développeur Fullstack",
    description:
      "Dave, développeur fullstack orienté backend : architectures, API, bases de données et systèmes temps réel."
  },

  nav: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expérience",
    architecture: "Architecture",
    contact: "Contact",
    cta: "Me contacter"
  },

  hero: {
    eyebrow: "Développeur Fullstack",
    name: "Dave Bakisa",
    role: "Développeur Fullstack, orienté backend",
    tagline: "Je conçois des applications web et des systèmes backend qui tiennent la route.",
    desc: "Fullstack avec une vraie préférence pour le backend : architecture, bases de données, API et systèmes temps réel.",
    viewWork: "Voir mes projets",
    contactMe: "Me contacter"
  },

  about: {
    kicker: "À propos",
    title: "Ce qui m'intéresse, c'est ce qu'il y a sous l'interface",
    paragraphs: [
      "Je suis développeur fullstack, avec une préférence assez nette pour le backend : comment un système est construit, comment il tient dans le temps, et ce qui se passe quand la charge augmente.",
      "Je passe d'un écosystème à l'autre selon les besoins d'un projet — frontend, backend, bases de données, conteneurisation — sans me limiter à un seul outil.",
      "Ce qui m'intéresse vraiment, c'est comprendre comment les choses fonctionnent en dessous : la gestion de la concurrence, la circulation des données, les compromis d'architecture. Je préfère un système simple et compréhensible à un système impressionnant mais difficile à maintenir."
    ]
  },

  skills: {
    kicker: "Compétences",
    title: "Ce que j'utilise au quotidien",
    categories: [
      {
        name: "Frontend",
        items: ["JavaScript / ES6+", "React", "HTML / CSS", "Photoshop", "Illustrator"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express","Python / FastAPI" ,"Elixir / phoenix","php / Laravel"]
      },
      {
        name: "Bases de données",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "indexedDB"]
      },
      {
        name: "API",
        items: ["REST API", "GraphQL"]
      },
      {
        name: "Outils & infrastructure",
        items: ["Docker", "Git / GitHub", "n8n", "Linux", "PowerShell", "Vscode"]
      }
    ]
  },

  mindset: {
    kicker: "Approche",
    title: "Comment j'aborde le développement",
    lede: "Rien de révolutionnaire : de la compréhension, de la simplicité, et une attention constante à ce que le code fait vraiment.",
    cards: [
      {
        num: "01",
        title: "Architecture",
        text: "Garder des systèmes compréhensibles et maintenables, même quand ils grossissent."
      },
      {
        num: "02",
        title: "Backend",
        text: "Construire des API et des services fiables, avec des responsabilités claires."
      },
      {
        num: "03",
        title: "Données",
        text: "Choisir le bon modèle de données et comprendre comment l'information circule dans le système."
      },
      {
        num: "04",
        title: "Performance",
        text: "Penser à la concurrence, au cache, aux requêtes et aux points de blocage du système."
      }
    ]
  },

  projects: {
    kicker: "Projets",
    title: "Dans le cadre de mon apprentissange, j'ai pu réaliser different projet entre autre",
    items: [
      {
        name: "Backend e-commerce (MVP)",
        summary:
          "J'était chargé d'accompagné un groupe d'étudiant dans leur projet de site e-commerce, mettre en place une plateforme de marché local où un vendeur publie des produits et des clients passent commande — comptes utilisateurs, commandes, livraison",
        stack: ["Node.js", "Express", "MongoDB"],
        problem: "Des vendeurs locaux veulent toucher des clients à proximité sans la lourdeur d'une grosse marketplace.",
        solution: "Un site e-commerce ciblé : annonces, commandes et suivi de livraison.",
        architecture: "API Node/Express, MongoDB pour le catalogue et les commandes",
        focus: "Gestion des utilisateurs, cycle de vie des commandes, suivi de livraison, temps de réponse.",
        github: "Pas de lien"
      },
      {
        name: "Recommendation des films",
        summary: "mettre en place un agent AI pour recommander des filmes a des utilisateurs ",
        stack: ["n8n","mongodb"],
        problem: "Avoir des suggestions des films selon le nombre de vente, en cas d'indisponibilité du film recherché",
        solution: "un agent Bot AI ",
        architecture:"automatisation avec n8n, mongodb pour les films et utilisateurs ",
        focus: "amelioration du prompt pour des meilleurs resultat",
        github: "pas de lien"
      },
      {
        name: "Moteur de recherche",
        summary:"Optimisé la recherche de produit",
        stack: ["Laravel", "Elasticsearch", "Mysql", "Flutter"],
        problem: "Faire en sorte d'avoir des suggestion des produits lors des resultat d'une recherche",
        solution: "Un moteur de recherche avancé",
        architecture:"API Laravel , Mysql pour l'enregitrement des produit puis Elasticsearch pour la recherche, flutter pour l'interface grapique",
        focus: "Traitement des requêtes",
        github: "pas de lien"
      }
    ]
  },

  elixir: {
    kicker: "Systèmes",
    title: "Explorer la concurrence",
    flow: ["Process", "PID", "Message", "Mailbox", "Receive"],
    text: "Elixir m'a fait voir le développement autrement : processus, passage de messages, immuabilité et systèmes tolérants aux pannes.",
    tags: ["processus", "spawn", "send / receive", "Task", "Agent", "GenServer", "OTP", "pattern matching", "macros"]
  },

  architecture: {
    kicker: "Architecture",
    title: "Un système, pas juste une liste de technos",
    lede: "Clique sur une couche pour voir son rôle dans l'ensemble.",
    placeholder: "Sélectionne une couche à gauche pour voir son rôle dans le système.",
    nodes: [
      {
        label: "React",
        detail:
          "React gère l'interface — composants, état et rendu — et communique avec le backend en REST, GraphQL, ou via une connexion WebSocket persistante."
      },
      {
        label: "REST / WebSocket",
        detail:
          "Les requêtes passent soit en REST/GraphQL pour les opérations classiques, soit en WebSocket pour les mises à jour temps réel et bidirectionnelles."
      },
      {
        label: "Node.js / Elixir",
        detail:
          "Node.js et Elixir gèrent la logique applicative. Node.js couvre la plupart des API et services ; Elixir/OTP prend en charge les parties qui demandent de la concurrence ou de la tolérance aux pannes."
      },
      {
        label: "Services",
        detail:
          "La logique métier est découpée en services aux responsabilités claires — plus simples à comprendre, tester et faire évoluer séparément."
      },
      {
        label: "Redis",
        detail:
          "Redis gère le cache, l'état des sessions et la messagerie pub/sub — pour garder les lectures fréquentes rapides et permettre la diffusion temps réel."
      },
      {
        label: "PostgreSQL / MongoDB",
        detail:
          "PostgreSQL ou MongoDB pour la persistance des données, choisis projet par projet selon que les données sont plutôt relationnelles ou orientées document."
      }
    ]
  },

  experience: {
    kicker: "Expérience",
    title: "Expérience professionnelle",
    items: [],
    empty: {
      title: "Pas encore d'expérience professionnelle listée ici",
      text:
        "Je n'ai pas encore travaillé en entreprise, donc plutôt que d'inventer un historique, voici ce qui compte à la place : les projets ci-dessus montrent ce que je sais construire aujourd'hui, et mon parcours de développement montre comment j'en suis arrivé là.",
      ctaProjects: "Voir mes projets",
      ctaJourney: "Voir mon parcours"
    }
  },

  timeline: {
    kicker: "Parcours",
    title: "Une progression régulière, pas une ligne droite",
    steps: ["JavaScript", "Fullstack", "Backend", "Bases de données", "Docker / Linux", "Elixir / OTP", "Phoenix"]
  },

  contact: {
    kicker: "Contact",
    title: "Construisons quelque chose",
    lede: "Un projet, une idée, un problème technique à creuser ? Écris-moi.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
      note: "Ce formulaire est un modèle — à brancher sur un service d'envoi d'email ou un backend pour recevoir réellement les messages.",
      sent: "Message capturé localement — connecte ce formulaire à un service d'email ou une API pour l'envoyer réellement."
    }
  },

  footer: {
    role: "Développeur Fullstack",
    copy: "© 2026 Dave"
  }
};
