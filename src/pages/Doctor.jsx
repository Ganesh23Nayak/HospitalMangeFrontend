import React from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';
import {Doctor_list} from '../configs/config';
import Header from '../views/Header';
import DoctorTable from '../components/DoctorTable';

const Doctor = () => {
	const userid = localStorage.getItem('user');
	console.log('user:', userid);
	console.log(userid);
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});
	return (
		<>
			<Header list_displays={Doctor_list} />
			<DoctorTable userid={userid} />;
		</>
	);
};

export default Doctor;
