import React, {useState, useEffect} from 'react';
import Axios from 'axios';
const AddDoct = () => {
	const [tableData, setTableData] = useState([]);
	const [isNotificationVisible, setIsNotificationVisible] = useState(false);
	useEffect(() => {
		// Fetch data from the backend on component mount
		fetchDataFromBackend();
	}, []);

	const fetchDataFromBackend = () => {
		Axios.post(`${import.meta.env.VITE_API_URL}/getpatient`) // Adjust the endpoint as per your backend API
			.then((response) => {
				if (response.data) {
					const formattedData = response.data.patients.map((patient) => ({
						id: patient.id,
						name: patient.name,
						age: patient.age,
						email: patient.email,
						sex: patient.sex,
						phone_number: patient.phone_number,
					}));

					setTableData(formattedData);
				}
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};

	const handleRemove = (email, index) => {
		console.log(email, index);
		Axios.delete(`${import.meta.env.VITE_API_URL}/removeusr/${email}`)
			.then((response) => {
				if (response.data.success) {
					alert('Patient removed successfully');
					const updatedTableData = tableData.filter((item) => item.email !== email);
					setTableData(updatedTableData);
				} else {
					alert('Failed to remove patient');
				}
			})
			.catch((error) => {
				console.error('Error removing patient:', error);
				alert('Failed to remove patient');
			});
	};

	return (
		<div className='w-full max-w-screen-lg mx-auto mt-8'>
			<div className='text-center mb-8'>
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
			<div className='mt-12 shadow-sm border rounded-lg overflow-x-auto'>
				<table className='w-full table-fixed  text-xl text-center card-gradient'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Name</th>
							<th className='py-3 px-6'>Age</th>
							<th className='py-3 px-6'>Gender</th>
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

export default AddDoct;
