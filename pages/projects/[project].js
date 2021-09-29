import { useRouter } from "next/router";

import Hero from "../../components/hero/Hero";
import ImageCard from "../../components/cards/ImageCard";

import {useReducedMotion, motion} from "framer-motion";
import CardCarousel from "../../components/cards/projects/CardCarousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Project1() {
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
              title={"Over " + project}
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odio voluptate alias. Non, ad velit? Placeat fugiat nam sapiente commodi, possimus quidem rerum maiores voluptate pariatur dignissimos, quibusdam error aspernatur?
              Excepturi magnam ducimus sunt quam delectus nulla porro eius voluptate, maxime repellat. Esse accusantium quasi expedita nobis nostrum alias, ex officiis ullam officia, eos sequi saepe voluptate voluptatem nihil voluptas.
              Earum, sunt harum. Ab quae temporibus pariatur iure suscipit ipsum maxime tenetur, dolorem minima fuga dolore nihil itaque iste quod corrupti rem facere sequi alias ad tempora adipisci culpa reiciendis.
              Minima numquam nesciunt libero maxime voluptates voluptatibus laboriosam adipisci blanditiis culpa asperiores molestias aliquam ullam explicabo ratione reprehenderit officiis, autem quidem quae nobis ducimus magni ad. Repellendus obcaecati tenetur officia!"
              image="https://picsum.photos/512/256/?random"
            >
              <section>
                <div className="flex leading-tight p-2 md:p-4">
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
                  <a className="no-underline text-grey-darker mr-4" href="#">
                    <span className="hidden">Like</span>
                    <motion.i
                    whileHover= { animateHeart }
                    whileFocus= { animateHeart }
                    className="fa fa-heart fa-2x"></motion.i>
                    <span className="ml-2 text-3xl text-gray-600">2</span>
                  </a>
                  
                  <a className="no-underline text-grey-darker mr-4" href="#">
                    <span className="hidden">Github</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fas fa-code-branch fa-2x"></motion.i>
                    <span className="ml-2 text-3xl text-gray-600">2</span>
                  </a>
                  
                </div>
                <div className="flex leading-tight py-2 pl-0 md:pl-2 md:py-0">
                  <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                    REACT
                    </a>
                  <a className="ml-2 bg-gray-300 hover:bg-gray-600 text-gray-700 hover:text-gray-200 font-semibold text-center text-md py-1 px-2 rounded-xl duration-200 ease-in-out">
                    TAILWINDCSS
                  </a>
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
            <CardCarousel 
              
            />
          </div>
      </div>
    </div>
  );
}

  