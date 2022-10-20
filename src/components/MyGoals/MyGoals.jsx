import React from 'react';

import { Title, MyGoalsContainer, List, Counter, Text } from './MyGoals.styled';

const MyGoals = () => {
	return (
		<MyGoalsContainer>
			<Title>My goals</Title>
			<List>
				<li>
					<Counter>0{/* {books.length} */}</Counter>
					<Text>Amount of books</Text>
				</li>
				<li>
					<Counter>0{/* {duration} */}</Counter>
					<Text>Amount of days</Text>
				</li>
				{false && (
					<li>
						<Counter>{0}</Counter>
						<Text>Books lefts</Text>
					</li>
				)}
			</List>
		</MyGoalsContainer>
	);
};

export default MyGoals;
