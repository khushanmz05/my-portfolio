import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getProject } from "@/data/projects";

export default function RaytracerCaseStudy() {
  const project = getProject("raytracer")!;

  return (
    <CaseStudyLayout
      project={project}
      label="3D rendering, Team project"
      summary="A C++ ray-tracing engine that renders scenes by simulating how light interacts with objects, materials, shadows and reflections."
      sections={[
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
      ]}
      focus={[
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
      ]}
    />
  );
}
