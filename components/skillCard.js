"use client";
import "@/components/styles/skills.css";

export default function Skill_card({ card_title, skills, concepts }) {
  return (
    <div>
      <span>[ {card_title} ]</span>
      <section>
        {skills.map((skill) => (
          <div key={skill.name}>
            <p>{skill.name}</p>
            <span>[{skill.tag}]</span>
          </div>
        ))}
      </section>
      <section>{concepts}</section>
    </div>
  );
}
