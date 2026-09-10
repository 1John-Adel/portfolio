import Image from "next/image";

export default function Card({ project }) {
  return (
    <div className="card">
      <section className="card-title">
        <div>
          <span>project {project.id < 10 ? `0${project.id}` : project.id}</span>
          |
          <p>{project.title}</p>
        </div>
        <span>Year: {project.year}</span>
      </section>
      <section className="card-body">
        {project.image ? (
          <div className="img-div">
            <Image src={`/assets/${project.image}`} fill alt={project.title}/>
            <div className="context">{project.context}<span>{project.code}</span></div>
          </div>
        ) : (
          project.renderPreview()
        )}
        <div className="details">
          <span>[ {project.tag} ]</span>
          <h1>{project.title}</h1>
          <h3>{project.subtitle}</h3>
          <p>{project.description}</p>
          <div>
            <span>[ ARCHITECTURE STACK ]</span>
            <section>
              {project.stack.map((s, index) => (
                <div key={index}>{s}</div>
              ))}
            </section>
          </div>
          <section>
            <a href={project.repo} className="repo" target="_blank">github repo ↗</a>
            <a href={project.demo} className="demo" target="_blank">live demo ↗</a>
          </section>
        </div>
      </section>
    </div>
  );
}
