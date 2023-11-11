import React from 'react';

const DocCards = ({person, onClick}) => {
	const handleCardClick = () => {
		if (onClick) {
			onClick(person);
		}
		console.log('from card Clicked card ID:', name);
	};
	const {name, department, gender, phone, email} = person;
	return (
		<div className='w-full lg:w-1/2 px-4 fadeIn-hidden testimonial-card ' onClick={handleCardClick}>
			<div className='card-gradient relative z-10 overflow-hidden rounded-lg p-8 lg:px-6 xl:px-8 mb-10 select-none cursor-pointer hover:outline hover:outline-offset-0 hover:outline-primary-800 dark:hover:outline-primary-100 transition-all '>
				<div className='sm:flex justify-between lg:block xl:flex'>
					<div className='w-full flex items-center'>
						<div className='w-full'>
							<h5 className='text-base md:text-lg lg:text-base xl:text-lg text-body font-medium mb-1'>{name}</h5>
							<p className='text-base font-medium text-sub'>{department}</p>
						</div>
					</div>
				</div>
				<p className='text-lg font-medium text-sub  leading-relaxed pt-8 mt-6 border-t border-primary-800 dark:border-primary-100'>
					{gender}
					{email}
					{phone}
				</p>
				<div className='absolute right-0 bottom-0 z-[-1]'>
					<svg width={49} height={60} viewBox='0 0 49 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle
							opacity='0.4'
							cx={37}
							cy={37}
							r={36}
							transform='rotate(-165 37 37)'
							fill='url(#paint0_linear_77:14)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_77:14'
								x1='36.3685'
								y1='91.4954'
								x2='36.3685'
								y2='5.62385'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#b76e78' />
								<stop offset={1} stopColor='#b76e78' stopOpacity={0} />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default DocCards;
