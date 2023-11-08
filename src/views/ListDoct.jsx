import React from 'react';
import SignupLeft from '../components/SVG/SignupLeft';
import SignupRight from '../components/SVG/SignupRight';
import DocCards from '../components/DocCards';
import Headings from '../components/Headings';

const ListDoct = () => {
	const doctors = [
		{
			name: 'Roseanne Park',
			department: 'Vocalist | Dancer',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
		{
			name: 'Roseanne Park',
			department: 'Vocalist | Dancer',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
		{
			name: 'Roseanne Park',
			department: 'Vocalist | Dancer',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
	];
	return (
		<section id='bookappointments' className='relative z-10 pt-[120px] pb-20 bg-screen'>
			<div className='container'>
				<div className='mx-wrap'>
					<Headings title={'Book Appointments'} />
					<div className='w-full px-4'>
						<div className='mx-auto max-w-[700px] text-center mb-[100px] fadeInLeft-hidden'>
							<h3 className='text-body font-bold text-3xl sm:text-4xl md:text-[45px] mb-4'>Find the best doctors</h3>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap justify-center mx-[-16px]'>
					{doctors.map((p, i) => (
						<DocCards person={p} key={i} />
					))}
				</div>
			</div>
			<div className='absolute top-5 right-0 z-[-1]'>
				<SignupRight />
			</div>
			<div className='absolute left-0 bottom-5 z-[-1]'>
				<SignupLeft />
			</div>
		</section>
	);
};

export default ListDoct;
