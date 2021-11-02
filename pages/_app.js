import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import StateProvider from 'components/StateContext';
import '../App.css';
import '../index.css';
import '../src/styleguide/globalStyles.css';
import Footer from '../src/components/Footer';
import { ethers } from 'ethers';


const MyApp = ({ Component, pageProps }) => {
	return (
		<StateProvider>
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
		</StateProvider>
	);
};

export default MyApp;
