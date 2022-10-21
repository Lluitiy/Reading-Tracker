import StarRatings from 'react-star-ratings';
// import { useState } from 'react';

const RatingStars = ({value, changeHandler}) => {
	// const [value, setValue] = useState(3);


	console.log(value)
	return (
		<StarRatings
			rating={value}
			starRatedColor="orange"
			starEmptyColor="grey"
			starHoverColor="orange"
			changeRating={changeHandler}
			numberOfStars={5}
			name="rating"
			starDimension="17px"
			starSpacing="4px"
		/>
	);
};

export default RatingStars;
