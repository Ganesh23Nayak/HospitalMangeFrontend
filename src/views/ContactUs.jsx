import React from 'react';
import ContactSVGLeft from '../components/SVG/contactleft';
import ContactSVGRight from '../components/SVG/ContactRight';
import {toast} from 'react-toastify';
import {toastEmitter} from '../configs/config';

const ContactUs = () => {
	const handleSubmit = (e) => {
		const el = e.target.elements.submitBtn;
		el.disabled = true;

		const formData = new FormData(e.target);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		console.log('Form Data:', data);

		setTimeout(() => {
			el.disabled = false;
		}, 2000);

		e.target.reset();
		e.preventDefault();

		toast.error('Sorry, something went wrong. Please try again later.', toastEmitter);
	};

	return (
		<section id='contact' className='pt-[120px] pb-20 overflow-hidden relative'>
			<div className='container'>
				<div className='mx-wrap gap-y-10'>
					<div className='w-full lg:w-8/12 px-4 shrink'>
						<div className=' bg-screen shadow-contact  rounded-md p-11 sm:p-[55px] lg:p-11 xl:p-[55px] fadeInUp-hidden shrink'>
							<div className='h-full'>
								<h2 className='font-bold text-body text-2xl sm:text-3xl lg:text-2xl xl:text-3xl mb-3'>
									Need Help? Open a Ticket
								</h2>
								<p className='text-sub text-base font-medium mb-12'>
									Our support team will get back to you ASAP via email.
								</p>
								<form onSubmit={(e) => handleSubmit(e)}>
									<div className='mx-wrap'>
										<div className='w-full md:w-1/2 px-4'>
											<div className='mb-8'>
												<label htmlFor='name' className='block text-sm font-medium text-body mb-3'>
													Your Name
												</label>
												<input
													type='text'
													name='name'
													required
													placeholder='Enter your name'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800'
												/>
											</div>
										</div>
										<div className='w-full md:w-1/2 px-4'>
											<div className='mb-8'>
												<label htmlFor='email' className='block text-sm font-medium text-body mb-3'>
													Your Email
												</label>
												<input
													type='email'
													name='email'
													required
													placeholder='Enter your email'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800'
												/>
											</div>
										</div>
										<div className='w-full px-4'>
											<div className='mb-8'>
												<label htmlFor='message' className='block text-sm font-medium text-body mb-3'>
													Your Message
												</label>
												<textarea
													name='message'
													rows={5}
													required
													placeholder='Enter your Message'
													className='w-full border border-transparent bg-primary-100 dark:bg-primary-600 dark:bg-opacity-10 rounded-md py-3 px-6 text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none focus:border-primary-800 resize-none'
												/>
											</div>
										</div>
										<div className='w-full px-4 grid place-items-center'>
											<input type='submit' className='btn' name='submitBtn' value='Submit Ticket' />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-4/12 px-4 shrink'>
						<div className='relative z-10 rounded-md card-gradient p-8 sm:p-11 lg:p-8 xl:p-11 h-full fadeInUp-hidden'>
							<div>
								<h3 className='text-body font-bold text-2xl leading-tight mb-4'>Subscribe to receive future updates</h3>
								<p className='font-medium text-base text-sub leading-relaxed pb-11 mb-11 border-b border-sub border-opacity-25 dark:border-white dark:border-opacity-25'>
									Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
								</p>
								<form onSubmit={(e) => handleSubmit(e)}>
									<input
										type='text'
										name='name'
										required
										placeholder='Enter your name'
										className='w-full border dark:border-white dark:border-opacity-10 dark:bg-primary-100 dark:bg-opacity-10 rounded-md py-3 px-6 font-medium text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none mb-4 focus:border-primary-800 dark:focus:border-opacity-50'
									/>
									<input
										type='email'
										name='email'
										required
										placeholder='Enter your email'
										className='w-full border dark:border-white dark:border-opacity-10 dark:bg-primary-100 dark:bg-opacity-10 rounded-md py-3 px-6 font-medium text-sub text-base placeholder-[#8a7f80] dark:placeholder-[#d7d3d3] outline-none focus-visible:shadow-none mb-4 focus:border-primary-800 dark:focus:border-opacity-50'
									/>
									<input className='btn text-center mb-4 w-full' type='submit' name='submitBtn' value='Subscribe' />
									<p className='text-base text-sub text-center font-medium leading-relaxed'>
										No spam guaranteed, So please don’t send any spam mail.
									</p>
								</form>
								{/* <div className="absolute top-0 left-0 z-[-1]">
                  <SubscribeSVG />
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute left-0 bottom-36 z-[-1]'>
				<ContactSVGLeft />
			</div>
			<div className='absolute right-0 top-24 z-[-1]'>
				<ContactSVGRight />
			</div>
		</section>
	);
};

export default ContactUs;
