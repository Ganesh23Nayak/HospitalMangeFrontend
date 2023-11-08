import React from 'react';

const Footer = () => {
	const tuanhngf = 'https://tuanhngf.dev/';
	return (
		<footer className=' border-t-2 dark:border-primary-50/5'>
			<div className='py-4 container'>
				<div className='flex items-center gap-2 justify-center'>
					<a href={tuanhngf} target='_blank' rel='noopener noreferrer'>
						{/* <img src="/logo100.png" alt="tuanhngf.dev" className="w-8" /> */}
					</a>
					<p className='text-sub'>2023 © Startup. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
