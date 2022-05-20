import React from "react"
import "../style/home/home.css"
import { Link } from "react-scroll"
import { ReactComponent as Stanley } from "../style/assets/stanley.svg"

const Home = () => {
  return (
    <div className="homeContent">
      <div className="brand">
        <h1>BORROMEE</h1>
        <Stanley fill="red" stroke="green" className="stanley" />
      </div>
    </div>
  )
}

export default Home
