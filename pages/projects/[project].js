import { useRouter } from "next/router";

import Hero from "../../components/hero/Hero";
import ImageCard from "../../components/cards/ImageCard";

import {useReducedMotion, motion} from "framer-motion";
import CardCarousel from "../../components/cards/projects/CardCarousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import projectInfo from '../../data/projects.json';

export function Project(props) {
  const router = useRouter();
  const { project } = router.query;

  const hero = {
    title: project,
  };

  const shouldReduceMotion = useReducedMotion();

  let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#66a1ee', origin: 0 } : { scale: 1.2, color: '#66a1ee', origin: 0 };
 
  return (
    <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100">
      <Hero hero={hero} />

      {/* Project */}
      <div id="project">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            <ImageCard
              title={"Over " + props.project.name}
              text={props.project.longDescription}
              image="https://picsum.photos/512/256/?random"
            >
              <section>
                <div className="flex items-center p-2 md:p-4">
                { props.project.githubLink &&
                  <a className="no-underline text-grey-darker mr-2" href={props.project.githubLink}>
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-github fa-3x"></motion.i>
                  </a>
                }
                { props.project.websiteLink &&
                  <a className="no-underline text-grey-darker mr-2" href={props.project.websiteLink}>
                    <span className="hidden">Website</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="far fa-window-maximize fa-3x"></motion.i>
                  </a>
                }
                  <div className="no-underline text-grey-darker">
                    <span className="hidden">Like</span>
                      <motion.div
                      whileHover= { animateHeart }
                      whileFocus= { animateHeart }>
                        <lord-icon
                          src="https://cdn.lordicon.com/rjzlnunf.json"
                          trigger="hover"
                          colors="primary:#b4b4b4,secondary:#66a1ee"
                          style={{"width": "64px", "height":"64px"}}>
                        </lord-icon>
                      </motion.div>
                  </div>
                  <span className="mr-2 text-4xl text-gray-600 dark:text-gray-300">2</span>
                { props.project.commits &&
                  <>
                    <div className="no-underline text-grey-darker">
                      <span className="hidden">Commits</span>
                      <motion.div
                      whileHover= { animateHeart }
                      whileFocus= { animateHeart }>
                        <lord-icon
                          src="https://cdn.lordicon.com/ybfcwnqv.json"
                          trigger="hover"
                          colors="primary:#b4b4b4,secondary:#66a1ee"
                          style={{"width": "64px", "height":"64px"}}>
                        </lord-icon>
                      </motion.div>
                    </div>
                    <span className="text-4xl text-gray-600 dark:text-gray-300">{props.project.commits}</span>
                  </>
                }
                </div>
                <div className="flex leading-tight flex-wrap py-2 pl-0 md:pl-2 md:py-0">
                  {
                    props.project.skills.map((skill) => {
                      return (
                        <a className="ml-2 mt-1 bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100 dark:text-gray-100 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
                          key={skill}>
                          {skill}
                        </a>
                      )
                    })
                  }
                </div>
              </section>
            </ImageCard>
        </div>
      </div>
    
      {/* Projects */}
      <div id="project-info">
        <br />
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            {/* Carousel */}
            <CardCarousel>
              {
                props.project.images.map((image) => {
                  return (
                    <div
                      key={image["link"]}
                    >
                      <img src={image["link"]} />
                      <p className="legend">{image["text"]}</p>
                    </div>
                  )
                })
              }

            </CardCarousel>
          </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projectInfo.map(project => ({
    params: {
      project: project.short
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  let project = projectInfo.find(project => project.short === params.project);
  return {
    props: { project },
  }
}

export default Project;