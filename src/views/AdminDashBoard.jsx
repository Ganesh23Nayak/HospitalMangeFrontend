import React from 'react';
import Headings from '../components/Headings';
import Admincards from '../components/Admincards';

const AdminDashBoard = () => {
	const list = [
		{
			category: 'admin',
			imgSrc:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			title: 'Administrator',
		},
		{
			category: 'Add Doctor',
			imgSrc:
				'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGF0aWVudHMlMjBkYXNoYm9hcmR8ZW58MHwwfDB8fHww',
			title: 'Edit Doctor',
		},
		{
			category: 'Patient',
			imgSrc:
				'https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhdGllbnRzJTIwZGFzaGJvYXJkfGVufDB8MHwwfHx8MA%3D%3D',
			title: 'View Patient',
		},
	];

	const handleclick = () => {
		console.log('clicked');
	};
	return (
		<section id='dashboard' className='bg-screen pt-[120px] pb-20'>
			<div className='container'>
				<div className='mx-wrap'>
					<Headings title={'Adminnistartor DashBoard'} />
				</div>
				<button className='mx-wrap justify-center' onClick={handleclick}>
					{list.map((b, i) => (
						<Admincards info={b} key={i} />
					))}
				</button>
			</div>
		</section>
	);
};

export default AdminDashBoard;
