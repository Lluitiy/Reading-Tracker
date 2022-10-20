import { Container, Section } from 'components/Common/Common.styled';

import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { Header, IconThumb, ItemWrapper, ListHeaders, MobileItemWrapper, Table, TableHeader, TableRow } from './LibraryList.styled';
import { theme } from 'components/Constants/theme';
import BOOK_CATEGORY from 'components/Constants/bookCategories';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksByCategory } from 'Redux/Books/booksSelectors';
import { useEffect } from "react"
import { getIsLoggedIn } from "Redux/Auth/authSelectors"
import { getUserBooksThunk } from "Redux/Books/booksOperations"
import { useMemo } from 'react';


const LibraryList = ({ category }) => {
    const fill = useMemo(() => category === BOOK_CATEGORY.currentlyReading ? theme.colors.brand : "#A6ABB9", [category]) 

    const books = useSelector(getBooksByCategory(category))
    const isLoggedIn = useSelector(getIsLoggedIn)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if (isLoggedIn) {
        dispatch(getUserBooksThunk())
      }   
    }, [isLoggedIn, dispatch])
    

	return (
		<Section>
            <Container>
                <Header>{ category}</Header>
				<ListHeaders>
                    <span>Book Title</span>
                    <span>Author</span>
					<span>Year</span>
					<span>Pages</span>
				</ListHeaders>
				<ul>
					{books.map(({ title, author, publishYear, pagesTotal, _id }) => (
						<li key={_id}>
                            <ItemWrapper>                               
                                <BookIcon fill={fill}  width={22} height={17} />
                                <span>{title}</span>                              
								<span>{author}</span>
								<span>{publishYear}</span>
								<span>{pagesTotal}</span>
                            </ItemWrapper>
                            
                            <MobileItemWrapper>
                                <IconThumb> <BookIcon  fill={fill}  width={22} height={17} /></IconThumb>
                                <span>{title}</span>
                                <Table>
                                    <tbody>
                                    <TableRow>
                                        <TableHeader>Author</TableHeader>
                                            <td>{ author}</td>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeader>Year</TableHeader>
                                            <td>{ publishYear}</td>
                                    </TableRow>
                                    <TableRow>
                                        <TableHeader>Pages</TableHeader>
                                            <td>{ pagesTotal}</td>
                                        </TableRow>
                                        </tbody>
                                </Table>
                            </MobileItemWrapper>
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
};
export default LibraryList;
