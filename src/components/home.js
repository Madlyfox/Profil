import React from "react"
import "../style/home/home.css"
import { Link } from "react-scroll"
import { ReactComponent as Stanley } from "../style/assets/stanley.svg"

const Home = () => {
  return (
    <div className="homeContent">
      <div className="brand">
        <h1>BORROMEE</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="335.56"
          height="210.009"
          viewBox="0 0 335.56 210.009"
          className="stanley"
        >
          <g
            id="Groupe_169"
            data-name="Groupe 169"
            transform="translate(-999.547 -537.001)"
          >
            <path
              id="Tracé_58"
              data-name="Tracé 58"
              d="M911.934-2426.581s50.022-47.1-4.168-43.352-65.028,46.687-65.028,46.687-14.173,40.017,32.514,29.6,67.529,10.421,67.529,10.421,42.518,30.847-39.6,45.02-33.765-30.013-33.765-30.013,70.447-65.445,127.972-66.279,37.933,25.844,37.933,25.844"
              transform="translate(159.962 3008.146)"
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
            />
            <path
              id="Tracé_59"
              data-name="Tracé 59"
              d="M53.23,0S-9.529,82.5,1.243,103.815s49.177,5.132,49.177,5.132"
              transform="translate(1108.048 549.253) rotate(-7)"
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
            />
            <path
              id="Tracé_61"
              data-name="Tracé 61"
              d="M19.85,27.664c-1.87-6.315-7.934-7.677-10.731-7.516a9.388,9.388,0,0,0-8.171,5.4,11.111,11.111,0,0,0-.321,8.166c1.028,2.576,6.037,6.606,10.125,5.827,7.969-1.518,7.87-5.305,8.819-7.013S10.653,49.6,40.252,35.944s13.092,6.451,13.092,6.451S38.924,60.04,48.79,55.107s45.277-14.8,55.806-30.195,6.791-21.746,6.791-21.746-4.278-7.438-14.672.486S72.348,46.929,70.736,59.366s.406,17.984.406,17.984S78,89.132,89.254,81.609s5.317-14.994,3.086-15.148S84.276,70.286,86,77.369s6.579,7.778,13.413,6.254-6.82,39.318,24.667,1.873S22.8,181.465,55.465,128.03s45.39-.816,45.39-.816"
              transform="translate(1157.387 618) rotate(-25)"
              fill="none"
              stroke="white"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Home
