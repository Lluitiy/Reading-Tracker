import React from 'react';
import { Title } from './MyTraining.styled';
const MyTraining = () => {
	return (
		<div>
			<Title>My training</Title>
			<form action="">
				{' '}
				<label htmlFor="">
					<input type="date" value="start" placeholder="start"></input>
				</label>
				<label htmlFor="">
					<input type="date" value="finish" placeholder="finish"></input>
				</label>
				<select name="select" placeholder="Choose books from the library ">
					<option value="value1">Значение 1</option>
					<option value="value2">Значение 2</option>
					<option value="value3">Значение 3</option>
				</select>
			</form>
			
		</div>

	);
};

export default MyTraining;
