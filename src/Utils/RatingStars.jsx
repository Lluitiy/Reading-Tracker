import { ReactComponent as StarActive } from 'Assets/svg/starActive.svg';
import { ReactComponent as StarInactive } from 'Assets/svg/starInactive.svg';

const ratingStars = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
]

const createRatingStars = (rating) => ratingStars.map(({id}) => {
        return (
            <li key={id}>
                {id <= rating ? <StarActive/> : <StarInactive/>}
            </li>
        )
    })

export default createRatingStars