import {useEffect, useState} from "react";
import {useReducedMotion, motion} from "framer-motion";

export default function HeroHome() {
  useEffect(() => {
    let element = document.getElementById("header");
    let height = element.offsetHeight;
    let heightInRem = height / 16;
    setTopPadding(heightInRem + 'rem');
  })

  const [topPadding, setTopPadding] = useState(0);

  const styles = {
    hero: {
      paddingTop: topPadding
    }
  }

  const shouldReduceMotion = useReducedMotion();

  let animateX = shouldReduceMotion ? { x:"0%" } : { x:"-300%" };
  let animateY = shouldReduceMotion ? { y:"0%" } : { y:"-1000%" };

  return (
    <section className="bg-white custom-hero-image" style={{backgroundImage: `url("header.jpg")`}}>
      <div className="custom-hero h-screen">
        <div className="max-w-full mx-auto xl:px-0 px-4 text-white font-semibold" style={styles.hero}>
          <div className="w-full my-32 text-center">
            <motion.div             
              initial={animateY}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl">NOAH TAHEIJ</h1>
            </motion.div>
            <motion.div             
              initial={animateY}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl my-16">WEBSITE & APPLICATION DEVELOPER</h1>
            </motion.div>
            <motion.div
              initial={animateX}
              animate={{ x: "0%" }}
              transition={{ duration: 1.1 }}
            >
            <a href="/" className="mx-8 py-4">
              {/* <img src="arrow.svg" alt="Arrow Down" className="arrow-down" /> */}
            </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}