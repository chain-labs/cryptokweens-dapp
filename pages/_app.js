import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import '../App.css';
import '../index.css';
import '../src/styleguide/globalStyles.css';
import Footer from '../src/components/Footer';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="assets/css/bootstrap-grid.min.css" />
				<link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
				<link rel="stylesheet" href="assets/css/magnific-popup.css" />
				<link rel="stylesheet" href="assets/css/select2.min.css" />
				<link rel="stylesheet" href="assets/css/main.css" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default MyApp;
