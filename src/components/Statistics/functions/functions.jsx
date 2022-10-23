export const dotsPaddingByWidth = () => {
   const windowWidth = window.innerWidth;
	if (windowWidth < 768) {
		return -180;
	}
	if (windowWidth >= 768 && windowWidth < 1280) {
		return -562;
	}
	return -782;
};

export const normaliseDate = date => {
	const newDate = new Date(date);
	let day = newDate.getDate();
	if (day < 10) day = '0' + day;

	let month = newDate.getMonth() + 1;
	if (month < 10) month = '0' + month;

	const year = newDate.getFullYear();

	return `${year}-${month}-${day}`;
};

export const createNextDay = (prevDate, step) => {
	const newDate = new Date(prevDate);
	const nextDay = newDate.setDate(newDate.getDate() + step);
	return normaliseDate(nextDay);
};