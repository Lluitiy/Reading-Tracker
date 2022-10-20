import getHeading from 'Utils/getHeading';
import BOOK_CATEGORY from 'components/Constants/bookCategories';
import MobileLibraryItem from '../MobileLibraryItem/MobileLibraryItem';
import LibraryItem from '../LibraryItem/LibraryItem';
import { Container, Section } from 'components/Common/Common.styled';
import { useMediaQuery } from "react-responsive"
import {Header, ListHeaders} from './LibraryList.styled';
import { theme } from 'components/Constants/theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBooksByCategory } from 'Redux/Books/booksSelectors';



const LibraryList = ({ category }) => {

    const isDesktopOrTablet = useMediaQuery({ minWidth: 768 })
	const fill = useMemo(
		() =>
			category === BOOK_CATEGORY.currentlyReading
				? theme.colors.brand
				: '#A6ABB9',
		[category]
	);
    const heading = useMemo(() => getHeading(category), [category])
    const books = useSelector(getBooksByCategory(category))

	return ( !!books.length &&
		<Section>
			<Container>
                <Header>{heading}</Header>
				{isDesktopOrTablet && <ListHeaders>
					<span>Book Title</span>
					<span>Author</span>
					<span>Year</span>
					<span>Pages</span>
				</ListHeaders>}
				<ul>
					{books.map(({ title, author, publishYear, pagesTotal, _id }) => (
                        <li key={_id}> {
                            isDesktopOrTablet ?
                            <LibraryItem  title={title}
                                author={author}
                                publishYear={publishYear}
                                pagesTotal={pagesTotal}
                                fill={ fill}/>:
                            <MobileLibraryItem
                                title={title}
                                author={author}
                                publishYear={publishYear}
                                pagesTotal={pagesTotal}
                                fill={ fill} />
                        }
						</li>
					))}
				</ul>
			</Container>
        </Section>   
	);
};
export default LibraryList;
