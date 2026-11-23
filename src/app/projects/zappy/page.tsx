import CaseStudyLayout from "../../../../components/CaseStudyLayout";
import { getProject } from "../../../data/projects";

export default function ZappyCaseStudy() {
  const project = getProject("zappy")!;

  return (
    <CaseStudyLayout
      project={project}
      label="Network game, Team of 4"
      summary="A network-driven game where AI clients compete to survive and evolve on a shared map. I built the real-time graphical client in C++ with SFML."
      sections={[
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
      ]}
      focus={[
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
      ]}
    />
  );
}
