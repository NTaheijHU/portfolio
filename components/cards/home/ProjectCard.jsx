import {useReducedMotion, motion} from "framer-motion";

export default function ProjectCard(props) {
  const shouldReduceMotion = useReducedMotion();

  let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#66a1ee', origin: 0 } : { scale: 1.2, color: '#66a1ee', origin: 0 };

  return(
    <div className="">
      <article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-white">
        <a href="#">
          <img alt="Placeholder" className="block h-auto w-full" src={props.image} />
        </a>
        <header className="p-2 md:p-4 mt-2 md:mt-4">
          <a className="no-underline text-black dark:text-gray-100" href={props.link}>
            <h1 className="text-4xl font-bold text-center">
                {props.title}
            </h1>
          </a>
        </header>
        <section className="flex px-2 pb-4 md:px-4 md:pb-4">
          <div className="no-underline text-black dark:text-gray-100" href="#">
            <p className="text-md">
                {props.text + " "}
                <a className="no-underline hover:underline text-blue-700 dark:text-blue-500" href={props.link}>
                  Lees meer...
                </a>
            </p>
          </div>
        </section>
        <section>
          <div className="flex items-center pl-2 pb-2">
            <a className="no-underline text-grey-darker mr-2" href="#">
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
          {props.githubLink &&
            <a className="no-underline text-grey-darker mr-2" href={props.githubLink} target="_blank">
              <span className="hidden">Github</span>
              <motion.div
              whileHover= { animateIcon }
              whileFocus= { animateIcon }
              className="fab fa-github fa-3x"></motion.div>
            </a>
          }
          {props.websiteLink &&
            <a className="no-underline text-grey-darker mr-2" href={props.websiteLink} target="_blank">
              <span className="hidden">Website</span>
              <motion.i
              whileHover= { animateIcon }
              whileFocus= { animateIcon }
              className="far fa-window-maximize fa-3x"></motion.i>
            </a>
    }
          </div>
        </section>
      </article>
    </div>
  );
}