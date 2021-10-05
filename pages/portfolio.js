import Hero from "../components/hero/Hero";
import ImageCard from "../components/cards/ImageCard";
import ProjectCard from "../components/cards/portfolio/ProjectCard";

import {useReducedMotion, motion} from "framer-motion";

import aboutInfo from '../data/about.json';
import skillsInfo from '../data/skills.json';
import projectInfo from '../data/projects.json';

export function Portfolio(props) {
  const hero = {
    title: "Portfolio",
  };

  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };

  let iterProjects = 0;

  return (
    <div className="bg-gray-200 bg-opacity-60">
      <Hero hero={hero} />

      {/* Portfolio */}
      <div id="portfolio">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            <ImageCard
              title={props.aboutInfo.projects.title}
              text={props.aboutInfo.projects.details}
              image={props.aboutInfo.projects.image}
            >
              <section>
                <div className="flex leading-tight p-2 md:p-4">
                  <a className="no-underline text-grey-darker mr-2" href={props.aboutInfo.projects.githubLink}>
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-github fa-2x"></motion.i>
                  </a>
                  <a className="no-underline text-grey-darker mr-2" href={props.aboutInfo.projects.gitlabLink}>
                    <span className="hidden">Gitlab</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-gitlab fa-2x"></motion.i>
                  </a>
                </div>
              </section>
            </ImageCard>
        </div>
      </div>
    
      {/* Projects */}
      <div id="projects">
        <div className="container mb-2 mt-4 md:mt-8 mx-auto px-2 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-8">
            {
              props.skillsInfo.map((skill) => {
                if(props.skillsInfo[0] === skill) {
                  return (
                    <a className="ml-2 mt-2 bg-gray-600 hover:bg-gray-600 text-gray-200 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
                      key={skill.name}>
                      {skill.name}
                    </a>
                  )
                } else {
                  return (
                    <a className="ml-2 mt-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
                      key={skill.name}>
                      {skill.name}
                    </a>
                  )
                }

              })
            }
          </div>
        </div>
        <div className="container mb-12 mx-auto px-2 md:px-4">
          {
            props.projectInfo.map((project) => {
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
            })
          }
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { aboutInfo, skillsInfo, projectInfo },
  }
}


export default Portfolio;