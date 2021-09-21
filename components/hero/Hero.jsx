import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Hero({ hero }) {
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

  return (
    <section style={styles.hero} className="bg-blue-500">
      <div className="py-12 px-4 lg:px-0 mx-auto max-w-7xl text-center">
        <motion.h1
          initial={{ y: "-300%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-semibold text-white">
            { hero.title }
        </motion.h1>
      </div>
    </section>
  )
}