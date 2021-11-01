import Hero from "../components/hero/Hero";
import ImageCard from "../components/cards/ImageCard";
import ProjectCard from "../components/cards/portfolio/ProjectCard";

import {useReducedMotion, motion} from "framer-motion";

import aboutInfo from '../data/about.json';
import skillsInfo from '../data/skills.json';
import projectInfo from '../data/projects.json';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Portfolio(props) {
  const router = useRouter();
  let skillRouter = router.asPath.split("?filter=")[1];

  const hero = {
    title: "Portfolio",
  };

  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#66a1ee', origin: 0 } : { scale: 1.2, color: '#66a1ee', origin: 0 };

  let iterProjects = 0;

  const [skill, setSkill] = useState(getSkillByShort(skillRouter) ? getSkillByShort(skillRouter) : "All");

  useEffect(() => {
  }, [skill]);

  return (
    <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100">
      <Hero hero={hero} />

      {/* Portfolio */}
      <div id="portfolio">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
            <ImageCard
              title={props.aboutInfo.projectsTitle}
              text={props.aboutInfo.projectsText}
              image={props.aboutInfo.projectsImage}
            >
              <section>
                <div className="flex leading-tight p-2 md:p-4">
                  <a className="no-underline text-grey-darker mr-2" href={props.aboutInfo.githubLink}>
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-github fa-3x"></motion.i>
                  </a>
                </div>
              </section>
            </ImageCard>
        </div>
      </div>
    
      {/* Projects */}
      <div id="projects">
        <div className="container mb-2 mt-4 md:mt-8 mx-auto px-4 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-8">
            <a className="mx-2 mt-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 dark:bg-gray-600 dark:hover:gray-200 dark:text-gray-100 dark:hover:text-gray-300 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
              key="All"
              id="selected"
              onClick={(e) => {setSelectedSkill(e); setSkill("All")}}
            >
              All
            </a>
            {
              props.skillsInfo.map((skill) => {
                return (
                  <a className="mx-2 mt-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 dark:bg-gray-700 dark:hover:gray-200 dark:text-gray-100 dark:hover:text-gray-300 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
                    key={skill.name}
                    id="selectable"
                    onClick={(e) => {setSelectedSkill(e); setSkill(skill.name)}}
                  >
                    {skill.name}
                  </a>
                )
              })
            }
          </div>
        </div>
        <div className="container mb-12 mx-auto px-4 md:px-16">
          {
            props.projectInfo.map((project) => {
              if(project.skills.includes(skill.toUpperCase()) || skill === "All") {
                iterProjects++;
                if(iterProjects % 2 === 0) {
                  return (
                    <ProjectCard
                    key={project.name}
                    image={project.image}
                    title={project.name}
                    link={project.link}
                    mirrored={false}
                    text={project.shortDescription}
                    githubLink={project.githubLink}
                    websiteLink={project.websiteLink}    
                    skills={project.skills}
                    />
                  )
                } else {
                  return (
                    <ProjectCard
                    key={project.name}
                    image={project.image}
                    title={project.name}
                    link={project.link}
                    mirrored={true}
                    text={project.shortDescription}
                    githubLink={project.githubLink}
                    websiteLink={project.websiteLink}
                    skills={project.skills}
                    />
                  )
                }
              }
            })
          }
          { iterProjects === 0 &&
            <div className="text-red-500 ml-2 mt-4 md:mt-8">
              <h3 className="text-3xl md:text-4xl">Geen projecten gevonden.</h3>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

function setSelectedSkill(button) {
  setSelectedSkillForElement(button.target);
}

function setSelectedSkillForElement(id) {
  const target = id;
  if(target.id === "selected") return;

  const selected =  document.getElementById("selected");

  selected.id = "selectable";
  selected.classList.remove(...['bg-gray-600', 'text-gray-200']);
  selected.classList.add(...['bg-gray-300', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-100']);

  target.classList.remove(...['bg-gray-300', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-100']);
  target.classList.add(...['bg-gray-600', 'text-gray-200']);
  target.id = "selected";
}

function getSkillByShort(short) {
  skillsInfo.map((skill) => {
    if(skill.short === short) {
      return skill.name;
    }
  });
}

export async function getStaticProps() {
  return {
    props: { aboutInfo, skillsInfo, projectInfo },
  }
}

export default Portfolio;