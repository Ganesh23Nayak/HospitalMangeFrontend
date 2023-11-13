import React, {useEffect, useState} from 'react';
import Headings from '../components/Headings';
import Admincards from '../components/Admincards';

const AdminDashBoard = () => {
	const [selectedCard, setSelectedCard] = useState(null);
	const [showTable, setShowTable] = useState(false);

	const list = [
		{
			category: 'admin',
			imgSrc:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Administrator',
			id: 'admin',
			tag:'Manage Administrators',
		},
		{
			category: 'Add Doctor',
			imgSrc:
				'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGF0aWVudHMlMjBkYXNoYm9hcmR8ZW58MHwwfDB8fHww',
			title: 'Edit Doctor',
			id: 'doctor',
			tag:'Manage Doctors',
		},
		{
			category: 'Patient',
			imgSrc:
				'https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhdGllbnRzJTIwZGFzaGJvYXJkfGVufDB8MHwwfHx8MA%3D%3D',
			title: 'View Patient',
			id: 'patient',
			tag:'Manage Patients',
		},
	];

	const handleCardClick = (id) => {
		setSelectedCard(id);
		setShowTable(true);
		console.log(showTable);
	};

	const handleBack = () => {
		setSelectedCard(null);
		setShowTable(false);
		console.log(showTable);
	};

	return (
		<section id='dashboard' className='bg-screen pt-[45px]'>
			<div className='container'>
				<div className='mx-wrap'>
					<Headings title={'Administrator Dashboard'} />
				</div>
				<div className='mx-wrap justify-center'>
					{showTable ? (
						<div>
							<button onClick={handleBack}>Back</button>
							{selectedCard === null ? (
								list.map((item, i) => <Admincards info={item} key={i} onClick={() => handleCardClick(item.id)} />)
							) : selectedCard === 'admin' ? (
								<div>Admin</div>
							) : selectedCard === 'doctor' ? (
								<h1>Doctor</h1>
							) : (
								selectedCard === 'patient' && <h1>Patient</h1>
							)}
						</div>
					) : (
						list.map((item, i) => <Admincards info={item} key={i} onClick={() => handleCardClick(item.id)} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default AdminDashBoard;
