import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const DoctorTable = (userid) => {
	const [activeTab, setActiveTab] = useState('first');
	const [tableData, setTableData] = useState({
		first: [],
		second: [],
	});
	const doctId = parseInt(userid.userid);
	// console.log('doct', doctId);
	useEffect(() => {
		// Fetch data from the backend on component mount
		fetchDataFromBackend();
	}, []);

	// 	const { id } = req.body;

	// 	try {
	// 	  const appointments = await prisma.appointment.findMany({
	// 		where: {
	// 		  patientId: parseInt(id),
	// 		},
	// 		include: {
	// 		  doctor: {
	// 			select: {
	// 			  user: {
	// 				select: {
	// 				  name: true,
	// 				  email: true,
	// 				},
	// 			  },
	// 			},
	// 		  },
	// 		},
	// 	  });

	// 	  res.json({ appointments });
	// 	} catch (error) {
	// 	  console.error('Error fetching appointments:', error);
	// 	  res.status(500).json({ error: 'Internal Server Error' });
	// 	}
	//   });

	const fetchDataFromBackend = () => {
		Axios.post('http://localhost:3000/getappointments', {doctId}) // Adjust the endpoint as per your backend API
			.then((response) => {
				if (response.data && response.data.appointments) {
					const formattedData = response.data.appointments.map((appointment) => ({
						id: appointment.id,
						name: appointment.patient.user.name, // Assuming patient has a name property
						email: appointment.patient.user.email, // Assuming patient has an email property
						problem: appointment.patient.health_conditions,
						date: new Date(appointment.appointment_date).toLocaleDateString(), // Format date
						time: new Date(appointment.appointment_time).toLocaleTimeString(),
						status: appointment.status,
					}));

					const scheduledAppointments = formattedData.filter((item) => item.status === 'SCHEDULED');
					const confirmedAppointments = formattedData.filter((item) => item.status === 'CONFIRMED');

					setTableData({first: scheduledAppointments, second: confirmedAppointments});

					// setTableData({first: formattedData, second: []});
				}
				// console.log(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleDelete = (id) => {
		if (window.confirm('Are you sure you want to delete this appointment?')) {
			// Send a request to the backend to delete the appointment
			Axios.post('http://localhost:3000/cancelappointment', {appointmentId: id})
				.then((response) => {
					if (response.data.success) {
						// If deletion is successful, update the state to remove the appointment
						const updatedTableData = [...tableData[activeTab]];
						const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
						updatedTableData.splice(indexToRemove, 1);
						setTableData({...tableData, [activeTab]: updatedTableData});

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

	const handleAccept = (id) => {
		console.log('appointment id ', id);

		if (window.confirm('Are you sure you want to accept this appointment?')) {
			Axios.post('http://localhost:3000/acceptappointment', {appointmentId: id})
				.then((response) => {
					if (response.data.success) {
						console.log('Appointment accepted successfully!');
						const updatedTableData = [...tableData[activeTab]];
						const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
						updatedTableData.splice(indexToRemove, 1);
						setTableData({...tableData, [activeTab]: updatedTableData});
					} else {
						alert('Error accepting appointment. Please try again.');
					}
				})
				.catch((error) => {
					console.error('Error accepting appointment catch :', error);
					alert('Error accepting appointment. Please try again.');
				});
		}
	};

	const handleDone = (id) => {
		console.log('appointment id ', id);

		if (window.confirm('Done with this appointment?')) {
			Axios.post('http://localhost:3000/doneappointment', {appointmentId: id})
				.then((response) => {
					if (response.data.success) {
						console.log('Appointment accepted successfully!');
						const updatedTableData = [...tableData[activeTab]];
						const indexToRemove = updatedTableData.findIndex((item) => item.id === id);
						updatedTableData.splice(indexToRemove, 1);
						setTableData({...tableData, [activeTab]: updatedTableData});
					} else {
						alert('Error accepting appointment. Please try again.');
					}
				})
				.catch((error) => {
					console.error('Error accepting appointment catch :', error);
					alert('Error accepting appointment. Please try again.');
				});
		}
	};

	return (
		<div id='dashboard' className='w-full max-w-screen-lg mx-auto mt-8 '>
			<div className='flex mb-4 justify-center '>
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
			<div style={{overflow: 'auto', height: '500px'}}>
				<table className='w-full '>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b '>
						<tr>
							<th className='py-3 px-6'>Patient Name</th>
							<th className='py-3 px-6'>Problem</th>
							<th className='py-3 px-6'>Date</th>
							<th className='py-3 px-6'>Time</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>

					<tbody className='text-gray-600 divide-y justify-center '>
						{tableData[activeTab].map((item, idx) => (
							<tr className='text-center' key={idx}>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.problem}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.date}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.time}</td>
								<td className='text-right px-6 whitespace-nowrap'>
									{activeTab === 'first' && (
										<button
											onClick={() => handleAccept(item.id)}
											href='/'
											className='py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-green-200 rounded-lg'
										>
											ACCEPT
										</button>
									)}

									{activeTab === 'second' && (
										<button
											onClick={() => handleDone(item.id)}
											href='/'
											className='py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-green-200 rounded-lg'
										>
											DONE
										</button>
									)}
									<button
										onClick={() => handleDelete(item.id)}
										href='/'
										className='py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-red-200 rounded-lg'
									>
										REJECT
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DoctorTable;
