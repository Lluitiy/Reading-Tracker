import StarRatings from 'react-star-ratings';
// import { useState } from 'react';

const RatingStars = ({value, changeHandler}) => {
	// const [value, setValue] = useState(3);


	console.log(value)
	return (
		<StarRatings
			rating={value}
			starRatedColor="#FF6B08"
			starEmptyColor="grey"
			starHoverColor="#FF6B08"
			changeRating={changeHandler}
			numberOfStars={5}
			name="rating"
			starDimension="17px"
			starSpacing="4px"
		/>
	);
};

export default RatingStars;
