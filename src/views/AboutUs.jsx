import React from 'react';

const AboutUs = () => {
	return (
		<section id='about'>
			<div className='pt-[120px] '>
				<div className='container'>
					<div className='pb-[100px] border-b border-white border-opacity-[.15] '>
						<div className='items-center '>
							<div className='w-full px-4 '>
								<div className='mx-auto max-w-[700px] text-center mb-[25px] fadeIn-hidden'>
									<h2 className='text-body font-bold text-3xl sm:text-4xl md:text-[45px] lg:text-4xl xl:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-6 '>
										About us
									</h2>
									<p className='font-medium text-sub text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-11'>
									Welcome to Medicare, where convenience meets efficiency in managing your appointments seamlessly.

									At Medicare, we understand the value of your time, and we're committed to making appointment booking a breeze. 

									Our platform is not just about booking; it's about simplifying your life. With personalized profiles, you can keep track of your upcoming appointments, access past bookings, and receive timely reminders so you never miss an important date again.
									</p>
									<div className='flex flex-wrap mx-[-12px] text-center'>
										<div className='mx-auto max-w-[700px] mb-[25px]'>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												Premium quality
											</p>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												No code required
											</p>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												Use for lifetime
											</p>
										</div>
										<div className='mx-auto max-w-[700px] mb-[25px]'>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												Regular updates
											</p>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												Rich documentation
											</p>
											<p className='flex items-center text-sub text-lg font-medium mb-5'>
												<CheckBoxSVG />
												Developer friendly
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='w-full lg:w-1/2 px-4'>
								{/* <div className='text-center lg:text-right fadeIn-hidden'>
									<img src={AboutImage01} alt='about' className='max-w-full mx-auto lg:mr-0' />
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const CheckBoxSVG = () => (
	<span className='w-[30px] h-[30px] flex-center rounded-md bg-primary-900 bg-opacity-10 text-primary-900 mr-4'>
		<svg width={16} height={13} viewBox='0 0 16 13' className='fill-green-400'>
			<path d='M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z' />
		</svg>
	</span>
);

export default AboutUs;
