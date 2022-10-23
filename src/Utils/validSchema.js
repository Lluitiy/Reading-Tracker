import * as yup from 'yup';

export const userLoginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(7).max(14).required(),
});

export const userRegisterSchema = yup.object({
	name: yup.string().min(3).max(30).required(),
	email: yup.string().email().required(),
	password: yup.string().min(7).max(14).required(),
	confirm: yup.string().oneOf([yup.ref('password')], 'passwords do not match').required(),
});

export const booksFormSchema = yup.object({
	title: yup.string().required(),
	author: yup.string().required( ),
	publishYear: yup.string().min(4).required(),
	pagesTotal: yup.string().min(1).max(4).required(),
})
