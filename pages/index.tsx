import Hero from "../components/Hero";
import Layout from "../components/layout";
import MiniGallery from "../components/MiniGallery";

export default function Home() {
	return (
		<Layout title="Stuffs | Yup, we're a store!">
			<Hero />
			<MiniGallery />
		</Layout>
	);
}
