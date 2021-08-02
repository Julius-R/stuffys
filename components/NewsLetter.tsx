import { defaultConfig } from "next/dist/next-server/server/config-shared";

const NewsLetter = () => {
	return (
		<div className="pt-16">
			<div className="w-full bg-indigo-500 py-16 relative overflow-hidden">
				<div className="container mx-auto z-10 relative text-white">
					<h1 className="xl:text-4xl lg:text-4xl text-center xl:text-left font-bold pb-8">
						Sign up for product news and updates
					</h1>
					<div className="flex items-center mx-auto xl:mx-0 justify-between xl:w-1/3 lg:w-1/3 md:w-1/3 lg:mx-auto w-10/12 border-b border-white z-10">
						<input
							type="text"
							placeholder="Enter Your Email"
							className="bg-transparent text-white focus:outline-none w-11/12 pb-4"
							id="email"
							aria-label="email"
						/>
						<div className="pb-3 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-arrow-narrow-right"
								width={30}
								height={30}
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#CBD5E0"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" />
								<line x1={5} y1={12} x2={19} y2={12} />
								<line x1={15} y1={16} x2={19} y2={12} />
								<line x1={15} y1={8} x2={19} y2={12} />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NewsLetter;
