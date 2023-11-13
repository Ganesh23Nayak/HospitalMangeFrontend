import React, {useState} from 'react';

const AddDoct = () => {
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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [tableData, setTableData] = useState([
		{
			name: 'Liam James',
			age: 19,
			gender: 'Male',
			department: 'ENT',
		},
	]);
	const [isNotificationVisible, setIsNotificationVisible] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		age: '',
		gender: '',
		department: '',
		// Add more form fields as needed
	});
	const [lastAddedData, setLastAddedData] = useState(null);
	const handleModalSubmit = () => {
		if (formData.name && formData.age && formData.gender) {
			setTableData([...tableData, formData]);
			setLastAddedData(formData);
			setIsModalOpen(false);
			setIsNotificationVisible(true);
			setFormData({
				name: '',
				age: '',
				gender: '',
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

	return (
		<div className='w-full max-w-screen-lg mx-auto mt-8'>
			<div className='text-center mb-8'>
				<button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => setIsModalOpen(true)}>
					Add Admins
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
							<form>
								{/* Input fields for time, date, doctor name, department */}
								<label className='block mb-2'>
									Name
									<input
										type='text'
										value={formData.name}
										required // Set the initial value to the form data
										onChange={(e) => setFormData({...formData, name: e.target.value})}
										className='w-full px-3 py-2 border border-gray-300 rounded'
									/>
								</label>
								<label className='block mb-2'>
									Age
									<input
										type='integer'
										value={formData.age}
										required
										onChange={(e) => setFormData({...formData, age: e.target.value})}
										className='w-full px-3 py-2 border border-gray-300 rounded'
									/>
								</label>
								<label className='block mb-2'>
									Gender
									<input
										type='text'
										value={formData.gender}
										required
										onChange={(e) => setFormData({...formData, gender: e.target.value})}
										className='w-full px-3 py-2 border border-gray-300 rounded'
									/>
								</label>
								<button type='button' onClick={handleModalSubmit} className='px-4 py-2 bg-blue-500 text-white rounded'>
									Submit
								</button>
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
			<div className='w-full max-h-30 overflow-y-auto'>
				<table className='w-full  '>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Name</th>
							<th className='py-3 px-6'>age</th>
							<th className='py-3 px-6'>Gender</th>
						</tr>
					</thead>
					<tbody>
						{tableData.map((item, idx) => (
							<tr key={idx}>
								<td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.age}</td>
								<td className='px-6 py-4 whitespace-nowrap'>{item.gender}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AddDoct;
