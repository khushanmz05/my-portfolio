export type CaseStudySection = {
  label: string;
  title: string;
  body?: string;
  bullets?: string[];
  wide?: boolean;
};

export type CaseStudyFocus = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  label: string;
  summary: string;
  sections: CaseStudySection[];
  focus: CaseStudyFocus[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sensai",
    label: "Local AI, Team of 4",
    summary:
      "A local-first AI assistant with streaming chat, schema-validated JSON, guarded file access, MCP tools, web search and a FastAPI console — all running on models you host yourself.",
    sections: [
    {
      label: "The project",
      title: "An assistant that stays on your machine",
      body: "Sensai started from a simple constraint: useful AI tooling should not require sending every document and question to a vendor. The assistant runs against Ollama locally, streams answers to a CLI or browser, and keeps its own session state in SQLite.",
    },
    {
      label: "The surface area",
      title: "One engine, several ways in",
      body: "A terminal client and a FastAPI web service share the same core chat engine, configuration and storage. The web app adds a chat interface, an observability dashboard, prompt versioning and artifact history without duplicating model logic.",
    },
    {
      label: "My contribution",
      title: "Structured output and the safety layer",
      bullets: [
        "Built schema-validated JSON responses with a bounded correction loop and retry limits.",
        "Worked on opt-in guardrails for input and output filtering, including email and phone redaction.",
        "Integrated MCP tool discovery and approval so only allowlisted tools can run.",
        "Connected live web search results as untrusted evidence, with explicit failure states.",
        "Covered validation and retry boundaries with automated tests.",
      ],
      wide: true,
    },
    {
      label: "How it is built",
      title: "Local models, explicit boundaries",
      body: "The browser never chooses an outbound model host. The server fixes the Ollama URL, validates every tool call, bounds file reads to an approved workspace and requires a separate flag before any file can be created. Search snippets and tool results enter the conversation as evidence, not as instructions.",
    },
    {
      label: "The hard part",
      title: "Making model output trustworthy enough to use",
      body: "Streaming is easy to demo and hard to make dependable. Partial streams, malformed JSON, empty responses and transport errors all needed distinct handling, and only a complete question and answer pair is committed to history. The result is an assistant that fails visibly instead of quietly inventing a successful result.",
    },
  ],
    focus: [
    {
      title: "Local-first by default",
      body: "Models, sessions, artifacts and prompts stay on the machine running the assistant.",
    },
    {
      title: "Schemas over hope",
      body: "Structured responses are validated locally and retried within a bounded budget.",
    },
    {
      title: "Tools with edges",
      body: "File access, MCP calls and search providers are allowlisted, bounded and operator-approved.",
    },
  ],
  },
  {
    slug: "dashboard",
    label: "Full-stack, Team of 2",
    summary:
      "A self-hosted workspace for weather, GitHub activity and RSS feeds, with real accounts, per-user widgets, independent refresh timers and a Docker deployment.",
    sections: [
    {
      label: "The project",
      title: "A dashboard you configure, not one you inherit",
      body: "Dashboard lets each account choose the services it needs and build its own board. Weather, GitHub and RSS are split into nine widget types, and every widget keeps its own configuration and refresh interval.",
    },
    {
      label: "My contribution",
      title: "The frontend contract",
      bullets: [
        "Connected the browser UI to the authentication, subscription and widget APIs.",
        "Built widget creation, editing, deletion and ordering, including keyboard-accessible reordering.",
        "Implemented independent refresh timers with abortable requests and a 15-second timeout.",
        "Designed loading, empty, error and stale-data states with clear recovery actions.",
        "Worked through responsive layouts, visible focus and labelled controls for accessibility.",
      ],
      wide: true,
    },
    {
      label: "Architecture",
      title: "Small stack, clear responsibilities",
      body: "The browser owns views, forms and refresh schedules. A Node server owns accounts, sessions, OAuth, subscriptions and external provider calls. SQLite stores users, service credentials, widgets and order. Docker Compose packages the app and database behind Nginx.",
    },
    {
      label: "The hard part",
      title: "Failure is a first-class state",
      body: "Widgets depend on services outside our control. A failed refresh keeps the last valid result and labels it as stale instead of blanking the card. An expired session closes dialogs, cancels timers and returns to sign-in. A GitHub authorization error offers reconnection rather than silently retrying forever.",
    },
  ],
    focus: [
    {
      title: "Real authentication",
      body: "Password accounts, confirmation codes, cookie sessions and GitHub OAuth with linking safeguards.",
    },
    {
      title: "Independent widgets",
      body: "Nine widget types across three services, each with its own configuration and refresh cycle.",
    },
    {
      title: "Measured quality",
      body: "Desktop and mobile Lighthouse performance and accessibility scores reached 100/100.",
    },
  ],
  },
  {
    slug: "mytorch",
    label: "Machine learning, Team of 2",
    summary:
      "A neural-network library and chess-position analyzer written from scratch with NumPy — no PyTorch, TensorFlow or hidden framework doing the work.",
    sections: [
    {
      label: "The project",
      title: "A neural network you can read end to end",
      body: "MyTorch implements dense layers, ReLU, sigmoid, tanh, softmax cross-entropy, mini-batch SGD, Adam, inverted dropout, L2 weight decay and early stopping directly in NumPy. The same library powers a CLI that classifies chess positions as nothing, check or checkmate for either side.",
    },
    {
      label: "The data",
      title: "Turning a FEN into 781 numbers",
      body: "Each position becomes twelve one-hot piece planes over 64 squares, plus active colour, four castling rights and eight en-passant file values. The halfmove clock and fullmove number are deliberately excluded. Duplicate inputs were removed before an approximately 80/20 split within each class.",
      bullets: [
        "572,450 training positions after preparation.",
        "143,109 held-out test positions.",
        "7,460 duplicate positions removed before splitting.",
      ],
    },
    {
      label: "Training",
      title: "Two hidden layers, one honest checkpoint",
      body: "The reported run uses 128 and 64 hidden units with ReLU, dropout at 0.05, Adam at a 0.001 learning rate, L2 decay and early stopping on an internal 15% validation split. The best checkpoint landed at epoch 28 of 30.",
      wide: true,
    },
    {
      label: "Results",
      title: "85.43% on data the model never saw",
      body: "The supplied model reaches 85.53% validation accuracy and 85.43% on the held-out test set. Batched prediction over the full test file averages 0.0029 ms per position. The project documents the benchmark method rather than presenting a single flattering number.",
    },
    {
      label: "What I learned",
      title: "Reproducibility is part of the model",
      body: "The dataset preparation, architecture config, training command and benchmark are all checked in. That makes the result repeatable and makes the limits visible: overall accuracy does not prove equal performance across every class.",
    },
  ],
    focus: [
    {
      title: "From first principles",
      body: "Forward passes, gradients, optimizers and dropout implemented directly in NumPy.",
    },
    {
      title: "Reproducible split",
      body: "A seeded preparation script removes duplicates and holds out a clean test set.",
    },
    {
      title: "Honest measurement",
      body: "Validation accuracy, held-out accuracy and batched latency reported separately.",
    },
  ],
  },
  {
    slug: "raytracer",
    label: "3D rendering, Team project",
    summary:
      "A C++ ray-tracing engine that renders scenes by simulating how light interacts with objects, materials, shadows and reflections.",
    sections: [
    {
      label: "The project",
      title: "Rendering 3D scenes from a text description",
      body: "Raytracer receives a scene description, creates the objects and materials defined in that scene, and renders an image by tracing rays from the camera through each pixel. The engine supports geometric primitives, materials, lighting, shadows and reflections.",
    },
    {
      label: "My contribution",
      title: "The scene-file parser",
      body: "I worked on the parser responsible for reading the scene description and converting its contents into structured data the rendering pipeline could use.",
      bullets: [
        "Read and interpreted scene-description data from input files.",
        "Converted parsed values into structured scene information.",
        "Connected file-based configuration with the rendering pipeline.",
        "Collaborated within a team codebase using Git workflows.",
      ],
      wide: true,
    },
    {
      label: "The hard part",
      title: "Bad input should fail clearly",
      body: "A renderer is only as good as the scene it receives. The parser had to reject malformed values, handle optional properties and keep error messages useful enough that a teammate could fix the scene file without reading the parser source.",
    },
    {
      label: "Object-oriented design",
      title: "Keeping scene components modular",
      body: "The engine uses an object-oriented architecture for primitives, materials and rendering behaviour. The parser's job was to produce data that fit those abstractions cleanly, without leaking file-format details into the renderer.",
    },
  ],
    focus: [
    {
      title: "Parsing and validation",
      body: "A scene-description format becomes reliable structured data for the rest of the application.",
    },
    {
      title: "Object-oriented design",
      body: "A modular C++ architecture represents scene objects, materials and rendering behaviour.",
    },
    {
      title: "Team development",
      body: "One component of a larger rendering system, integrated with shared code and Git workflows.",
    },
  ],
  },
  {
    slug: "zappy",
    label: "Network game, Team of 4",
    summary:
      "A network-driven game where AI clients compete to survive and evolve on a shared map. I built the real-time graphical client in C++ with SFML.",
    sections: [
    {
      label: "The project",
      title: "A shared world driven by a network server",
      body: "Zappy is a multiplayer network game in which teams of AI clients compete on a resource-filled map. The server maintains the game state, while the graphical client presents that changing state visually in real time.",
    },
    {
      label: "My contribution",
      title: "GUI development in C++ and SFML",
      bullets: [
        "Built the graphical client using C++ and SFML.",
        "Rendered the map, players, resources and game entities.",
        "Displayed live player information, levels, positions, teams, orientation and inventory.",
        "Interpreted server-provided game data to keep the interface synchronized with the shared world state.",
      ],
      wide: true,
    },
    {
      label: "The hard part",
      title: "Making a changing world legible",
      body: "The GUI receives a stream of state changes rather than a finished scene. The challenge was turning that protocol into a stable visual hierarchy: what the player needs to see at a glance, what belongs in a detail panel, and how to keep the map readable as more entities appear.",
    },
    {
      label: "Team development",
      title: "One client inside a larger system",
      body: "The graphical client had to stay in step with a server and AI clients built by other team members. That meant agreeing on protocol behaviour, isolating rendering from networking, and testing against a live server rather than a mock.",
    },
  ],
    focus: [
    {
      title: "Real-time rendering",
      body: "A visual interface that presents a changing map and entity state clearly during gameplay.",
    },
    {
      title: "State synchronization",
      body: "Server-provided information becomes a consistent, understandable visual representation.",
    },
    {
      title: "Team development",
      body: "A client integrated into a four-person project and the wider game architecture.",
    },
  ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
