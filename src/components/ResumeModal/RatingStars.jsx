import StarRatings from 'react-star-ratings';
import { useState } from 'react';

const RatingStars = () => {
	const [value, setValue] = useState(2.5);

	const changeRating = e => {
		setValue(e);
	};

	return (
		<StarRatings
			rating={value}
			starRatedColor="orange"
			starEmptyColor="grey"
			starHoverColor="orange"
			changeRating={changeRating}
			numberOfStars={5}
			name="rating"
			starDimension="17px"
			starSpacing="4px"
		/>
	);
};

export default RatingStars;
