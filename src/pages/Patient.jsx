import React from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';
import ListDoct from '../views/ListDoct';
import {Patirent_list} from '../configs/config';
import Header from '../views/Header';
import PatientDashBoard from '../views/PatientDashBoard';
import DoctorTable from '../components/DoctorTable';
const Patient = () => {
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
