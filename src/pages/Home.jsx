import React from 'react';
import {useEffect} from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import Header from '../views/Header';
import Hero from '../views/Hero';
import AboutUs from '../views/AboutUs';
import Features from '../views/Features';
import ContactUs from '../views/ContactUs';
import Footer from '../views/Footer';
import Signup from '../views/Signup';
import {list_displays} from '../configs/config';

const Home = () => {
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});
	return (
		<div>
			<Header list_displays={list_displays} />
			<Hero />
			<Features />
			<AboutUs />
			<Signup />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default Home;
