import {useReducedMotion, motion} from "framer-motion";

export default function ReviewCard(props) {

  const shouldReduceMotion = useReducedMotion();

  	let animateHeart = shouldReduceMotion ? { scale: 1, color: '#db2777', origin: 0 } : { scale: 1.2, color: '#db2777', origin: 0 };
	let animateIcon = shouldReduceMotion ? { scale: 1, color: '#1d4ed8', origin: 0 } : { scale: 1.2, color: '#1d4ed8', origin: 0 };


    return(
			<div className="">
				<section className= "pt-4 bg-white rounded-xl shadow mx-auto my-10">
					<blockquote className="m-2 lg:m-4">
						<p className= "font-semibold"> "{props.quote}" </p>
					</blockquote>
					
					<div className= "text-white bg-blue-500 p-8 rounded-b-xl md:flex md:items-center">
						<img src={props.image} alt="" className="w-24 h-24 rounded-full border-4 border-white md:mr-4" />
						<div>
						<p className="font-bold"> {props.name}</p>
						<p> {props.company}</p>
						</div>
					</div>
				</section>
			</div>
    );
}