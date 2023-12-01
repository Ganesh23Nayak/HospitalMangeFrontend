import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

const PatientDashBoard = (userid) => {
	const [appointments, setAppointments] = useState([]);
	const id = parseInt(userid.userid);
	console.log('pdash', id);
	useEffect(() => {
		fetchAppointments();
	}, []);

	const fetchAppointments = async () => {
		try {
			const response = await Axios.post('http://localhost:3000/getappointments', {id});
			if (response.data && response.data.appointments) {
				const formattedData = response.data.appointments.map((appointment) => ({
					id: appointment.id,
					name: appointment.doctor.user.name, // Assuming patient has a name property
					email: appointment.doctor.user.email, // Assuming patient has an email property
					problem: appointment.status,
					date: new Date(appointment.appointment_date).toLocaleDateString(), // Format date
					time: new Date(appointment.appointment_time).toLocaleTimeString(),
					status: appointment.status,
				}));
				console.log(response.data);
			}
		} catch (error) {
			console.error('Error fetching appointments:', error);
		}
	};

	const handleDelete = (id) => {
		if (window.confirm('Are you sure you want to delete this appointment?')) {
			// Send a request to the backend to delete the appointment
			Axios.post('http://localhost:3000/', {appointmentId: id})
				.then((response) => {
					if (response.data.success) {
						// If deletion is successful, update the state to remove the appointment
						const updatedTableData = [...tableData[activeTab]];
						const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
						updatedTableData.splice(indexToRemove, 1);
						setTableData({...tableData, updatedTableData});

						alert('Appointment deleted successfully!');
					} else {
						alert('Error deleting appointment. Please try again.');
					}
				})
				.catch((error) => {
					console.error('Error deleting appointment:', error);
					alert('Error deleting appointment. Please try again.');
				});
		}
	};

	return (
		<section id='dashboard'>
			<div className='mt-12 shadow-sm border rounded-lg overflow-x-auto'>
				<table className='w-full table-fixed  text-xl text-center card-gradient'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Doctor Name</th>
							<th className='py-3 px-6'>Gender</th>
							<th className='py-3 px-6'>Department</th>
							<th className='py-3 px-6'>Appointment time</th>
							<th className='py-3 px-6'>Appointment Date</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>
					<tbody className='dark:text-white divide-y'>
						{/* {tableData.map((item, idx) => (
							<tr key={idx}>
								<td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.gender}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.department}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.time}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.date}</td>
								<td>
									<button
										className='px-4 py-2 hover:bg-red-500  dark:text-white rounded justify-center'
										onClick={() => handleRemove(idx)}
									>
										Remove
									</button>
								</td>
							</tr>
						))} */}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default PatientDashBoard;
