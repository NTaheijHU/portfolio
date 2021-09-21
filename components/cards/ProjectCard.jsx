import {useReducedMotion, motion} from "framer-motion";

export default function ProjectCard() {

    const shouldReduceMotion = useReducedMotion();

    let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


    return(
			<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
				<article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
					<a href="#">
						<img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
					</a>

					<header className="p-2 md:p-4">
						<a className="no-underline text-black" href="#">
							<h1 className="text-4xl font-bold text-center">
									Project Naam
							</h1>
						</a>
					</header>

					<section className="flex px-2 pb-4 md:px-4 md:pb-4">
						<a className="no-underline text-black" href="#">
							<p className="text-md">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis.&nbsp;
									<a className="no-underline hover:underline text-blue-700">
										Lees meer...
									</a>
							</p>
							<p>
							</p>
						</a>
					</section>

					<section>
						<div className="flex leading-tight p-2 md:p-4 ">
							<a className="no-underline text-grey-darker mr-2" href="#">
								<span className="hidden">Like</span>
								<motion.i
								whileHover= { animateHeart }
								whileFocus= { animateHeart }
								className="fa fa-heart fa-2x"></motion.i>
							</a>

							<a className="no-underline text-grey-darker mr-2" href="#">
								<span className="hidden">Like</span>
								<motion.i
								whileHover= { animateIcon }
								whileFocus= { animateIcon }
								className="fab fa-github fa-2x"></motion.i>
							</a>

							<a className="no-underline text-grey-darker mr-2" href="#">
								<span className="hidden">Like</span>
								<motion.i
								whileHover= { animateIcon }
								whileFocus= { animateIcon }
								className="far fa-window-maximize fa-2x"></motion.i>
							</a>
						</div>
					</section>
				</article>
			</div>
    );
}