import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "nodejs",
    level: "advanced",
    color: "#96D7E2",
  },
  {
    skill: "mongodb",
    level: "advanced",
    color: "#EB96B0",
  },
  {
    skill: "express",
    level: "advanced",
    color: "#B77880",
  },
  {
    skill: "Git GitHub",
    level: "intermediate",
    color: "#96E29C",
  },
  {
    skill: "js",
    level: "advanced",
    color: "#96E29C",
  },
  {
    skill: "react",
    level: "beginner",
    color: "#EE8974",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="anime-boy-computer.jpg" alt="boy" />;
}

function Intro() {
  return (
    <div>
      <h1>Rashmi Pullur</h1>
      <p>
        In my coding adventures, I navigate the intricate world of Node.js,
        constantly honing my skills and dreaming of evolving into a full-fledged
        MERN stack developer. But when the screen gets too overwhelming, you can
        find me lost in the enchanting realms of books, escaping reality with
        every turn of the page.While most people might hit the town for a night
        out, I create my own dance floor in the privacy of my room, letting the
        music guide my every move.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  // console.log(skill, level, color + "------------------------");
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏾"}
        {level === "intermediate" && "👍🏾"}
        {level === "advanced" && "💪🏾"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
