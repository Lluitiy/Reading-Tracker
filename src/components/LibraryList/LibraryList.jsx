import { Container, Section } from 'components/Common/Common.styled';
import { books } from './books';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { Header, IconThumb, ItemWrapper, ListHeaders, MobileItemWrapper, Table, TableHeader, TableRow } from './LibraryList.styled';
import { theme } from 'components/Constants/theme';


const LibraryList = ({ heading }) => {
    const fill = heading === "Reading now" ? theme.colors.brand : "#A6ABB9" 

	return (
		<Section>
            <Container>
                <Header>{ heading}</Header>
				<ListHeaders>
                    <span>Book Title</span>
                    <span>Author</span>
					<span>Year</span>
					<span>Pages</span>
				</ListHeaders>
				<ul>
					{books.map(({ title, author, publishYear, totalPages, id }) => (
						<li key={id}>
                            <ItemWrapper>                               
                                <BookIcon fill={fill} width={22} height={17} />
                                <span>{title}</span>                              
								<span>{author}</span>
								<span>{publishYear}</span>
								<span>{totalPages}</span>
                            </ItemWrapper>
                            
                            <MobileItemWrapper>
                                <IconThumb> <BookIcon  fill={fill} width={22} height={17} /></IconThumb>
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
                                            <td>{ totalPages}</td>
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
