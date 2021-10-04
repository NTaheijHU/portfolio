import SkillCard from "../components/cards/about/SkillCard";
import Hero from "../components/hero/Hero";
import ImageCard from "../components/cards/ImageCard";

import {useReducedMotion, motion} from "framer-motion";

import aboutInfo from '../data/about.json';
import skillsInfo from '../data/skills.json';

export default function OverMij() {
  const hero = {
    title: "Over Mij",
  };
  
  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', originX: 0 } : { scale: 1.2, color: '#1d4ed8', originX: 0 };

  return (
    <div className="bg-gray-200 bg-opacity-60">
      <Hero hero={hero} />

      {/* About Me */}
      <div id="about-me">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            <ImageCard
              title={aboutInfo.name}
              text={aboutInfo.aboutTextLong}
              image={aboutInfo.image}
            >
              <motion.div className="flex leading-tight p-2 md:p-4"
              whileHover= { animateIcon }
              whileFocus= { animateIcon }
              >
                <a className="no-underline" href="#">
                  <span className="hidden">Download CV</span>
                  <i className="fa fa-download fa-2x mr-2" />
                  <span className="text-center text-xl text-grey-darker my-1">Download CV</span>
                </a>

              </motion.div>
            </ImageCard>
        </div>
      </div>

      {/* Skills */}
      <div id="skills">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Skills</h1>

        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            skillsInfo.map((skill) => {
              return (
                <SkillCard 
                  title={skill.name}
                  text={skill.details}
                  link={"/portfolio?filter=" + skill.short}
                /> 
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  );
}

  