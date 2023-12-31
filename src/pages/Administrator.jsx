import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import AdminDashBoard from '../views/AdminDashBoard';
import Header from '../views/Header';
import {Admin_list} from '../configs/config';

const Administrator = () => {
	const navigate = useNavigate();
	const userid = localStorage.getItem('user');
	console.log('user:', userid);
	console.log(userid);
	useEffect(() => {
		if (userid == null) {
			navigate('*');
		}
		animateList.map((animate) => animateJS(animate));
	});
	return (
		<div>
			<Header list_displays={Admin_list} />
			<AdminDashBoard />
		</div>
	);
};

export default Administrator;
