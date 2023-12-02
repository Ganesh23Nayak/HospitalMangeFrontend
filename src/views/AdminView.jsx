import React, {useState} from 'react';
import {useEffect} from 'react';
import Axios from 'axios';
const AdminView = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tableData, setTableData] = useState([]);
	const [isNotificationVisible, setIsNotificationVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		age: '',
		sex: '',
		email: '',
		password: '',
		role: 'ADMINISTRATOR',
		// Add more form fields as needed
	});
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
	const [lastAddedData, setLastAddedData] = useState(null);

	useEffect(() => {
		// Fetch data from the database on component mount
		fetchDataFromDatabase();
	}, []);

	const fetchDataFromDatabase = () => {
		Axios.post('http://localhost:3000/getadmin')
			.then((response) => {
				if (response.data) {
					const formattedData = response.data.admins.map((administrator) => ({
						id: administrator.id,
						name: administrator.name,
						age: administrator.age,
						email: administrator.email,
						sex: administrator.sex,
						password: administrator.password,
					}));
					setTableData(formattedData);
				}
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};
	const handleModalSubmit = () => {
		if (formData.name && formData.age && formData.sex && formData.email && formData.password) {
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
						alert('Admin Added Successfully');
						console.log('Successful');
						setTableData([...tableData, data]);
						setLastAddedData(data);
						setIsModalOpen(false);
						setIsNotificationVisible(true);
					}
				})
				.catch((error) => {
					// Handle any errors
					alert('Failed to Add Admin');
					console.error('Error:', error);
				});

			setFormData({
				name: '',
				age: '',
				sex: '',
				email: '',
				password: '',
				role: 'ADMINISTRATOR',
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
			const updatedTableData = tableData.filter((item) => item !== lastAddedData);
			setTableData(updatedTableData);
			setIsNotificationVisible(false);
			setLastAddedData(null);
		}
	};

	const handleRemove = (email, index) => {
		console.log(email, index);
		Axios.delete(`http://localhost:3000/removeusr/${email}`)
			.then((response) => {
				if (response.data.success) {
					alert('Admin removed successfully');
					const updatedTableData = tableData.filter((item) => item.email !== email);
					setTableData(updatedTableData);
				} else {
					alert('Failed to remove Admin');
				}
			})
			.catch((error) => {
				console.error('Error removing admin:', error);
				alert('Failed to remove admin');
			});
	};

	return (
		<div className='w-full max-w-screen-lg mx-auto mt-8 '>
			<div className='text-center mb-8'>
				<button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setIsModalOpen(true)}>
					Add Admins
				</button>
				{/* Modal */}
				{isModalOpen && (
					<div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center card-gradient'>
						<div className='bg-white p-8 rounded-lg'>
							<button
								onClick={() => setIsModalOpen(false)}
								className='absolute right-4 top-24 text-white hover:text-gray-800'
							>
								<CloseIcon />
							</button>
							<h2 className='text-2xl font-bold mb-4'>Add Admins</h2>
							<form className='w-full max-w-screen-md mx-auto gap-4 container mx-wrap '>
								{/* Input fields for time, date, doctor name, department */}
								<div>
									<label className='block mb-2 w-full px-4'>
										Name
										<input
											type='text'
											value={formData.name}
											required // Set the initial value to the form data
											onChange={(e) => setFormData({...formData, name: e.target.value})}
											className='flex w-96 px-3 py-2 border border-gray-700 rounded'
										/>
									</label>
								</div>
								<div>
									<label className='block mb- w-full px-4'>
										Age
										<input
											type='integer'
											value={formData.age}
											required
											onChange={(e) => setFormData({...formData, age: e.target.value})}
											className='flex w-20 px-3 py-2 border border-gray-700 rounded'
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
								<div>
									<label className='block mb-2 w-full px-4'>
										Email
										<input
											type='email'
											value={formData.email}
											required
											onChange={(e) => setFormData({...formData, email: e.target.value})}
											className='w-96 flex px-3 py-2 border border-gray-700 rounded'
										/>
									</label>
								</div>
								<div className='w-2/5'>
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
								<div className='flex justify-center ml-80'>
									<button
										type='button'
										onClick={handleModalSubmit}
										className='px-7 py-2 bg-blue-500 text-white rounded-full w-full'
									>
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
						<p>Appointment booked!</p>
						<button onClick={handleUndoClick} className='ml-4'>
							Undo
						</button>
					</div>
				)}
			</div>
			<div className='mt- shadow-sm border rounded-lg overflow-x-auto '>
				<table className='w-full table-fixed  text-xl text-center card-gradient'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Name</th>
							<th className='py-3 px-6'>Age</th>
							<th className='py-3 px-6'>Gender</th>
							<th className='py-3 px-6'>Email</th>
							<th className='py-3 px-6'>Password</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>
					<tbody className='dark:text-white divide-y'>
						{tableData.map((item, idx) => (
							<tr key={idx}>
								<td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.age}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.sex}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.email}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.password}</td>
								<td>
									<button
										className='px-4 py-2 hover:bg-red-500  dark:text-white rounded justify-center'
										onClick={() => handleRemove(item.email,idx)}
									>
										Remove
									</button>
								</td>
							</tr>
						))}
						{isNotificationVisible && (
							<div className='bg-green-500 text-white p-4 fixed bottom-0 right-0 m-4 rounded'>
								<p>Admin removed!</p>
								<button onClick={handleUndoClick} className='ml-4'>
									Undo
								</button>
							</div>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdminView;
