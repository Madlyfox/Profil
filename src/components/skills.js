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
            <li>ANGULAR.JS</li>
            <li>CSS/SCSS</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>SOFTS</h2>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            nisi magni eum, nostrum iste nesciunt.
          </p>
          <ul>
            <li>VS CODE</li>
            <li>Postman</li>
            <li>GitHub</li>
            <li>NodeJS</li>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
