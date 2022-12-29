import React from "react";
import Head from "next/head";
import NavbarComp from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title> Square Style</title>
			</Head>
			<header>
				<NavbarComp />
			</header>
			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
