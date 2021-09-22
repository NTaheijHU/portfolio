import {useReducedMotion, motion} from "framer-motion";

export default function ProjectCard(props) {

  const shouldReduceMotion = useReducedMotion();

  let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };
  
  
  if(!props.mirrored) {
    return(
      <article>
        <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
          <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
            <div className="p-6 lg:col-span-2">
                <h2 className="uppercase font-medium text-4xl mb-3">{props.title}</h2>
                <p className="leading-normal text-xl">{props.text}</p>
            </div>
            <div className="lg:my-4 lg:mx-4 lg:col-span-1">
              <img alt="Placeholder" src={props.image} />
                <section>
                  <div className="flex leading-tight p-2 md:p-4 ">
                    <a className="no-underline text-grey-darker mr-2" href="#">
                      <span className="hidden">Like</span>
                      <motion.i
                      whileHover= { animateHeart }
                      whileFocus= { animateHeart }
                      className="fa fa-heart fa-2x" />
                    </a>
    
                    <a className="no-underline text-grey-darker mr-2" href={props.githubLink}>
                      <span className="hidden">Github</span>
                      <motion.i
                      whileHover= { animateIcon }
                      whileFocus= { animateIcon }
                      className="fab fa-github fa-2x" />
                    </a>
    
                    <a className="no-underline text-grey-darker mr-2" href={props.websiteLink}>
                      <span className="hidden">Website</span>
                      <motion.i
                      whileHover= { animateIcon }
                      whileFocus= { animateIcon }
                      className="far fa-window-maximize fa-2x" />
                    </a>

                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      REACT
                    </a>
                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      TAILWINDCSS
                    </a>
                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      PYTHON
                    </a>
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
        <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
          <div className="lg:relative m-0 lg:grid lg:grid-cols-3 lg:grid-rows-1">
            <div className="lg:my-4 lg:mx-4">
              <img alt="Placeholder" src={props.image} />
                <section>
                  <div className="flex leading-tight p-2 md:p-4 ">
                    <a className="no-underline text-grey-darker mr-2" href="#">
                      <span className="hidden">Like</span>
                      <motion.i
                      whileHover= { animateHeart }
                      whileFocus= { animateHeart }
                      className="fa fa-heart fa-2x"></motion.i>
                    </a>
    
                    <a className="no-underline text-grey-darker mr-2" href={props.githubLink}>
                      <span className="hidden">Github</span>
                      <motion.i
                      whileHover= { animateIcon }
                      whileFocus= { animateIcon }
                      className="fab fa-github fa-2x"></motion.i>
                    </a>
    
                    <a className="no-underline text-grey-darker mr-2" href={props.websiteLink}>
                      <span className="hidden">Website</span>
                      <motion.i
                      whileHover= { animateIcon }
                      whileFocus= { animateIcon }
                      className="far fa-window-maximize fa-2x"></motion.i>
                    </a>

                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      REACT
                    </a>
                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      TAILWINDCSS
                    </a>
                    <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                      PYTHON
                    </a>
                  </div>
                </section>
            </div>
            <div className="p-6 lg:col-span-2">
                <h2 className="uppercase font-medium text-4xl mb-3">{props.title}</h2>
                <p className="leading-normal text-xl">{props.text}</p>
            </div>
          </div>
        </section>
      </article>  
    );
  }
  
}