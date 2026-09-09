"use client";
import "@/components/styles/skills.css";
import Skill_card from "@/components/skillCard";

const skills = [
  {
    title: "01. PROGRAMMING",
    skills: [
      { name: "Python", tag: "Intermediate" },
      { name: "C", tag: "ADVANCED" },
      { name: "JavaScript", tag: "Intermediate" },
      { name: "oop", tag: "PARADIGM" },
      { name: "Problem Solving", tag: "PRACTICE" },
    ],
    concept: "RECURSION / POINTER_ARITHMETIC / OOP",
  },
  {
    title: "02. WEB SYSTEMS",
    skills: [
      { name: "HTML5", tag: "STANDARD" },
      { name: "CSS Grid & Flexbox", tag: "RESPONSIVE" },
      { name: "Vanilla JS DOM APIs", tag: "ZERO-DEP" },
      { name: "AI-Assisted UI Development", tag: "Stitch AI" },
      { name: "RESTful API Design", tag: "ENDPOINTS" },
    ],
    concept: "EVENT_HANDLING / ASYNC_AWAIT / API_FETCH",
  },
  {
    title: "03. TOOLS & Frameworks",
    skills: [
      { name: "React", tag: "FrontEnd" },
      { name: "Next.js", tag: "Framework" },
      { name: "Node.js", tag: "BackEnd" },
      { name: "Express.js", tag: "Framework" },
      { name: "MongoDB", tag: "DataBase" },
    ],
    concept: "STATE_MANAGEMENT / REST_APIS / COMPONENT_ARCH",
  },
  {
    title: "04. CORE CONCEPTS",
    skills: [
      { name: "Algorithmic Complexity", tag: "BIG-O" },
      { name: "Data Structures", tag: "CORE_LOGIC" },
      { name: "System Design Basics", tag: "SCALABILITY" },
      { name: "Profiling & Debugging", tag: "GDB/VALGRIND" },
      { name: "Mathematical Logic", tag: "DISCRETE" },
    ],
    concept: "PROBLEM_SOLVING / MEMORY_MANAGEMENT / ALGORITHMS",
  },
];

export default function Skills() {
  return (
    <div id="skills">
      <div id="sk_head">
        <p>TECHNICAL SKILLS & DISCIPLINE</p>
        <span>[ MATRIX // EVALUATION_2026.9 ]</span>
      </div>
      <div id="sk_body">
        {skills.map((skill) => (
          <Skill_card
            key={skill.title}
            card_title={skill.title}
            skills={skill.skills}
            concepts={skill.concept}
          />
        ))}
      </div>
    </div>
  );
}
