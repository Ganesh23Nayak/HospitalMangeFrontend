import React, {useState} from 'react';

const DoctorTable = () => {
	const [activeTab, setActiveTab] = useState('first');

	const [tableData, setTableData] = useState({
		first: [
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
		],
		second: [
			// ... Table data for the second tab
			{
				name: 'Liam James',
				email: 'liamjames@example.com',
				problem: 'Sore Eyes',
				date: '2023-11-01',
				time: '10 AM',
			},
		],
		// Add more tabs and their respective data if needed
	});

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const handleDelete = (index) => {
		const updatedTableData = [...tableData[activeTab]];
		updatedTableData.splice(index, 1);
		setTableData({...tableData, [activeTab]: updatedTableData});
	};

	return (
		<div id='dashboard' className='w-full max-w-screen-lg mx-auto mt-8'>
			<div className='flex mb-4 justify-center'>
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
				<table className='w-full'>
					<thead className='bg-gray-50 text-gray-600 font-medium border-b'>
						<tr>
							<th className='py-3 px-6'>Patient Name</th>
							<th className='py-3 px-6'>Problem</th>
							<th className='py-3 px-6'>Date</th>
							<th className='py-3 px-6'>Time</th>
							<th className='py-3 px-6'></th>
						</tr>
					</thead>

					<tbody className='text-gray-600 divide-y justify-center'>
						{tableData[activeTab].map((item, idx) => (
							<tr className='text-center' key={idx}>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.name}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.problem}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.date}</td>
								<td className='px-6 py-4 whitespace-nowrap dark:text-white'>{item.time}</td>
								<td onSet className='text-right px-6 whitespace-nowrap'>
									<a
										href='javascript:void()'
										className='py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-green-200 rounded-lg'
									>
										ACCEPT
									</a>
									<button
										onClick={() => handleDelete(idx)}
										href='javascript:void()'
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
