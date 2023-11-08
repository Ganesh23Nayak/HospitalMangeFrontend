import {cssTransition} from 'react-toastify';

export const animateList = ['fadeIn', 'fadeInLeft', 'fadeInUp'];

export const toastEmitter = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
	transition: cssTransition({
		enter: 'animate__animated animate__bounceIn',
		exit: 'animate__animated animate__bounceOut',
	}),
};

export const list_displays = [
	{
		id: 'features',
		name: 'Features',
	},
	{
		id: 'about',
		name: 'About',
	},
	{
		id: 'signup',
		name: 'SignUp',
	},
	{
		id: 'contact',
		name: 'Contact',
	},
];

export const Patirent_list = [
	{
		id: 'dashboard',
		name: 'DashBoard',
	},
	{
		id: 'bookappointments',
		name: 'Book Appointments',
	},
	{
		id: 'logout',
		name: 'Logout',
	},
];
