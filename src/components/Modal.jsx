import {useState} from 'react';

const Modal = ({person, isOpen, onClose, onSubmit}) => {
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const charcount = description.length;

	const handleSubmit = (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		const formData = new FormData(e.target);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		onSubmit({person, ...data, description});
		setTimeout(() => {
			// Re-enable the submit button after a short delay
			setIsSubmitting(false);
			alert('Appointment booked successfully');
			onClose(); // Close the modal after successful submission
		}, 1000);
	};

	return (
		<div className={`modal fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
			<div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>
			<div className='modal-container bg-white dark:bg-gray-800 w-96 rounded-lg shadow-lg z-10 overflow-hidden'>
				<span className='modal-close cursor-pointer text-3xl text-gray-500' onClick={onClose}>
					&times;
				</span>
				<div className='modal-header bg-primary-300 dark:bg-gray-900 dark:text-white p-4 text-center'>
					<div className='flex flex-col items-center justify-center text-xl'>
						<h1>Dr.{person.name}</h1>
						<h3>{person.department}</h3>
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='modal-body p-4 '>
						<textarea
							className='w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-700 '
							placeholder='Describe your problem...'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							name='description'
						/>
					</div>
					<div className='modal-body p-2 flex items-center justify-center'>
						<label htmlFor='date' className='mb-2 p-2 dark:text-white'>
							Date:
						</label>
						<input
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							name='date'
							className='mb-4 px-5 py-2 border rounded-md items-center'
							required
						/>
					</div>
					<div className='modal-body p-2 flex items-center justify-center'>
						<label htmlFor='date' className='mb-2 p-2 dark:text-white'>
							Time:
						</label>
						<input
							type='time'
							value={time}
							onChange={(e) => setTime(e.target.value)}
							name='time'
							className='mb-4 px-5 py-2 border rounded-md items-center '
							required
						/>
					</div>
					<div>
						<p className='text-sm text-gray-500 mt-2 text-right'>Character Count: {charcount}</p>
						<p className='text-sm text-gray-500 mt-2 text-right'>Max Character Count: 250</p>
					</div>
					<div className='modal-footer bg-gray-200 dark:bg-gray-700 p-4 text-center'>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
							type='submit'
							name='submitbtn'
						>
							Book Appointment
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
