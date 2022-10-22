import React from 'react';
import { useSelector } from 'react-redux';

import {
	Title,
	MyGoalsContainer,
	List,
	Counter,
	Text,
	Item,
} from './MyGoals.styled';

const MyGoals = () => {
	const state = useSelector(state => state.planning);
	const amountOfBooks = state.books?.length;
	const amountOfDays = state.duration * amountOfBooks;
	const booksLefts = 0;
	return (
		<MyGoalsContainer>
			<Title>My goals</Title>
			{false ? (
				<List startTraining>
					<Item startTraining>
						<Counter startTraining>{amountOfBooks}</Counter>
						<Text>Amount of books</Text>
					</Item>
					<Item startTraining>
						<Counter startTraining>{amountOfDays}</Counter>
						<Text>Amount of days</Text>
					</Item>

					<Item startTraining>
						<Counter active startTraining>
							{booksLefts}
						</Counter>
						<Text>Books lefts</Text>
					</Item>
				</List>
			) : (
				<List>
					<Item>
						<Counter>{amountOfBooks}</Counter>
						<Text>Amount of books</Text>
					</Item>
					<Item>
						<Counter>{amountOfDays}</Counter>
						<Text>Amount of days</Text>
					</Item>
				</List>
			)}
			{/* <List>
				<li>
					<Counter>{amountOfBooks}</Counter>
					<Text>Amount of books</Text>
				</li>
				<li>
					<Counter>{amountOfDays}</Counter>
					<Text>Amount of days</Text>
				</li>
				{false && (
					<li>
						<Counter active>{booksLefts}</Counter>
						<Text>Books lefts</Text>
					</li>
				)}
			</List> */}
		</MyGoalsContainer>
	);
};

export default MyGoals;
