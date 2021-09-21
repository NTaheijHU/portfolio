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

  let animateArrow = shouldReduceMotion ? { opacity: 1 } : { opacity: 0 };
  let animateDown = shouldReduceMotion ? { y:"0%", opacity: 1 } : { y:"-1000%", opacity: 0 };
  let animateUp = shouldReduceMotion ? { y:"0%", opacity: 1 } : { y:"500%", opacity: 0 };

  return (
    <section className="bg-white custom-hero-image" style={{backgroundImage: `url("header.jpg")`}}>
      <div className="custom-hero h-screen">
        <div className="max-w-full mx-auto xl:px-0 px-4 text-white font-semibold" style={styles.hero}>
          <div className="w-full my-16 lg:my-32 text-center">
            <motion.div             
              initial={animateDown}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <h1 className="text-7xl">NOAH TAHEIJ</h1>
            </motion.div>
            <motion.div             
              initial={animateUp}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <h2 className="text-4xl my-8 lg:my-16">WEBSITE & APPLICATION DEVELOPER</h2>
            </motion.div>

            <motion.div             
              initial={animateArrow}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <div className="grid justify-items-center lg:my-64" role="img" aria-label="Pijl voor scrollen">
                <a href="#skills">
                  <img src="arrow.svg" alt="Down Arrow" width="120" height="120" className="hero-arrow bounce" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}