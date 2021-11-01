import {useReducedMotion, motion} from "framer-motion";

export default function ProjectCard(props) {
  const shouldReduceMotion = useReducedMotion();

  let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#66a1ee', origin: 0 } : { scale: 1.2, color: '#66a1ee', origin: 0 };
   
  if(!props.mirrored) {
    return(
      <article>
        <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100 mt-2 md:mt-4">
          <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
            <div className="p-6 lg:col-span-2">
                <h3 className="uppercase font-medium text-4xl mb-3">{props.title}</h3>
                <p className="leading-normal text-xl">{props.text}&nbsp;
                  <a className="no-underline hover:underline text-blue-700" href={props.link}>
                    Lees meer...
                  </a>
                </p>
            </div>
              <div className="lg:my-4 lg:mx-4 lg:col-span-1">
                <img alt="Placeholder" src={props.image} />
                <section>
                  <div className="flex items-center p-2 md:p-4 ">
                    <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href="#">
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
                    </a>
                    { props.githubLink &&
                      <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href={props.githubLink} target="_blank">
                        <span className="hidden">Github</span>
                        <motion.i
                        whileHover= { animateIcon }
                        whileFocus= { animateIcon }
                        className="fab fa-github fa-3x" />
                      </a>
                    }
                    { props.websiteLink &&
                      <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href={props.websiteLink} target="_blank">
                        <span className="hidden">Website</span>
                        <motion.i
                        whileHover= { animateIcon }
                        whileFocus= { animateIcon }
                        className="far fa-window-maximize fa-3x" />
                      </a>
                    }
                    {
                      props.skills.map((skill) => {
                        return (
                          <a className="ml-2 bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100 dark:text-gray-100 font-semibold text-center text-md py-2 px-2 rounded-xl duration-200 ease-in-out"
                          key={skill}>
                            {skill}
                        </a>
                        )
                      })
                    }
                  </div>
                </section>
              </div>
          </div>
        </section>
      </article>  
    );
  } else {
    return(
      <article>
        <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100 mt-2 md:mt-4">
          <div className="lg:relative m-0 lg:grid lg:grid-cols-3 lg:grid-rows-1">
            <div className="lg:my-4 lg:mx-4">
              <img alt="Placeholder" src={props.image} />
                
            </div>
            <div className="pt-4 pl-2 lg:col-span-2">
                <h3 className="uppercase font-medium text-4xl mb-3">{props.title}</h3>
                <p className="leading-normal text-xl">{props.text}&nbsp;
                  <a className="no-underline hover:underline text-blue-700 dark:text-blue-500" href={props.link}>
                    Lees meer...
                  </a>
                </p>
                <section>
                  <div className="flex items-center">
                    <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href="#">
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
                    </a>
                    { props.githubLink &&
                      <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href={props.githubLink} target="_blank">
                        <span className="hidden">Github</span>
                        <motion.i
                        whileHover= { animateIcon }
                        whileFocus= { animateIcon }
                        className="fab fa-github fa-3x" />
                      </a>
                    }
                    { props.websiteLink &&
                      <a className="no-underline text-grey-darker dark:text-gray-100 mr-2" href={props.websiteLink} target="_blank">
                        <span className="hidden">Website</span>
                        <motion.i
                        whileHover= { animateIcon }
                        whileFocus= { animateIcon }
                        className="far fa-window-maximize fa-3x" />
                      </a>
                    }
                    {
                      props.skills.map((skill) => {
                        return (
                          <a className="ml-2 bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100 dark:text-gray-100 font-semibold text-center text-md py-2 px-2 rounded-xl duration-200 ease-in-out"
                          key={skill}>
                            {skill}
                        </a>
                        )
                      })
                    }
                  </div>
                </section>
            </div>
          </div>
        </section>
      </article>  
    );
  } 
}