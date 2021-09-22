import {useReducedMotion, motion} from "framer-motion";

function ImageCard() {
  
  const shouldReduceMotion = useReducedMotion();

 	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };

  return ( 
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
              <h2 className="font-medium text-4xl mb-3">Noah Taheij</h2>
              <p className="leading-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odio voluptate alias. Non, ad velit? Placeat fugiat nam sapiente commodi, possimus quidem rerum maiores voluptate pariatur dignissimos, quibusdam error aspernatur?
              Excepturi magnam ducimus sunt quam delectus nulla porro eius voluptate, maxime repellat. Esse accusantium quasi expedita nobis nostrum alias, ex officiis ullam officia, eos sequi saepe voluptate voluptatem nihil voluptas.
              Earum, sunt harum. Ab quae temporibus pariatur iure suscipit ipsum maxime tenetur, dolorem minima fuga dolore nihil itaque iste quod corrupti rem facere sequi alias ad tempora adipisci culpa reiciendis.
              Minima numquam nesciunt libero maxime voluptates voluptatibus laboriosam adipisci blanditiis culpa asperiores molestias aliquam ullam explicabo ratione reprehenderit officiis, autem quidem quae nobis ducimus magni ad. Repellendus obcaecati tenetur officia!
              Minus, veniam aliquid. Provident possimus aspernatur laudantium, quaerat consequatur aliquam ut, tenetur impedit sit molestiae atque ab quis sequi qui nihil sed deleniti pariatur obcaecati cum iure mollitia dolor sint.
              Aperiam odit, eveniet amet enim assumenda unde sint accusamus? Qui quia quas natus tenetur amet. Quis veniam sequi at, hic et quisquam quod soluta vitae? Autem laboriosam illum cum error.</p>
          </div>
          <div className="lg:my-4 lg:mx-4 lg:col-span-1">
            <img alt="Placeholder" className="" src="https://picsum.photos/512/256/?random" />
            <div>
            <section>
                <div className="flex leading-tight p-2 md:p-4 ">
                  <a className="no-underline text-grey-darker mr-2" href="#">
                    <span className="hidden">Like</span>
                    <motion.i
                    whileHover= { animateIcon }
                    whileFocus= { animateIcon }
                    className="fa fa-download fa-2x"></motion.i>
                  </a>

                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}

export default ImageCard;