import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getProject } from "@/data/projects";

export default function DashboardCaseStudy() {
  const project = getProject("dashboard")!;

  return (
    <CaseStudyLayout
      project={project}
      label="Full-stack, Team of 2"
      summary="A self-hosted workspace for weather, GitHub activity and RSS feeds, with real accounts, per-user widgets, independent refresh timers and a Docker deployment."
      sections={[
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
      ]}
      focus={[
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
      ]}
    />
  );
}
