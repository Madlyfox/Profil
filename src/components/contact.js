import React from "react"
import "../style/contact/contact.css"

const Contact = () => {
  return (
    <div className="contactContent">
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et
          perferendis alias dolorem!
        </p>
      </div>
      <div className="list">
        <div className="info">
          <ul>
            <li>borromee.stanley@gmail.com</li>
            <li>+33.6.41.56.37.01</li>
            <li>
              {" "}
              <a href="...">./Github/Stanley</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
