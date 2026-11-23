export type ProjectCategory =
  | "AI & ML"
  | "Web"
  | "Systems"
  | "Games"
  | "Security"
  | "Data";

export type CoverKind =
  | "assistant"
  | "dashboard"
  | "drop"
  | "chess"
  | "crypto"
  | "terminal"
  | "arcade"
  | "lander"
  | "shooter"
  | "hunter"
  | "raycast"
  | "todo"
  | "train"
  | "network"
  | "ftp"
  | "plazza"
  | "circuit";

export type ProjectMetric = {
  value: string;
  label: string;
};

export function metricsSentence(metrics: ProjectMetric[]): string {
  return (
    metrics
      .map((metric) => {
        const label =
          metric.label.charAt(0).toLowerCase() + metric.label.slice(1);
        return `${metric.value} ${label}`;
      })
      .join(", ") + "."
  );
}

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  year: string;
  categories: ProjectCategory[];
  description: string;
  stack: string[];
  cover: CoverKind;
  image?: string;
  caseStudy?: string;
  live?: string;
  repo?: string;
  repoNote?: string;
  featured?: boolean;
  school?: boolean;
  metrics?: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: "sensai",
    title: "Sensai",
    tagline: "A local-first AI assistant you can audit.",
    role: "AI Engineering, Team of 4",
    year: "2026",
    categories: ["AI & ML", "Web"],
    description:
      "A local-first assistant built on Ollama with streaming chat, schema-validated JSON output, guarded file access, MCP tools, web search and a FastAPI web console.",
    stack: ["Python", "FastAPI", "Ollama", "SQLite", "MCP", "JSON Schema"],
    cover: "assistant",
    caseStudy: "/projects/sensai",
    repo: "https://github.com/khushanmz05/Sensai",
    featured: true,
    school: true,
    metrics: [
      { value: "28", label: "features scoped" },
      { value: "56", label: "user stories" },
      { value: "Local", label: "model execution" },
    ],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    tagline: "A personal workspace for the services you actually use.",
    role: "Full-stack Developer, Team of 2",
    year: "2026",
    categories: ["Web"],
    description:
      "A self-hosted dashboard for weather, GitHub activity and RSS feeds, with accounts, OAuth, per-user widgets, independent refresh timers and a Docker deployment.",
    stack: ["Node.js", "SQLite", "OAuth", "Docker", "Playwright", "Vanilla JS"],
    cover: "dashboard",
    live: "https://gayboyz.lol",
    caseStudy: "/projects/dashboard",
    repo: "https://github.com/khushanmz05/Dashboard",
    featured: true,
    school: true,
    metrics: [
      { value: "9", label: "widget types" },
      { value: "3", label: "integrated services" },
      { value: "100", label: "Lighthouse score" },
    ],
  },
  {
    slug: "livedrop",
    title: "Livedrop",
    tagline: "A real-time platform for timed product drops.",
    role: "Full-stack Developer, Solo",
    year: "2025",
    categories: ["Web"],
    description:
      "A real-time product showcase with timed drops, countdown interactions and component-driven state, backed by Firebase and Firestore and built with Next.js, TypeScript and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
    cover: "drop",
    live: "https://livedrop.vercel.app",
    repo: "https://github.com/khushanmz05/livedrop",
    featured: true,
  },
  {
    slug: "zappy",
    title: "Zappy",
    tagline: "A network game where AI clients compete to survive.",
    role: "GUI Developer, Team of 4",
    year: "2026",
    categories: ["Games", "Systems"],
    description:
      "A network-driven game where AI clients compete to survive and grow on a shared map. I built the real-time GUI in C++ with SFML, rendering live game state received from the C server over a custom TCP protocol.",
    stack: ["C", "C++", "SFML", "TCP/IP", "Networking"],
    cover: "network",
    image: "/zappy/zappy1.png",
    repo: "https://github.com/khushanmz05/Zappy.git",
    caseStudy: "/projects/zappy",
    school: true,
  },
  {
    slug: "mytorch",
    title: "MyTorch",
    tagline: "A neural network and chess analyzer written from scratch.",
    role: "Machine Learning, Team of 2",
    year: "2026",
    categories: ["AI & ML"],
    description:
      "A dependency-free neural-network library with dense layers, dropout, Adam, early stopping and a chess-position classifier trained on more than 700,000 positions.",
    stack: ["Python", "NumPy", "Neural Networks", "Chess", "Benchmarking"],
    cover: "chess",
    caseStudy: "/projects/mytorch",
    repo: "https://github.com/khushanmz05/MyTorch",
    featured: true,
    school: true,
    metrics: [
      { value: "85.43%", label: "held-out accuracy" },
      { value: "143k", label: "test positions" },
      { value: "0.0029ms", label: "per prediction" },
    ],
  },
  {
    slug: "raytracer",
    title: "Raytracer",
    tagline: "A C++ engine that renders light, shadow and reflection.",
    role: "Parser Developer, Team Project",
    year: "2025",
    categories: ["Systems"],
    description:
      "A ray-tracing engine that generates realistic images by simulating the inverse path of light. I worked on the scene parser, converting scene-description files into structured data for the rendering pipeline.",
    stack: ["C++", "Scene Parsing", "OOP", "3D Rendering"],
    cover: "raycast",
    image: "/raytracer/images.jpg",
    repo: "https://github.com/khushanmz05/Raytracer.git",
    caseStudy: "/projects/raytracer",
    school: true,
  },
  {
    slug: "mypgp",
    title: "MyPGP",
    tagline: "A cipher workbench for building reversible pipelines.",
    role: "Cryptography, Team of 2",
    year: "2026",
    categories: ["Security"],
    description:
      "A dependency-free Python implementation of XOR, AES, RSA and hybrid PGP modes, paired with a local browser workbench for composing and reversing cipher pipelines.",
    stack: ["Python", "AES", "RSA", "Cryptography", "HTML"],
    cover: "crypto",
    repo: "https://github.com/khushanmz05/MyPGP",
    school: true,
  },
  {
    slug: "arcade",
    title: "Arcade",
    tagline: "A game platform that swaps graphics engines at runtime.",
    role: "C++ Developer, Team Project",
    year: "2025",
    categories: ["Games", "Systems"],
    description:
      "A C++ arcade platform that loads game and display libraries as shared objects through dlopen, with SDL2, SFML and ncurses renderers running Snake and Pac-Man.",
    stack: ["C++", "dlopen", "SDL2", "SFML", "ncurses"],
    cover: "arcade",
    school: true,
  },
  {
    slug: "startrek",
    title: "StartTrek",
    tagline: "A DQN agent learning to land a spacecraft.",
    role: "Reinforcement Learning, Team Project",
    year: "2025",
    categories: ["AI & ML"],
    description:
      "A Deep Q-Network agent for Gymnasium's LunarLander, using experience replay, a target network and epsilon-greedy exploration to learn a stable landing policy.",
    stack: ["Python", "PyTorch", "Gymnasium", "DQN", "Reinforcement Learning"],
    cover: "lander",
    school: true,
    metrics: [
      { value: "-168", label: "mean reward" },
      { value: "100", label: "evaluation episodes" },
      { value: "8", label: "state dimensions" },
    ],
  },
  {
    slug: "run-and-gun",
    title: "Run & Gun",
    tagline: "A wave-based shooter with AI-generated levels.",
    role: "Python / Game Development",
    year: "2025",
    categories: ["Games"],
    description:
      "A fast-paced 2D top-down shooter built with Python and Pygame, featuring AI-generated maps and mission briefings, four enemy types, four weapons, pickups and a two-phase boss.",
    stack: ["Python", "Pygame", "Groq API", "NumPy", "Game Logic"],
    cover: "shooter",
    image: "/topdownshooter/topdownshooter.png",
    repo: "https://github.com/khushanmz05/Free-project",
  },
  {
    slug: "myhunter",
    title: "MyHunter",
    tagline: "A pixel-art duck hunt built in C with CSFML.",
    role: "C / Graphics, Solo",
    year: "2024",
    categories: ["Games"],
    description:
      "A recreation of the classic duck hunt with animated sprites, hit detection, score tracking and a timed round loop, built on CSFML.",
    stack: ["C", "CSFML", "Sprites", "Game Loop"],
    cover: "hunter",
    image: "/duck_hunt.jpg",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "minishell",
    title: "Minishell",
    tagline: "A Unix shell built from scratch in C.",
    role: "C / Systems Programming, Team of 2",
    year: "2025",
    categories: ["Systems"],
    description:
      "A POSIX-style shell with command parsing, pipes, redirections, environment expansion, built-ins and process management, built without a shell library.",
    stack: ["C", "POSIX", "Pipes", "Process Control", "Parsing"],
    cover: "terminal",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "wolf3d",
    title: "Wolf3D",
    tagline: "A first-person raycasting engine inspired by Wolfenstein 3D.",
    role: "C / Graphics, Team Project",
    year: "2025",
    categories: ["Games", "Systems"],
    description:
      "A first-person raycasting engine with textured walls, sprite rendering, collision handling and a minimap, built from scratch with CSFML.",
    stack: ["C", "CSFML", "Raycasting", "Game Engine"],
    cover: "raycast",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "epytodo",
    title: "EpyTodo",
    tagline: "A task API and web client built end to end.",
    role: "Full-stack Developer, Team Project",
    year: "2025",
    categories: ["Web"],
    description:
      "A Todoist-style task manager with a REST API, user authentication, task CRUD and a browser client, connected to a relational database.",
    stack: ["Node.js", "Express", "MySQL", "REST", "JavaScript"],
    cover: "todo",
    image: "/todo.png",
    school: true,
  },
  {
    slug: "tardis",
    title: "Tardis",
    tagline: "Making sense of Spain's train network.",
    role: "Data Analysis, Team Project",
    year: "2025",
    categories: ["Data", "AI & ML"],
    description:
      "A data-analysis project exploring Spanish train schedules and station data, turning raw datasets into cleaned tables, route insights and visualisations.",
    stack: ["Python", "Pandas", "Data Analysis", "Visualisation"],
    cover: "train",
    image: "/train.jpg",
    school: true,
  },
  {
    slug: "myteams",
    title: "MyTeams",
    tagline: "A team messaging server and client over TCP.",
    role: "C++ / Networking, Team Project",
    year: "2025",
    categories: ["Systems"],
    description:
      "A client-server messaging platform with teams, channels, threads and direct messages, built around a custom binary protocol and event subscriptions.",
    stack: ["C++", "TCP/IP", "Sockets", "Protocol Design"],
    cover: "network",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "myftp",
    title: "MyFTP",
    tagline: "An FTP server that speaks the real protocol.",
    role: "C / Networking, Solo",
    year: "2025",
    categories: ["Systems"],
    description:
      "An RFC 959-inspired FTP server supporting authentication, directory navigation, passive and active data transfers, listing, upload and download.",
    stack: ["C", "FTP", "Sockets", "RFC 959"],
    cover: "ftp",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "plazza",
    title: "Plazza",
    tagline: "A multi-process pizza kitchen under load.",
    role: "C++ / Concurrency, Team Project",
    year: "2025",
    categories: ["Systems"],
    description:
      "A concurrent restaurant simulator with a reception process, kitchen processes, thread pools, IPC messaging and ingredient restocking.",
    stack: ["C++", "Threads", "IPC", "Process Management"],
    cover: "plazza",
    repoNote: "Epitech repository (private)",
    school: true,
  },
  {
    slug: "tekspice",
    title: "TekSpice",
    tagline: "A digital circuit simulator built from logic gates.",
    role: "C++ / OOP, Team Project",
    year: "2025",
    categories: ["Systems"],
    description:
      "A circuit simulator that parses .nts netlists and simulates inputs, clocks, gates and chipsets through an interactive command shell.",
    stack: ["C++", "OOP", "Parsing", "Simulation"],
    cover: "circuit",
    repoNote: "Epitech repository (private)",
    school: true,
  },
];

export const categories: Array<ProjectCategory | "All"> = [
  "All",
  "AI & ML",
  "Web",
  "Systems",
  "Games",
  "Security",
  "Data",
];

export const featuredProjects = ["sensai", "dashboard", "mytorch", "livedrop"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
