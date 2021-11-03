import SkillCard from "../components/cards/about/SkillCard";
import Hero from "../components/hero/Hero";
import ImageCard from "../components/cards/ImageCard";

import {useReducedMotion, motion} from "framer-motion";

import aboutInfo from '../data/about.json';
import skillsInfo from '../data/skills.json';

export function OverMij(props) {
  const hero = {
    title: "Over Mij",
  };
  
  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { color: '#66a1ee', originX: 0 } : { color: '#66a1ee', originX: 0 };

  return (
    <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100">
      <Hero hero={hero} />

      {/* About Me */}
      <div id="about-me">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
            <ImageCard
              title={aboutInfo.name}
              text={aboutInfo.aboutTextLong}
              image={aboutInfo.image}
            >
              <motion.div className="flex items-center"
              whileHover= { animateIcon }
              whileFocus= { animateIcon }
              >
                <a className="no-underline" href="#">
                  <span className="hidden">Download CV</span>
                  <lord-icon
                      src="https://cdn.lordicon.com/nocovwne.json"
                      trigger="hover"
                      colors="primary:#b4b4b4,secondary:#66a1ee"
                      style={{"width": "64px", "height":"64px"}}>
                  </lord-icon>
                  <span className="text-center align-middle text-xl text-grey-darker my-1">Download CV</span>
                </a>
              </motion.div>
            </ImageCard>
        </div>
      </div>

      {/* Skills */}
      <div id="skills">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Skills</h1>
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
          <div className="flex flex-wrap overflow-hidden -mx-1 lg:-mx-4">
          {
            props.skillsInfo.length > 0 && props.skillsInfo.map((skill) => {
              return (
                <SkillCard 
                  key={skill.name}
                  title={skill.name}
                  text={skill.details}
                  link={"/portfolio?filter=" + skill.short}
                /> 
              )
            })
          }
          </div>
          { props.skillsInfo.length === 0 &&
            <div className="text-red-500 ml-2 mt-2 md:mt-4">
              <p className="text-center text-3xl md:text-4xl">Geen skills gevonden.</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { aboutInfo, skillsInfo },
  }
}

export default OverMij;

  