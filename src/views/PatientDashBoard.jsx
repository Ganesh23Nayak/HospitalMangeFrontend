import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

const PatientDashBoard = (userid) => {
	const [appointments, setAppointments] = useState([]);
	const [activeTab, setActiveTab] = useState('first');

	const id = parseInt(userid.userid);
	console.log('pdash', id);
	useEffect(() => {
		fetchAppointments();
	}, []);

	const fetchAppointments = async () => {
		try {
			const response = await Axios.post('http://localhost:3000/getappointments', {id});
			// if (response.data && response.data.appointments) {
			// 	const formattedData = response.data.appointments.map((appointment) => ({
			// 		id: appointment.id,
			// 		name: appointment.doctor.user.name, // Assuming patient has a name property
			// 		email: appointment.doctor.user.email, // Assuming patient has an email property
			// 		problem: appointment.status,
			// 		date: new Date(appointment.appointment_date).toLocaleDateString(), // Format date
			// 		time: new Date(appointment.appointment_time).toLocaleTimeString(),
			// 		status: appointment.status,
			// 	}));
			// 	console.log(response.data);
			// }
		} catch (error) {
			console.error('Error fetching appointments:', error);
		}
	};

	const [tableData, setTableData] = useState({
		first: [
			{
				id: 1,
				name: 'John Doe',
				email: 'p2y9P@example.com',
				time: '10:00 AM',
				date: '2022-01-01',
				status: 'SCHEDULED',
			},
			{
				id: 2,
				name: 'John Doe',
				email: 'p2y9P@example.com',
				time: '10:00 AM',
				date: '2022-01-01',
				status: 'CANCELED',
			},
		],
		second: [
			{
				id: 1,
				name: 'Suiii Doe',
				email: 'p2y9P@example.com',
				time: '10:00 AM',
				date: '2022-01-01',
				status: 'ACCEPTED',
			},
		],
	});

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const changeColor = (status) => {
		if (status === 'CONFIRMED') {
			return ' bg-green-500';
		} else if (status === 'CANCELED') {
			return ' bg-red-500';
		} else if (status === 'SCHEDULED') {
			return ' bg-yellow-500';
		} else {
			return ' bg-green-500';
		}
	};

	// const handleDelete = (id) => {
	// 	if (window.confirm('Are you sure you want to delete this appointment?')) {
	// 		// Send a request to the backend to delete the appointment
	// 		Axios.post('http://localhost:3000/', {appointmentId: id})
	// 			.then((response) => {
	// 				if (response.data.success) {
	// 					// If deletion is successful, update the state to remove the appointment
	// 					const updatedTableData = [...tableData[activeTab]];
	// 					const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
	// 					updatedTableData.splice(indexToRemove, 1);
	// 					setTableData({...tableData, updatedTableData});

	// 					alert('Appointment deleted successfully!');
	// 				} else {
	// 					alert('Error deleting appointment. Please try again.');
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.error('Error deleting appointment:', error);
	// 				alert('Error deleting appointment. Please try again.');
	// 			});
	// 	}
	// };

	return (
		<section id='dashboard'>
			<div className='mt-12 shadow-sm  rounded-lg overflow-x-auto'>
				<div className='flex  justify-center '>
					<button
						className={`px-4 py-2 rounded-tl-md ${
							activeTab === 'first' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'
						}`}
						onClick={() => handleTabClick('first')}
					>
						Requests
					</button>
					<button
						className={`px-4 py-2 rounded-tr-md ${
							activeTab === 'second' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
						}`}
						onClick={() => handleTabClick('second')}
					>
						Appointments
					</button>
				</div>
				<table className='w-full table-fixed  text-xl text-center card-gradient'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Doctor Name</th>
							<th className='py-3 px-6'>Email</th>
							<th className='py-3 px-6'>Appointment time</th>
							<th className='py-3 px-6'>Appointment Date</th>
							<th className='py-3 px-6'>Status</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>
					<tbody className='dark:text-white divide-y p-4'>
						{tableData[activeTab].map((item, idx) => (
							<tr key={idx}>
								<td className='px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6'>{item.email}</td>
								<td className='px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6'>{item.time}</td>
								<td className='px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6'>{item.date}</td>
								<td className='px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6 '>
									<span className={`px-3 py-2 rounded font-semibold text-sm${changeColor(item.status)}`}>
										{item.status}
									</span>
								</td>
								<td>
									<button
										className='px-4 py-2 hover:bg-red-500  dark:text-white rounded justify-center'
										onClick={() => handleDelete(item.id)}
									>
										CANCEL
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default PatientDashBoard;
