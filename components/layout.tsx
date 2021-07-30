import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IProps {
	title: string;
	children: ReactNode;
}

const Layout = ({ title, children }: IProps) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<title>{title}</title>
			</Head>
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link href="/">
						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<span className="ml-3 text-xl">Stuffs</span>
						</a>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link href="/">
							<a className="mr-5 hover:text-gray-900">Home</a>
						</Link>
						<Link href="/products">
							<a className="mr-5 hover:text-gray-900">Products</a>
						</Link>
					</nav>
				</div>
			</header>
			{children}
			<footer className="text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
						<span className="ml-3 text-xl">Stuffs</span>
					</p>
					<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
						Proudly made by —
						<a
							href=""
							className="text-gray-600 ml-1"
							rel="noopener noreferrer"
							target="_blank"
						>
							Julius
						</a>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Layout;
