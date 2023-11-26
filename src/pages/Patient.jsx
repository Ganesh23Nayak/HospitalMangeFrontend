import React from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';
import ListDoct from '../views/ListDoct';
import {Patirent_list} from '../configs/config';
import Header from '../views/Header';
import PatientDashBoard from '../views/PatientDashBoard';

const Patient = () => {
	const userid = localStorage.getItem('user');
	console.log('pai', userid);
	localStorage.clear();
	console.log(userid);
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});
	return (
		<div>
			<Header list_displays={Patirent_list} />
			<ListDoct />
			<PatientDashBoard />
		</div>
	);
};

export default Patient;
