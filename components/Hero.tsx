import Link from "next/link";
import img from "../styles/bg.jpg";

const Hero = () => {
	return (
		<section id="hero" className="w-full bg-center bg-cover h-96">
			<div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 ">
				<article className="text-left container text-white">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
						Before they sold out
						<br className="hidden lg:inline-block" />
						readymade gluten
					</h1>
					<p className="mb-8 leading-relaxed">
						Copper mug try-hard pitchfork pour-over freegan heirloom
						neutra air plant cold-pressed tacos{" "}
						<br className="hidden lg:inline-block" /> poke beard
						tote bag. Heirloom echo park mlkshk tote bag selvage hot
						chicken authentic tumeric truffaut hexagon try-hard
						chambray.
					</p>
					<Link href="/products">
						<a className="inline-flex text-white uppercase bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							CHECK THE SHOP
						</a>
					</Link>
				</article>
			</div>
		</section>
	);
};

export default Hero;
