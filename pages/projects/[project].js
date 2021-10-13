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
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };
 
  return (
    <div className="bg-gray-200 bg-opacity-60">
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
                <div className="flex leading-tight p-2 md:p-4">
                { props.project.githubLink &&
                  <a className="no-underline text-grey-darker mr-2" href={props.project.githubLink}>
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-github fa-2x"></motion.i>
                  </a>
                }
                { props.project.websiteLink &&
                  <a className="no-underline text-grey-darker mr-2" href={props.project.websiteLink}>
                    <span className="hidden">Website</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="far fa-window-maximize fa-2x"></motion.i>
                  </a>
  }
                  <div className="no-underline text-grey-darker mr-4">
                    <span className="hidden">Like</span>
                    <motion.i
                    whileHover= { animateHeart }
                    whileFocus= { animateHeart }
                    className="fa fa-heart fa-2x"></motion.i>
                    <span className="ml-2 text-3xl text-gray-600">2</span>
                  </div>
                { props.project.commits &&
                  <div className="no-underline text-grey-darker mr-4">
                    <span className="hidden">Commits</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fas fa-code-branch fa-2x"></motion.i>
                    <span className="ml-2 text-3xl text-gray-600">{props.project.commits}</span>
                  </div>
                }
                </div>
                <div className="flex leading-tight py-2 pl-0 md:pl-2 md:py-0">
                  {
                    props.project.skills.map((skill) => {
                      return (
                        <a className="ml-2 mt-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out uppercase"
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