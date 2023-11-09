import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
      <Skill skill="nodejs" emoji="💪🏾" color="#96D7E2" />
      <Skill skill="mongodb" emoji="💪🏾" color="#EB96B0" />
      <Skill skill="express" emoji="💪🏾" color="#B77880" />
      <Skill skill="js" emoji="💪🏾" color="#96E29C" />
      <Skill skill="react" emoji="👶🏾" color="#EE8974" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
