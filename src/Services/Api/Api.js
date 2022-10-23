import axios from 'axios';

const contactsAPI = axios.create({
	baseURL: 'https://bookread-backend.goit.global',
});

const setToken = token => {
	contactsAPI.defaults.headers.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
	contactsAPI.defaults.headers.Authorization = '';
};

const registerUser = async user => {
	try {
		const { data } = await contactsAPI.post('/auth/register', user);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
const loginUser = async user => {
	try {
		const { data } = await contactsAPI.post('/auth/login', user);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
const refreshUser = async persistedSid => {
	try {
		const { data } = await contactsAPI.post('/auth/refresh', persistedSid);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
const logoutUser = async () => {
	try {
		return await contactsAPI.post('/auth/logout');
	} catch (error) {
		throw new Error(error.message);
	}
};
const authUserGoogle = async () => {
	try {
		const { data } = await contactsAPI.get('/auth/google');
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const postUserBook = async book => {
	try {
		const { data } = await contactsAPI.post('/book', book);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const getUserBooks = async () => {
	try {
		const { data } = await contactsAPI.get('/user/books');
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const editUserBook = async ({ id, rating, feedback }) => {
	try {
		const { data } = await contactsAPI.patch(`/book/review/${id}`, {
			rating,
			feedback,
		});
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const postPlanning = async ({ startDate, endDate, books }) => {
	try {
		const { data } = await contactsAPI.post('/planning', {
			startDate,
			endDate,
			books,
		});
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

// !==Лера изменила  pages, убрала дестуктуризацию, с ней не работает..
const patchPlanning = async pages => {
	try {
		const { data } = await contactsAPI.patch('/planning', pages);

		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const getPlanning = async () => {
	try {
		const { data } = await contactsAPI.get('/planning');
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const API = {
	registerUser,
	loginUser,
	logoutUser,
	refreshUser,
	authUserGoogle,

	postPlanning,
	patchPlanning,
	getPlanning,

	getUserBooks,
	postUserBook,
	editUserBook,

	setToken,
	unsetToken,
};
export default API;
