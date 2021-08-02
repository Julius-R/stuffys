import { GetServerSideProps } from "next";
import Layout from "../../components/layout";

export default function Product() {
	return <Layout title="Product Page">Hi</Layout>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context);
	return { props: { context } };
};
