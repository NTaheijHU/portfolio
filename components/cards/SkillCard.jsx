import {useReducedMotion, motion} from "framer-motion";

export default function SkillCard(props) {

  const shouldReduceMotion = useReducedMotion();

  	let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


    return(
			<div className="">
				<article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
					<a href="#" className="flex justify-center items-center mt-2 md:mt-4">
            <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/48/48/?random" />
					</a>

					<header className="p-2 md:p-4">
						<a className="no-underline text-black" href="#">
							<h1 className="text-4xl font-bold text-center">
									{props.title}
							</h1>
						</a>
					</header>

					<section className="pb-2 md:pb-4">
						<a className="no-underline text-black text-center" href="#">
							<p className="text-2xl">
								Ervaring: {props.experience}
							</p>
							<p className="text-2xl">
								Gebruikstijd: {props.useTime} jaar
							</p>
							<p className="text-2xl">
								<a className="no-underline hover:underline text-blue-700" href={props.link}>
									Lees meer...
								</a>
							</p>
						</a>
					</section>
				</article>
			</div>
    );
}