import Hero from "../components/hero/Hero";
import ImageCard from "../components/cards/ImageCard";
import ProjectCard from "../components/cards/portfolio/ProjectCard";

import {useReducedMotion, motion} from "framer-motion";


export default function Portfolio() {
  const hero = {
    title: "Portfolio",
  };

  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


  return (
    <div>
      <Hero hero={hero} />

      {/* Portfolio */}
      <div id="portfolio">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
            <ImageCard
              title="Mijn Projecten"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odio voluptate alias. Non, ad velit? Placeat fugiat nam sapiente commodi, possimus quidem rerum maiores voluptate pariatur dignissimos, quibusdam error aspernatur?
              Excepturi magnam ducimus sunt quam delectus nulla porro eius voluptate, maxime repellat. Esse accusantium quasi expedita nobis nostrum alias, ex officiis ullam officia, eos sequi saepe voluptate voluptatem nihil voluptas.
              Earum, sunt harum. Ab quae temporibus pariatur iure suscipit ipsum maxime tenetur, dolorem minima fuga dolore nihil itaque iste quod corrupti rem facere sequi alias ad tempora adipisci culpa reiciendis.
              Minima numquam nesciunt libero maxime voluptates voluptatibus laboriosam adipisci blanditiis culpa asperiores molestias aliquam ullam explicabo ratione reprehenderit officiis, autem quidem quae nobis ducimus magni ad. Repellendus obcaecati tenetur officia!"
              image="https://picsum.photos/512/256/?random"
            >
              <section>
                <div className="flex leading-tight p-2 md:p-4 ">
                  <a className="no-underline text-grey-darker mr-2" href="#">
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fab fa-github fa-2x"></motion.i>
                  </a>
                  <a className="no-underline text-grey-darker mr-2" href="#">
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
        <div className="container mb-2 mt-4 md:mt-8 mx-auto px-4 md:px-12">
          <a className="ml-2 bg-gray-600 hover:bg-gray-600 text-gray-200 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out">
            REACT
          </a>
          <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out">
            TAILWINDCSS
          </a>
          <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-3 px-8 rounded-xl duration-200 ease-in-out">
            PYTHON
          </a>
          <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-centertext-md py-3 px-8 rounded-xl duration-200 ease-in-out">
            JAVA
          </a>
        </div>
        <div className="container mb-12 mx-auto px-4 md:px-12">
          <ProjectCard
              image="https://picsum.photos/600/400/?random"
              title="Project 1"
              mirrored={true}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
              githubLink="https://github.com/ntaheij/project1"
              websiteLink="https://ntaheij.github.io/project1"
              
          />
          <ProjectCard 
              image="https://picsum.photos/600/400/?random"
              title="Project 1"
              mirrored={false}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
              githubLink="https://github.com/ntaheij/project1"
              websiteLink="https://ntaheij.github.io/project1"
          />
          <ProjectCard 
              image="https://picsum.photos/600/400/?random"
              title="Project 1"
              mirrored={true}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
              githubLink="https://github.com/ntaheij/project1"
              websiteLink="https://ntaheij.github.io/project1"
          />
        </div>
      </div>
    </div>
  );
}

  