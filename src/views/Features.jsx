import React from 'react';
import Heading from '../components/Headings';
import FeatureCard from '../components/FeatureCard';
import {FeatureSVG1, FeatureSVG2, FeatureSVG3} from '../components/SVG/FeatureSVG';

const Features = () => {
	const featuresList = [
		{
			title: 'Appointements booking',
			svg: <FeatureSVG1 />,
		},
		{
			title: 'High-security',
			svg: <FeatureSVG2 />,
		},
		{
			title: 'All Essential Features',
			svg: <FeatureSVG3 />,
		},
	];
	return (
		<section id='features' className='bg-screen pt-[120px] pb-[50px]'>
			<div className='container'>
				<div className='mx-wrap '>
					<Heading title={'Main Features'} />
				</div>
				<div className='mx-wrap gap-y-20 mx-auto max-w-[1000px] text-center '>
					{featuresList.map((f, i) => (
						<FeatureCard info={f} key={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
