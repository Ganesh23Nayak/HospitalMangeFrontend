import React from 'react';
import {useNavigate} from 'react-router-dom';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';
import ListDoct from '../views/ListDoct';
import {Patirent_list} from '../configs/config';
import Header from '../views/Header';
import PatientDashBoard from '../views/PatientDashBoard';

const Patient = () => {
	const userid = localStorage.getItem('user');
	const navigate = useNavigate();
	console.log('user:', userid);
	console.log(userid);
	useEffect(() => {
		if (userid == null) {
			navigate('*'); // Replace '/' with the desired home page route
		}
		animateList.map((animate) => animateJS(animate));
	});
	return (
		<div>
			<Header list_displays={Patirent_list} />
			<ListDoct userid={userid} />
			<PatientDashBoard userid={userid} />
		</div>
	);
};

export default Patient;
