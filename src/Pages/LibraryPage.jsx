import { useMediaQuery } from "react-responsive"
import LibraryForm from "components/Library/LibraryForm/LibraryForm"
import LibraryList from "components/Library/LibraryList/LibraryList"


import BOOK_CATEGORY from "components/Constants/bookCategories"

import { useDispatch, useSelector } from "react-redux"
// import { getAllBooks } from "Redux/Books/booksSelectors"
import { getAccessToken } from "Redux/Auth/authSelectors"
import { useEffect } from "react"
import { getUserBooksThunk } from "Redux/Books/booksOperations"
import MobileLibrary from "components/Library/MobileLibrary/MobileLibrary"



const LibraryPage = () => {

    const isDesktopOrTablet = useMediaQuery({ minWidth: 768 })

	const accessToken = useSelector(getAccessToken);

	const dispatch = useDispatch();

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk())
		}
	}, [accessToken, dispatch]);


    return (isDesktopOrTablet ?
        <>          
            <LibraryForm />
            <LibraryList category= {BOOK_CATEGORY.finishedReading} /> 
            <LibraryList category={BOOK_CATEGORY.currentlyReading} /> 
            <LibraryList category= {BOOK_CATEGORY.goingToRead} /> 
        </>
        :
        <MobileLibrary />
    )
}
export default LibraryPage