import React from 'react';
import {useState} from 'react';
import SignupLeft from '../components/SVG/SignupLeft';
import SignupRight from '../components/SVG/SignupRight';
import DocCards from '../components/DocCards';
import Headings from '../components/Headings';
import Modal from '../components/Modal';

const ListDoct = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedPerson, setSelectedPerson] = useState({});

	const doctors = [
		{
			name: 'Roseanne Park',
			department: 'ENT',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
		{
			name: 'Kritarth',
			department: 'Dermatologist',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
		{
			name: 'Shreeraksha',
			department: 'Cardiologist',
			gender: 'Male',
			phone: '(123) 456-7890',
			email: '@roseannepark.com',
		},
		{
			name: 'Jane Doe',
			department: 'General Surgeon',
			gender: 'Female',
			phone: '(123) 456-7890',
			email: '@janedoe.com',
		},
	];

	const handleCardClick = (person) => {
		console.log('from main', person);
		setSelectedPerson(person);
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleModalSubmit = (formData) => {
		console.log('Form submitted:', formData);
	};

	return (
		<section id='bookappointments' className='relative z-10 pt-[120px] pb-20 bg-screen'>
			<div className='container'>
				<div className='mx-wrap'>
					<Headings title={'Book Appointments'} />
					<div className='w-full px-4'>
						<div className='mx-auto max-w-[700px] text-center mb-[100px] fadeIn-hidden'>
							<h4 className='text-body font-bold text-1xl sm:text-4xl md:text-[45px] mb-4'>Choose the best doctors</h4>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap justify-center mx-[-16px] '>
					{doctors.map((p, i) => (
						<DocCards person={p} key={i} onClick={() => handleCardClick(p)} />
					))}
				</div>
			</div>
			<div className='absolute top-5 right-0 z-[-1]'>
				<SignupRight />
			</div>
			<div className='absolute left-0 bottom-5 z-[-1]'>
				<SignupLeft />
			</div>
			<Modal person={selectedPerson} isOpen={modalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
		</section>
	);
};

export default ListDoct;
