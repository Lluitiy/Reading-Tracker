import * as yup from 'yup';

export const userLoginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(7).max(14).required(),
});

export const userRegisterSchema = yup.object({
	name: yup.string().min(3).max(30).required(),
	email: yup.string().email().required(),
	password: yup.string().min(7).max(14).required(),
	confirm: yup.string().min(7).max(14).required(),
});

export const booksFormSchema = yup.object({
	title: yup.string().required('Enter the title'),
	author: yup.string().required('Enter the author' ),
	publishYear: yup.string().min(4).required(),
	pagesTotal: yup.string().min(1).max(4).required(),
})
