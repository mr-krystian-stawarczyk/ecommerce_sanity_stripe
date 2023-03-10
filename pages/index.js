import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "../lib/client";
import { AboutMe, Gallery, Interrested } from "../components";

const Home = () => {
	return (
		<>
			<AboutMe />
			<Gallery />
			<Interrested />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, bannerData },
	};
};

export default Home;
