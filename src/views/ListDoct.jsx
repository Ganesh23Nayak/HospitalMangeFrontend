import React from 'react';
import {useState} from 'react';
import SignupLeft from '../components/SVG/SignupLeft';
import SignupRight from '../components/SVG/SignupRight';
import DocCards from '../components/DocCards';
import Headings from '../components/Headings';
import Modal from '../components/Modal';
import Axios from 'axios';
import {useEffect} from 'react';

const ListDoct = (userid) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedPerson, setSelectedPerson] = useState({});
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		Axios.post(`${import.meta.env.VITE_API_URL}/getdoctor`)
			.then((response) => {
				// console.log(response.data.doctors);
				const formattedDoctors = response.data.doctors.map((doctor) => {
					return {
						doctorId: doctor.id,
						name: doctor.name,
						department: doctor.doctor[0]?.specialization || '', // Assuming there is always one specialization
						gender: doctor.sex,
						phone: doctor.phone_number,
						email: doctor.email,
					};
				});

				setDoctors(formattedDoctors);
			})
			.catch((error) => {
				console.error('Error fetching doctors:', error);
			});
	}, []);

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
		const id = parseInt(userid.userid);
		console.log(id);
		const data = {
			patientId: id,
			health_conditions: formData.description,
			doctorId: formData.person.doctorId,
			appointment_date: new Date(formData.date + 'T' + formData.time).toISOString(),
			appointment_time: new Date(formData.date + 'T' + formData.time).toISOString(),
		};

		console.log(data);

		Axios.post(`${import.meta.env.VITE_API_URL}/addAppointment`, data, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.data) {
					console.log(response.data);
					alert('Appointment Booked Successfully');
				}
			})
			.catch((error) => {
				// Handle any errors
				alert('failed to book appointment. Please try again later.');
				console.error('Error:', error);
			});
	};

	console.log(doctors);

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
