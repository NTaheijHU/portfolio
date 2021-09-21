import {useReducedMotion, motion} from "framer-motion";

export default function SkillCard() {

    const shouldReduceMotion = useReducedMotion();

    let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
		let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


    return(
			<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
				<article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
					<a href="#" className="flex justify-center items-center mt-2 md:mt-4">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/48/48/?random" />
					</a>

					<header className="p-2 md:p-4">
						<a className="no-underline text-black" href="#">
							<h1 className="text-4xl font-bold text-center">
									Skill
							</h1>
						</a>
					</header>

					<section className="pb-2 md:pb-4">
						<a className="no-underline text-black text-center" href="#">
							<p className="text-2xl">
								Ervaring: Ervaren
							</p>
							<p className="text-2xl">
								Gebruikstijd: 3 jaar
							</p>
							<p className="text-2xl">
								<a className="no-underline hover:underline text-blue-700">
									Lees meer...
								</a>
							</p>
						</a>
					</section>
				</article>
			</div>
    );
}