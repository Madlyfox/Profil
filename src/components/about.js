import React from "react"
import "../style/about/about.css"
import { motion, useAnimation } from "framer-motion"
import { ReactComponent as PP } from "../style/assets/pp.jpg"
import { useInView } from "react-intersection-observer"

import { useEffect } from "react"

const About = () => {
  const aboutVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
    hidden: { opacity: 0, x: 300 },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.div
      className="aboutContainer"
      variants={aboutVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <h1>A propos de moi :</h1>
      <motion.div className="profil">
        <div className="Pp">
          <div className="photo"></div>

          <div className="name">
            <p>Stanley</p>
            <p style={{ fontWeight: "bold" }}>Borromée</p>
          </div>
        </div>
        <div className="aboutParagraph">
          <p>
            Jeune développeur attentif et volontaire, c'est fort de ma passion
            pour le numérique que je me suis intéréssé d'abort à
            l'algorithmique, puis au développement web dans le but d'en faire
            mon métier
          </p>

          <p>
            Ma formation et mes éxperiences m'ont apprises à donner le meilleur
            de moi même dans un environnement exigeant de façon autonome et à
            m'organiser dans mes projets.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
