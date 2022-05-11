import React from "react"
import "../style/home/home.css"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="homeContent">
      <div
        className="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="underligne-effect">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            ABOUT
          </Link>
        </div>
        <div className="underligne-effect">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            SKILLS
          </Link>
        </div>
        <div className="underligne-effect">
          <a href="...">PROJECTS</a>
        </div>
        <div className="underligne-effect">
          <a href="...">CONTACT</a>
        </div>
      </div>
      <div className="brand">
        <h1>BORROMEE</h1>
      </div>
    </div>
  )
}

export default Home
