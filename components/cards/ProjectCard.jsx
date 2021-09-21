import {useReducedMotion, motion} from "framer-motion";

export default function ProjectCard(props) {

  const shouldReduceMotion = useReducedMotion();

  let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


    return(
			<div className="">
				<article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
					<a href="#">
						<img alt="Placeholder" className="block h-auto w-full" src={props.image} />
					</a>

					<header className="p-2 md:p-4">
						<a className="no-underline text-black" href="#">
							<h1 className="text-4xl font-bold text-center">
									{props.title}
							</h1>
						</a>
					</header>

					<section className="flex px-2 pb-4 md:px-4 md:pb-4">
						<div className="no-underline text-black" href="#">
							<p className="text-md">
									{props.text}
									<a className="no-underline hover:underline text-blue-700" href={props.link}>
										Lees meer...
									</a>
							</p>
						</div>
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
						</div>
					</section>
				</article>
			</div>
    );
}