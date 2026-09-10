import "@/components/styles/projects.css";
import Card from "@/components/projectCard";
import projects from "./projectsData";

export default function Projects() {
  return (
    <div id="projects">
      <section id="p_head">
        <div>
          <span>02 —</span>
          <p>PROJECTS</p>
        </div>
        <span>[ PRODUCTION ARTIFACTS & CODEBASES ]</span>
      </section>
      <section id="p_body">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </section>
    </div>
  );
}
