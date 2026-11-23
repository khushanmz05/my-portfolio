import CaseStudyLayout from "../../../../components/CaseStudyLayout";
import { getProject } from "../../../data/projects";

export default function SensaiCaseStudy() {
  const project = getProject("sensai")!;

  return (
    <CaseStudyLayout
      project={project}
      label="Local AI, Team of 4"
      summary="A local-first AI assistant with streaming chat, schema-validated JSON, guarded file access, MCP tools, web search and a FastAPI console — all running on models you host yourself."
      sections={[
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
      ]}
      focus={[
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
      ]}
    />
  );
}
