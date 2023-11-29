import React from 'react';
import Heading from '../components/Headings';
import SignupLeft from '../components/SVG/SignupLeft';
import SignupRight from '../components/SVG/SignupRight';
import {useState} from 'react';
import {toast} from 'react-toastify';
import {toastEmitter} from '../configs/config';
import ShowPassword from '../components/SVG/ShowPassword';
import {ToastContainer} from 'react-toastify';
import { Axios } from 'axios';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [formType, setFormType] = useState('login');
	const [showPassword, setShowPassword] = useState(false);
	// const notify = () => toast.info('Signup Successful!');
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		const el = e.target.elements.submitbtn;
		el.disabled = true;

		const formData = new FormData(e.target);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		data['role'] = 'PATIENT';

		// {notify()}
		console.log('Form Data:', data);

		Axios.post('http://localhost:3000/addUser', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.data) {
					alert('Signup Successful');
					console.log('Signup Successful');
				}
			})
			.catch((error) => {
				// Handle any errors
				alert('Signup Failed');
				console.error('Error:', error);
			});

		setFormType('login');
		setTimeout(() => {
			el.disabled = false;
		}, 2000);

		e.target.reset();
		// toast.error('Sorry, something went wrong. Please try again later.', toastEmitter);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const el = e.target.elements.submitbtn;
		console.log(el);
		el.disabled = true;

		const formData = new FormData(e.target);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});

		console.log('Form Data:', data);

		Axios.post('http://localhost:3000/login', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.data) {
					console.log('Login Successful');
					localStorage.setItem('user', response.data.user.id);
					// console.log(response.data.user.id);
					// console.log(response.data.user);
					console.log(localStorage.getItem('user'));
					if (response.data.user.role === 'PATIENT') {
						navigate('/Patient');
					} else if (response.data.user.role === 'DOCTOR') {
						navigate('/Doctor');
					} else {
						navigate('/Administrator');
					}
				}
			})
			.catch((error) => {
				// Handle any errors
				alert(error);
				console.error('Error:', error);
			});

		setTimeout(() => {
			el.disabled = false;
		}, 2000);

		e.target.reset();

		// toast.error('Sorry, something went wrong. Please try again later.', toastEmitter);
	};

	return (
		<section id='signup' className='pt-[120px] pb-20 overflow-hidden relative '>
			<div className='container'>
				<div className='mx-wrap gap-y-10 justify-center '>
					<div className='w-full lg:w-8/12 px-4 shrink'>
						<div className=' bg-screen shadow-contact rounded-md p-11 sm:p-[55px] lg:p-11 xl:p-[55px] fadeInUp-hidden shrink card-gradient'>
							<div className='h-full '>
								<h2 className='font-bold text-body text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3'>
									{formType === 'login' ? 'Login' : 'Sign Up'}
								</h2>
								<p className='text-sub text-base font-medium mb-12'>
									{formType === 'login' ? 'Log in to your account' : 'Create a new account'}
								</p>
								{formType === 'login' ? (
									<form onSubmit={handleLoginSubmit}>
										<div className='mx-wrap'>
											<div className='w-full px-4'>
												<div className='mb-8'>
													<label htmlFor='email' className='block text-sm font-medium text-body mb-3'>
														Your Email
													</label>
													<input
														type='email'
														id='email'
														name='email'
														required
														placeholder='Enter your email'
														className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800'
													/>
												</div>
											</div>
											<div className='w-full px-4'>
												<div className='mb-8'>
													<label htmlFor='password' className='block text-sm font-medium text-body mb-3'>
														Password
													</label>
													<div className='relative'>
														<input
															type={showPassword ? 'text' : 'password'}
															id='password'
															name='password'
															required
															placeholder='Enter your password'
															className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800'
														/>
														<span onClick={togglePassword} className='absolute top-2 right-3 cursor-pointer'>
															<ShowPassword />
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className='w-full px-4 grid place-items-center'>
											<input type='submit' className='btn mb-5' value='Login' name='submitbtn' />

											<p onClick={() => setFormType('signup')} className='text-blue-500 cursor-pointer'>
												Don't have an account? Sign Up
											</p>
										</div>
									</form>
								) : (
									<form onSubmit={handleSignupSubmit}>
										<div className='mx-wrap '>
											<div className='w-full px-4'>
												<label htmlFor='name' className='block text-sm font-medium text-body mb-3'>
													Full Name
												</label>
												<input
													type='text'
													id='name'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													placeholder='Name'
													name='name'
													required
												/>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='age' className='block text-sm font-medium text-body mb-3'>
													Age
												</label>
												<input
													type='text'
													id='age'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													placeholder='Age'
													name='age'
													required
												/>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='phonenumber' className='block text-sm font-medium text-body mb-3'>
													Phone Number
												</label>
												<input
													type='text'
													id='phonenumber'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													placeholder='Enter your phone number'
													name='phonenumber'
													required
												/>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='email' className='block text-sm font-medium text-body mb-3'>
													Email
												</label>
												<input
													type='email'
													id='email'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													placeholder='Enter your phone number'
													name='email'
													required
												/>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='gender' className='block text-sm font-medium text-body mb-3'>
													Gender
												</label>
												<select
													id='gender'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													required
												>
													<option className='dark:bg-[#1F305E]' value=''>
														Select Gender
													</option>
													<option className='dark:bg-[#1F305E] text-white font-semibold' value='male'>
														Male
													</option>
													<option className='dark:bg-[#1F305E] text-white font-semibold' value='female'>
														Female
													</option>
													<option className='dark:bg-[#1F305E] text-white font-semibold' value='other'>
														Other
													</option>
												</select>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='signuppassword' className='block text-sm font-medium text-body mb-3'>
													Password
												</label>
												<div className='relative'>
													<input
														type={showPassword ? 'text' : 'password'}
														id='signuppassword'
														className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
														placeholder='Enter a strong password'
														name='signuppassword'
														required
													/>
													<span onClick={togglePassword} className='absolute top-2 right-3 cursor-pointer'>
														<ShowPassword />
													</span>
												</div>
											</div>
											<div className='w-full px-4'>
												<label htmlFor='confirmpassword' className='block text-sm font-medium text-body mb-3'>
													Confirm Password
												</label>
												<input
													type={showPassword ? 'text' : 'password'}
													id='confirmpassword'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 mb-5'
													placeholder='Confirm your password'
													name='confirmpassword'
													required
												/>
											</div>
										</div>
										<div className='w-full px-4 grid place-items-center '>
											<input type='submit' className='btn mb-5' value='Sign Up' name='submitbtn' />

											<p onClick={() => setFormType('login')} className='text-blue-500 cursor-pointer '>
												Already have an account? Login
											</p>
										</div>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute top-5 right-0 z-[-1] '>
				<SignupRight />
			</div>
			<div className='absolute left-0 bottom-5 z-[-1]'>
				<SignupLeft />
			</div>
		</section>
	);
};

export default Signup;
