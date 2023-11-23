import {useState} from 'react';

const Modal = ({person, isOpen, onClose, onSubmit}) => {
	const [description, setDescription] = useState('');

	const handleDescriptionChange = (e) => {
		if(e.target.value.length<= 250) {
			setDescription(e.target.value);
		}
	};
	const charcount = description.length;

	const handleSubmit = () => {
		if(charcount==0)
		{
			alert("Please enter description");
			setDescription('');
		}
		else{
		onSubmit({person, description});
		alert("Appointment booked successfully");
		setDescription('');
		onClose();
		}
	};
	
	return (
		<div className={`modal fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
			<div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>
			<div className='modal-container bg-white dark:bg-gray-800 w-96 rounded-lg shadow-lg z-10 overflow-hidden'>
					<span className='modal-close cursor-pointer text-3xl text-gray-500' onClick={onClose}>
						&times;
					</span>
				<div className='modal-header bg-primary-300 dark:bg-gray-900 dark:text-white p-4 text-center '>
					<div className='flex flex-col items-center justify-center text-xl'>
						<h1>Dr.{person.name}</h1>
						<h3>{person.department}</h3>
					</div>
				</div>
				<div className='modal-body p-4 ' >
					
					<textarea
						className='w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-700 '
						placeholder='Describe your problem...'
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<div>
					<p className='text-sm text-gray-500 mt-2 text-right'>Character Count: {charcount}</p>
					<p className='text-sm text-gray-500 mt-2 text-right'>Max Character Count: 250</p>
    			</div>
				<div className='modal-footer bg-gray-200 dark:bg-gray-700 p-4 text-center'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
						onClick={handleSubmit}
					>
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
