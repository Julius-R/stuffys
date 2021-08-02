/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

export default function MiniGallery() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error } = useSWR(
		"https://fakestoreapi.com/products?limit=6",
		fetcher
	);

	return (
		<>
			{data.length <= 0 ? (
				<p>Error fetching data</p>
			) : (
				<section className="text-gray-600 body-font">
					<div className="container px-3 py-12 mx-auto flex flex-wrap">
						<div className="flex w-full mb-16 flex-wrap">
							<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
								See What's Fetch
							</h1>
							<p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
								Whatever cardigan tote bag tumblr hexagon
								brooklyn asymmetrical gentrify, subway tile poke
								farm-to-table. Franzen you probably haven't
								heard of them man bun deep jianbing selfies
								heirloom.
							</p>
						</div>
						<div className="flex flex-wrap md:-m-2 -m-1">
							<div className="flex flex-wrap w-1/2">
								<div className="md:p-2 p-1 w-1/2 max-h-96">
									<Link href={`/products/${data[0].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[0].image}
											/>
										</a>
									</Link>
								</div>
								<div className="md:p-2 p-1 w-1/2 max-h-96">
									<Link href={`/products/${data[1].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[1].image}
											/>
										</a>
									</Link>
								</div>
								<div className="md:p-2 p-1 w-full max-h-96">
									<Link href={`/products/${data[2].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[2].image}
											/>
										</a>
									</Link>
								</div>
							</div>
							<div className="flex flex-wrap w-1/2">
								<div className="md:p-2 p-1 w-full max-h-96">
									<Link href={`/products/${data[3].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[3].image}
											/>
										</a>
									</Link>
								</div>
								<div className="md:p-2 p-1 w-1/2 max-h-96">
									<Link href={`/products/${data[4].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[4].image}
											/>
										</a>
									</Link>
								</div>
								<div className="md:p-2 p-1 w-1/2 max-h-96">
									<Link href={`/products/${data[5].id}`}>
										<a>
											<img
												alt="gallery"
												className="w-full object-cover h-full object-center block"
												src={data[5].image}
											/>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
