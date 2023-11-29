import React, {useState} from 'react';
import {useEffect} from 'react';
import Axios from 'axios'; // Don't forget to import Axios

const AddDoctor = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tableData, setTableData] = useState([]);
	const [isNotificationVisible, setIsNotificationVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		age: '',
		sex: '',
		specialization: '',
		email: '',
		password: '',
		phone_number: '',
		role: 'DOCTOR',
	});
	const [lastAddedData, setLastAddedData] = useState(null);

	const CloseIcon = () => (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='h-6 w-6'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.70711 7.29289C6.31658 6.90237 5.68342 6.90237 5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L10.5858 14L5.29289 19.2929C4.90237 19.6834 4.90237 20.3166 5.29289 20.7071C5.68342 21.0976 6.31658 21.0976 6.70711 20.7071L12 15.4142L17.2929 20.7071C17.6834 21.0976 18.3166 21.0976 18.7071 20.7071C19.0976 20.3166 19.0976 19.6834 18.7071 19.2929L13.4142 14L18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289C18.3166 6.90237 17.6834 6.90237 17.2929 7.29289L12 12.5858L6.70711 7.29289Z'
				fill='currentColor'
			/>
		</svg>
	);
	useEffect(() => {
		// Fetch data from the database on component mount
		fetchDataFromDatabase();
	}, []);

	const fetchDataFromDatabase = () => {
		Axios.post('http://localhost:3000/getdoctor')
			.then((response) => {
				if (response.data) {
					const formattedData = response.data.doctors.map((doctor) => ({
						id: doctor.id,
						name: doctor.name,
						age: doctor.age,
						email: doctor.email,
						age:doctor.age,
						sex: doctor.sex,
						phone_number: doctor.phone_number,
						specialization: doctor.doctor.length > 0 ? doctor.doctor[0].specialization : 'N/A',
					}));

					setTableData(formattedData);
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};
	const handleModalSubmit = () => {
		if (formData.name && formData.age && formData.sex && formData.email && formData.password && formData.phone_number) {
			// Use spread syntax to create a copy of formData
			const data = {...formData};

			console.log('Form Data:', data);

			// Assuming you have a backend endpoint to handle the post request
			Axios.post('http://localhost:3000/addUser', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					if (response.data) {
						alert('Doctor Added Successfully');
						console.log('Successful');
						setTableData([...tableData, data]);
						setLastAddedData(data);
						setIsModalOpen(false);
						setIsNotificationVisible(true);
					}
				})
				.catch((error) => {
					// Handle any errors
					alert('Failed to Add Doctor');
					console.error('Error:', error);
				});

			setFormData({
				name: '',
				age: '',
				sex: '',
				specialization: '',
				email: '',
				password: '',
				phone_number: '',
				role: 'DOCTOR',
			});

			setTimeout(() => {
				setIsNotificationVisible(false);
			}, 10000);
		} else {
			alert('Please fill in all required fields.');
		}
	};

	const handleUndoClick = () => {
		if (lastAddedData) {
			Axios.delete(`http://localhost:3000/removeDoctor/${lastAddedData.id}`)
				.then((response) => {
					if (response.data) {
						alert('Doctor removed successfully');
						const updatedTableData = tableData.filter((item) => item.id !== lastAddedData.id);
						setTableData(updatedTableData);
						setIsNotificationVisible(false);
						setLastAddedData(null);
					}
				})
				.catch((error) => {
					console.error('Error removing doctor:', error);
					alert('Failed to remove doctor');
				});
		}
	};

	// const handleRemove = (index) => {
	// 	const updatedTableData = [...tableData];
	// 	updatedTableData.splice(index, 1);
	// 	setTableData(updatedTableData);
	// 	alert('Doctor removed successfully');
	// };

	const handleRemove = (email, index) => {
		console.log(email, index);
		Axios.delete(`http://localhost:3000/removeusr/${email}`)
			.then((response) => {
				if (response.data.success) {
					alert('Doctor removed successfully');
					const updatedTableData = tableData.filter((item) => item.email !== email);
					setTableData(updatedTableData);
				} else {
					alert('Failed to remove doctor');
				}
			})
			.catch((error) => {
				console.error('Error removing doctor:', error);
				alert('Failed to remove doctor');
			});
	};

	return (
		<div className='w-full max-w-screen-lg mx-auto mt-8'>
			<div className='text-center mb-8'>
				<button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setIsModalOpen(true)}>
					Add Doctors
				</button>
				{/* Modal */}
				{isModalOpen && (
					<div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
						<div className='bg-white p-8 rounded-lg'>
							<button
								onClick={() => setIsModalOpen(false)}
								className='absolute right-4 top-24 text-white hover:text-gray-800'
							>
								<CloseIcon />
							</button>
							<h2 className='text-2xl font-bold mb-4'>Add Doctors</h2>
							<form className=' w-full max-w-screen-md mx-auto gap-4 container mx-wrap '>
								{/* Input fields for time, date, doctor name, specialization */}
								<div>
								<label className='block mb-2 w-full px-4'>
									Name
									<input
										type='text'
										value={formData.name}
										required
										onChange={(e) => setFormData({...formData, name: e.target.value})}
										className='flex px-3 py-2 border border-gray-700 rounded'
									/>
								</label>
								</div>
								<div >
								<label className='block mb-2 w-full px-4'>
									Age
									<input
										type='numeric'
										value={formData.age}
										required
										onChange={(e) => setFormData({...formData, age: e.target.value})}
										className='flex w-full px-3 py-2 border border-gray-700 rounded'
									/>
								</label>
								</div>
								<div>
												<label htmlFor='gender' className='block text-sm font-medium text-gray-700 mb-1 w-full px-5'>
													Gender
												</label>
												<select
													id='gender'
													value={formData.sex}
													onChange={(e) => setFormData({...formData, sex: e.target.value})}
													className='flex w-full px-3 py-2.5 border border-gray-700 rounded'
													required
												>
													<option className='font-semibold' value=''>
														Select Gender
													</option>
													<option className='font-semibold' value='male'>
														Male
													</option>
													<option className=' font-semibold' value='female'>
														Female
													</option>
													<option className='font-semibold' value='other'>
														Other
													</option>
												</select>
											</div>
								<div className='w-4/7'>
								<label className='block mb-2 w-full px-4'>
									Specialization
									<input
										type='text'
										value={formData.specialization}
										required
										onChange={(e) => setFormData({...formData, specialization: e.target.value})}
										className='flex w-full px-3 py-2 border border-gray-700 rounded'
									/>
								</label>
								</div>
								<div className='w-3/5'>
								<label className='block mb-2 w-full px-4'>
									Email
									<input
										type='email'
										value={formData.email}
										required
										onChange={(e) => setFormData({...formData, email: e.target.value})}
										className='flex w-full px-3 py-2 border border-gray-800 rounded'
									/>
								</label>
								</div>
								<div>
								<label className='block mb-2 w-full px-4'>
									Password
									<input
										type='password'
										value={formData.password}
										required
										onChange={(e) => setFormData({...formData, password: e.target.value})}
										className='flex w-full px-3 py-2 border border-gray-700 rounded'
									/>
								</label>
								</div>
								<div>
								<label className='block mb-2 w-full px-4'>
									Phone Number
									<input
										type='tel'
										value={formData.phone_number}
										required
										onChange={(e) => setFormData({...formData, phone_number: e.target.value})}
										className='w-full px-3 py-2 border border-gray-700 rounded'
									/>
								</label>
								</div>
								<div className='flex justify-center'>
								<button type='button' onClick={handleModalSubmit} className='px-4 py-2 bg-blue-500 text-white rounded w-full'>
									Submit
								</button>
								</div>
							</form>
						</div>
					</div>
				)}
				{/* Notification */}
				{isNotificationVisible && (
					<div className='bg-green-500 text-white p-4 fixed bottom-0 right-0 m-4 rounded'>
						<p>Doctor added!</p>
						<button onClick={handleUndoClick} className='ml-4'>
							Undo
						</button>
					</div>
				)}
			</div>
			<div className='mt-12 shadow-sm border rounded-lg overflow-x-auto'>
				<table className='w-full table-fixed text-xl text-center card-gradient'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Name</th>
							<th className='py-3 px-6'>Age</th>
							<th className='py-3 px-6'>Sex</th>
							<th className='py-3 px-6'>Specialization</th>
							<th className='py-3 px-6'>Phone Number</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>
					<tbody className='dark:text-white divide-y'>
						{tableData.map((item, idx) => (
							<tr key={idx}>
								<td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.age}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.sex}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.specialization}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.phone_number}</td>
								<td>
									<button
										className='px-4 py-2 hover:bg-red-500 dark:text-white rounded justify-center'
										onClick={() => handleRemove(item.email, idx)}
									>
										Remove
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

export default AddDoctor;
