import ImageCard from "../components/cards/ImageCard";
import SkillCard from "../components/cards/about/SkillCard";
import Hero from "../components/hero/Hero";

import {useReducedMotion, motion} from "framer-motion";

import {
  PopInWhenVisible
} from "../components/effects/DisplayWhenVisible";


export default function OverMij() {
  const hero = {
    title: "Over Mij",
  };
  
  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', originX: 0 } : { scale: 1.2, color: '#1d4ed8', originX: 0, originY: 0 };

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
              Minima numquam nesciunt libero maxime voluptates voluptatibus laboriosam adipisci blanditiis culpa asperiores molestias aliquam ullam explicabo ratione reprehenderit officiis, autem quidem quae nobis ducimus magni ad. Repellendus obcaecati tenetur officia!"
              image="https://picsum.photos/512/256/?random"
            >
              <motion.div className="flex leading-tight p-2 md:p-4"
              whileHover= { animateIcon }
              whileFocus= { animateIcon }
              >
                <a className="no-underline" href="#">
                  <span className="hidden">Download CV</span>
                  <i className="fa fa-download fa-2x mr-2" />
                  <span className="text-center text-xl text-grey-darker my-1">Download CV</span>
                </a>

              </motion.div>
            </ImageCard>
        </div>
      </div>

      {/* Skills */}
      <div id="skills">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Skills</h1>

        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="0.0"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="0.2"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="0.4"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="0.6"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="0.8"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              delay="1.0"
              duration="0.4"
            >
              <SkillCard 
                  title="Skill 1"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique, maxime deleniti laboriosam facilis dolor. Molestias rerum reiciendis provident cumque vero doloremque, quas nihil saepe distinctio ducimus quidem consequuntur laudantium.
                  Mollitia nemo voluptas accusamus, et reprehenderit beatae hic dolorum doloribus esse laudantium, quod facere rerum officia amet? Totam maxime libero doloribus ipsa ab quo magni, assumenda sed illum nemo deserunt.
                  Iure, maxime? Ipsam accusamus possimus sunt enim, fugit illo sed mollitia voluptatem ducimus ea excepturi sequi id veniam, temporibus ut eius saepe minus quos similique exercitationem minima, distinctio quisquam."
                  useTime="3"
                  link="/projects?filter=js"
                /> 
            </PopInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
}

  