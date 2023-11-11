import {useState} from 'react';

const Modal = ({person, isOpen, onClose, onSubmit}) => {
	const [description, setDescription] = useState('');

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	const handleSubmit = () => {
		onSubmit({person, description});
		onClose();
	};

	return (
		<div className={`modal fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
			<div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>
			<div className='modal-container bg-white dark:bg-gray-800 w-96 rounded-lg shadow-lg z-10 overflow-hidden'>
				<div className='modal-header bg-gray-700 dark:bg-gray-900 text-white p-4'>
					<span className='modal-close cursor-pointer' onClick={onClose}>
						&times;
					</span>
					<h2>{person.name}</h2>
					<h3>{person.department}</h3>
				</div>
				<div className='modal-body p-4'>
					<textarea
						className='w-full p-2 border rounded-md'
						placeholder='Describe the problem...'
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<div className='modal-footer bg-gray-200 dark:bg-gray-700 p-4'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
