import React from "react"
import "../style/skills/skills.css"

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="section">
        <h2>LANGUAGES</h2>

        <div className="content">
          <p>
            Je me diversifie pour pouvoir intervenir à toutes les étapes d'un
            projet
          </p>
          <ul>
            <li>HTML</li>
            <li>PHP</li>
            <li>JSX</li>
            <li>REACT</li>
            <li>ANGULAR </li>
            <li>CSS/SCSS</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>SOFTS</h2>

        <div className="content">
          <p>
            Mon espace de travail comprends plusieur logiciels donnant une
            multitude de possibilitées
          </p>
          <ul>
            <li>VS Code</li>
            <li>Postman</li>
            <li>GitHub</li>
            <li>NodeJS</li>
            <li>Adobe XD</li>
            <li>MongoDB</li>
            <li>MySQL </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
