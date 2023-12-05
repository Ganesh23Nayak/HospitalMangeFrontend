import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const PatientDashBoard = (userid) => {
	const [activeTab, setActiveTab] = useState('first');
	const [tableData, setTableData] = useState({
		first: [],
		second: [],
	});

	const id = parseInt(userid.userid);

	useEffect(() => {
		fetchAppointments();
	}, []);

	const fetchAppointments = async () => {
		try {
			const response = await Axios.post('http://localhost:3000/getpatientappointments', {id});
			if (response.data && response.data.appointments) {
				const formattedData = response.data.appointments.map((appointment) => ({
					id: appointment.id,
					name: appointment.doctor.user.name,
					email: appointment.doctor.user.email,
					problem: appointment.status,
					date: new Date(appointment.appointment_date).toLocaleDateString(),
					time: new Date(appointment.appointment_time).toLocaleTimeString(),
					status: appointment.status,
				}));

				console.log(formattedData);

				const requests = formattedData.filter((item) => item.status === 'SCHEDULED' || item.status === 'CANCELED');
				const appointments = formattedData.filter((item) => item.status === 'CONFIRMED');

				setTableData({first: requests, second: appointments});
			}
		} catch (error) {
			console.error('Error fetching appointments:', error);
		}
	};

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

	// const handleDelete = async (idx) => {
	// 	console.log('appointment id', idx);
	// 	if (window.confirm('Are you sure you want to delete this appointment?')) {
	// 		try {
	// 			// Send a request to the backend to delete the appointment
	// 			const response = await Axios.delete('http://localhost:3000/deleteAppointment', {data: {appointmentId: idx}});

	// 			if (response.data.success) {
	// 				// If deletion is successful, update the state to remove the appointment
	// 				const updatedTableData = [...tableData[activeTab]];
	// 				const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
	// 				updatedTableData.splice(indexToRemove, 1);
	// 				setTableData({...tableData, [activeTab]: updatedTableData});

	// 				alert('Appointment deleted successfully!');
	// 			} else {
	// 				alert('Error deleting appointment. Please try again.');
	// 			}
	// 		} catch (error) {
	// 			console.error('Error deleting appointment:', error);
	// 			alert('Error deleting appointment. Please try again.');
	// 		}
	// 	}
	// };
	const handleDelete = async (idx) => {
		console.log('appointment id', idx);
		if (window.confirm('Are you sure you want to delete this appointment?')) {
			try {
				// Send a request to the backend to delete the appointment
				const response = await Axios.delete('http://localhost:3000/deleteAppointment', {
					data: {appointmentId: idx},
				});

				if (response.data.deletedAppointment) {
					// If deletion is successful, update the state to remove the appointment
					const updatedTableData = tableData[activeTab].filter((item) => item.id !== idx);
					setTableData({...tableData, [activeTab]: updatedTableData});

					alert('Appointment deleted successfully!');
				} else {
					alert('Error deleting appointment. Please try again.');
				}
			} catch (error) {
				console.error('Error deleting appointment:', error);
				alert('Error deleting appointment. Please try again.');
			}
		}
	};

	return (
		<section id='dashboard'>
			<div className='mt-12 shadow-sm rounded-lg overflow-x-auto'>
				<div className='flex justify-center'>
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
				<table className='w-full table-fixed text-xl text-center card-gradient'>
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
								<td className={`px-6 py-4 whitespace-nowrap sm:w-1/4 md:w-1/6 ${changeColor(item.status)}`}>
									<span className='px-3 py-2 rounded font-semibold text-sm'>{item.status}</span>
								</td>
								<td>
									<button
										className='px-4 py-2 hover:bg-red-500 dark:text-white rounded justify-center'
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
