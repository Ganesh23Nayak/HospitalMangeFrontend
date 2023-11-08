import React from 'react';
import {animateJS} from '../utils/utils';
import {animateList} from '../configs/config';
import {useEffect} from 'react';

const Patient = () => {
	useEffect(() => {
		animateList.map((animate) => animateJS(animate));
	});
	return <div>Patient</div>;
};

export default Patient;
