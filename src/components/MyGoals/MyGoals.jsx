import React from 'react';
import { useSelector } from 'react-redux';
import { booksId } from 'Redux/Planning/planningSelectors';
import {
	Title,
	MyGoalsContainer,
	List,
	Counter,
	Text,
	Item,
} from './MyGoals.styled';

const MyGoals = () => {
	const ids = useSelector(booksId);
	const state = useSelector(state => state.planning);
	const booksLefts = 0;
	return (
		<MyGoalsContainer>
			<Title>My goals</Title>
			{false ? (
				<List startTraining>
					<Item startTraining>
						<Counter startTraining>{ids ? state.books.length : '0'}</Counter>
						<Text>Amount of books</Text>
					</Item>
					<Item startTraining>
						<Counter startTraining>
							{ids ? state.duration * state.books.length : '0'}
						</Counter>
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
						<Counter>{ids ? state.books.length : '0'}</Counter>
						<Text>Amount of books</Text>
					</Item>
					<Item>
						<Counter>{ids ? state.duration * state.books.length : '0'}</Counter>
						<Text>Amount of days</Text>
					</Item>
				</List>
			)}
		</MyGoalsContainer>
	);
};

export default MyGoals;
