import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';
import * as yup from 'yup';

import SignUpForm from './SignUpForm.js';

const initFormValues = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const initFormErrors = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
	confirmPassword: ''
}

const formSchema = yup.object().shape({
	firstName: yup
		.string()
		.required('First name is required'),
		// .min(2)?
	lastName: yup
		.string()
		.required('Last name is required'),
	username: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must have a minimum of 3 characters'),
	email: yup
		.string()
		.required('Email is required')
		.email('Please enter a valid email address'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must have a minimum of 6 characters'),
	confirmPassword: yup
		.string()
})

function SignUpPage() {

	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);

	const onInputChange = evt => {
		const name = evt.target.name;
		const value = evt.target.value;

		yup
			.reach(formSchema, name)
			.validate(value)
			.then(valid => {
				setFormErrors({
					...formErrors,
					[name]: ''
				});
			})
			.catch(err => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0]
				});
			})

		setFormValues({
			...formValues,
			[evt.target.name]: evt.target.value
		});
	}

	const handleSubmit = evt => {

	}

	return (
		<div className='sign-up-page'>
			<header className='sign-up-header'>
				<h1 className='sign-up-page-title'>Sign Up for [Project Name]</h1>
				{/* <img src={logo} alt='website logo'/> */}

				{/* <nav>
					<Link to='/'></Link>
				</nav> */}
			</header>

			<SignUpForm values={formValues} onInputChange={onInputChange} handleSubmit={handleSubmit} errors={formErrors}/>
		</div>
	);
}

export default SignUpPage;
