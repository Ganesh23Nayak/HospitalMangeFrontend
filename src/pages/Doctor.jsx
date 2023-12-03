import React from 'react';
import {useNavigate} from 'react-router-dom';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';
import {Doctor_list} from '../configs/config';
import Header from '../views/Header';
import DoctorTable from '../components/DoctorTable';

const Doctor = () => {
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
		<>
			<Header list_displays={Doctor_list} />
			<DoctorTable userid={userid} />;
		</>
	);
};

export default Doctor;
