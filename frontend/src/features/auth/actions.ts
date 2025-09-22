/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import instance from '@/lib/axios';
import { redirect } from 'next/navigation';
import { signupSchema } from './validations';

export const signupAction = async (prevState: any, formData: FormData) => {
	const request = signupSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
	});

	if (!request.success) {
		return {
			success: false,
			errors: request.error.flatten().fieldErrors,
		};
	}

	try {
		const response = await instance.post('/auth/signup', request.data);
		console.log(response);
		console.log('okkkkk');
		

		redirect('/auth/signin/verification');
	} catch (error) {
		console.log(error);
		throw error;
	}
};
