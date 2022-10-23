import StarRatings from 'react-star-ratings';

const RatingStars = ({value, changeHandler}) => {
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
