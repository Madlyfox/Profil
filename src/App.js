import Home from "./components/home"
import About from "./components/about"
import Skills from "./components/skills"
import Contact from "./components/contact"
import "./style/index.css"

function App() {
  return (
    <div className="App">
      <div className="content" dir="ltr">
        <section>
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
