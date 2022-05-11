import React from "react"
import "../style/contact/contact.css"

const Contact = () => {
  return (
    <div className="contactContent">
      <div className="left">
        <div className="info">
          <div className="title">
            <h2>Contact</h2>
          </div>
          <ul>
            <li>Borromée</li>
            <li>Stanley</li>
            <li>borromee.stanley@gmail.com</li>
            <li>+33.6.41.56.37.01</li>
            <li>
              {" "}
              <a href="...">./Github/Stanley</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            et perferendis alias dolorem! Quisquam consequatur obcaecati nam
            culpa facilis. Ab alias cum dolore reiciendis in earum magni eius
            dolorum placeat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
