import ImageCard from "../components/cards/ImageCard";
import Hero from "../components/hero/Hero";

import {useReducedMotion, motion} from "framer-motion";


export default function OverMij() {
  const hero = {
    title: "Over Mij",
  };
  
  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };

  return (
    <div>
      <Hero hero={hero} />

      {/* About Me */}
      <div id="about-me">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
            <ImageCard
              title="Noah Taheij"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odio voluptate alias. Non, ad velit? Placeat fugiat nam sapiente commodi, possimus quidem rerum maiores voluptate pariatur dignissimos, quibusdam error aspernatur?
              Excepturi magnam ducimus sunt quam delectus nulla porro eius voluptate, maxime repellat. Esse accusantium quasi expedita nobis nostrum alias, ex officiis ullam officia, eos sequi saepe voluptate voluptatem nihil voluptas.
              Earum, sunt harum. Ab quae temporibus pariatur iure suscipit ipsum maxime tenetur, dolorem minima fuga dolore nihil itaque iste quod corrupti rem facere sequi alias ad tempora adipisci culpa reiciendis.
              Minima numquam nesciunt libero maxime voluptates voluptatibus laboriosam adipisci blanditiis culpa asperiores molestias aliquam ullam explicabo ratione reprehenderit officiis, autem quidem quae nobis ducimus magni ad. Repellendus obcaecati tenetur officia!
              Minus, veniam aliquid. Provident possimus aspernatur laudantium, quaerat consequatur aliquam ut, tenetur impedit sit molestiae atque ab quis sequi qui nihil sed deleniti pariatur obcaecati cum iure mollitia dolor sint.
              Aperiam odit, eveniet amet enim assumenda unde sint accusamus? Qui quia quas natus tenetur amet. Quis veniam sequi at, hic et quisquam quod soluta vitae? Autem laboriosam illum cum error."
              image="https://picsum.photos/512/256/?random"
            >
              <div className="flex leading-tight p-2 md:p-4 ">
                <a className="no-underline text-grey-darker mr-2" href="#">
                  <span className="hidden">Download CV</span>
                  <motion.i
                  whileHover= { animateIcon }
                  whileFocus= { animateIcon }
                  className="fa fa-download fa-2x"></motion.i>
                </a>
                <p className="text-center text-xl font-medium text-grey-darker my-1">Download CV</p>
              </div>
            </ImageCard>
        </div>
      </div>
    </div>
  );
}

  