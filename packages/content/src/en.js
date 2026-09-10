export default {
  locale: "en",

  meta: {
    title: "Dave — Fullstack Developer",
    description:
      "Dave, backend-leaning fullstack developer: architecture, APIs, databases and real-time systems."
  },

  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    architecture: "Architecture",
    contact: "Contact",
    cta: "Contact me"
  },

  hero: {
    eyebrow: "Fullstack Developer",
    name: "Dave",
    role: "Fullstack Developer, backend-leaning",
    tagline: "I build web applications and backend systems that hold up.",
    desc: "Fullstack, with a real preference for backend work: architecture, databases, APIs and real-time systems.",
    viewWork: "View my work",
    contactMe: "Contact me"
  },

  about: {
    kicker: "About",
    title: "I care more about what's under the interface than the interface itself",
    paragraphs: [
      "I'm a fullstack developer with a fairly clear preference for the backend: how a system is built, how it holds up over time, and what happens when load increases.",
      "I move between different ecosystems depending on what a project needs — frontend, backend, databases, containerization — without locking myself into a single tool.",
      "What I really care about is understanding how things work underneath: concurrency, how data flows, the trade-offs behind an architecture decision. I'd rather have a system that's simple and understandable than one that looks impressive but is hard to maintain."
    ]
  },

  skills: {
    kicker: "Skills",
    title: "What I work with day to day",
    categories: [
      {
        name: "Frontend",
        items: ["JavaScript / ES6+", "React", "HTML / CSS", "WebSockets", "IndexedDB"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "Elixir", "Phoenix", "REST API", "GraphQL", "WebSockets"]
      },
      {
        name: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Oracle"]
      },
      {
        name: "Tools & infrastructure",
        items: ["Docker", "Docker Compose", "Git / GitHub", "Linux", "PowerShell", "Vim / Neovim"]
      },
      {
        name: "Python",
        items: ["Python", "FastAPI", "SQLAlchemy"]
      }
    ]
  },

  mindset: {
    kicker: "Approach",
    title: "How I approach development",
    lede: "Nothing groundbreaking: understanding the problem, keeping things simple, and paying attention to what the code actually does.",
    cards: [
      {
        num: "01",
        title: "Architecture",
        text: "Keep systems understandable and maintainable, even as they grow."
      },
      {
        num: "02",
        title: "Backend",
        text: "Build reliable APIs and services with clear responsibilities."
      },
      {
        num: "03",
        title: "Data",
        text: "Choose the right data model and understand how information flows through the system."
      },
      {
        num: "04",
        title: "Performance",
        text: "Think about concurrency, caching, queries and where the system tends to slow down."
      }
    ]
  },

  projects: {
    kicker: "Projects",
    title: "Built as real products, not exercises",
    items: [
      {
        name: "Marketplace",
        summary:
          "A local-market platform where sellers list products and customers place orders — accounts, orders, payment and delivery, handled end to end.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
        problem: "Local sellers want to reach nearby customers without the overhead of a large marketplace.",
        solution: "A focused marketplace: listings, ordering, seller/buyer messaging and delivery tracking.",
        architecture: "React frontend, Node/Express API, MongoDB for catalog and orders, Redis for sessions and caching, containerized with Docker.",
        focus: "User management, order lifecycle, seller/buyer communication, delivery tracking, response performance.",
        github: "GitHub — link coming soon"
      },
      {
        name: "Real-time application",
        summary:
          "An application built around WebSockets: bidirectional communication, live presence and event-driven updates.",
        stack: ["WebSockets", "Node.js", "Elixir", "Redis"],
        problem: "The usual request/response cycle is too slow for live, multi-user interactions.",
        solution: "A persistent WebSocket layer handling connection state, presence and event broadcasting.",
        architecture: "Backend process supervision for connections, event queues for distribution, Redis pub/sub for broadcasting across instances.",
        focus: "Bidirectional communication, connection lifecycle, concurrency, user presence, behavior under load.",
        github: "GitHub — link coming soon"
      },
      {
        name: "Automation platform",
        summary:
          "A workflow automation tool in the spirit of n8n — chaining tasks, triggers and API calls into modular, asynchronous pipelines.",
        stack: ["Node.js", "REST API", "PostgreSQL", "Docker"],
        problem: "Repetitive multi-step tasks across APIs and services are error-prone to run by hand.",
        solution: "A workflow engine where each step is a modular task connected by triggers and events.",
        architecture: "Modular task runner, event-driven scheduling, asynchronous processing, PostgreSQL for workflow and run history.",
        focus: "Workflow modeling, task execution, API integration, asynchronous processing, modular architecture.",
        github: "GitHub — link coming soon"
      }
    ]
  },

  elixir: {
    kicker: "Systems",
    title: "Exploring concurrency",
    flow: ["Process", "PID", "Message", "Mailbox", "Receive"],
    text: "Elixir changed how I think about software: processes, message passing, immutability and fault-tolerant systems.",
    tags: ["processes", "spawn", "send / receive", "Task", "Agent", "GenServer", "OTP", "pattern matching", "macros"]
  },

  architecture: {
    kicker: "Architecture",
    title: "A system, not just a list of technologies",
    lede: "Click a layer to see how it fits into the whole.",
    placeholder: "Select a layer on the left to see how it fits into the system.",
    nodes: [
      {
        label: "React",
        detail:
          "React handles the UI layer — components, state and rendering — talking to the backend over REST, GraphQL, or a persistent WebSocket connection."
      },
      {
        label: "REST / WebSocket",
        detail:
          "Requests travel either as REST/GraphQL calls for standard operations, or as WebSocket messages for real-time, bidirectional updates."
      },
      {
        label: "Node.js / Elixir",
        detail:
          "Node.js and Elixir handle application logic. Node.js covers most API and service work; Elixir/OTP takes on the concurrency-heavy or fault-tolerant parts."
      },
      {
        label: "Services",
        detail:
          "Business logic is split into services with clear responsibilities — easier to reason about, test and evolve independently."
      },
      {
        label: "Redis",
        detail:
          "Redis handles caching, session state and pub/sub messaging — keeping frequent reads fast and enabling real-time fan-out."
      },
      {
        label: "PostgreSQL / MongoDB",
        detail:
          "PostgreSQL or MongoDB for persistence, chosen per project depending on whether the data is relational or document-shaped."
      }
    ]
  },

  experience: {
    kicker: "Experience",
    title: "Professional experience",
    items: [],
    empty: {
      title: "No professional experience listed here yet",
      text:
        "I haven't worked in a company yet, so rather than inventing a history, here's what matters instead: the projects above show what I can build today, and my development journey shows how I got here.",
      ctaProjects: "View my projects",
      ctaJourney: "View my journey"
    }
  },

  timeline: {
    kicker: "Journey",
    title: "A steady progression, not a straight line",
    steps: ["JavaScript", "Fullstack", "Backend", "Databases", "Docker / Linux", "Elixir / OTP", "Phoenix"]
  },

  contact: {
    kicker: "Contact",
    title: "Let's build something",
    lede: "Have a project, an idea, or a technical problem worth digging into? Reach out.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      note: "This form is a template — wire it up to an email service or a backend to actually receive messages.",
      sent: "Message captured locally — connect this form to an email service or API to actually send it."
    }
  },

  footer: {
    role: "Fullstack Developer",
    copy: "© 2026 Dave"
  }
};
