import { useMediaQuery } from "react-responsive"
import LibraryForm from "components/LibraryForm/LibraryForm"
import LibraryList from "components/LibraryList/LibraryList"


import BOOK_CATEGORY from "components/Constants/bookCategories"
import MobileLibrary from "components/MobileLibrary/MobileLibrary"
const LibraryPage = () => {

    const isDesktopOrTablet = useMediaQuery({ minWidth: 768 })
    return (isDesktopOrTablet ?
        <>          
            <LibraryForm />
            <LibraryList category= {BOOK_CATEGORY.finishedReading} />
            <LibraryList category={BOOK_CATEGORY.currentlyReading} />
            <LibraryList category= {BOOK_CATEGORY.goingToRead} />
        </>
        :
        <MobileLibrary/>
    )
}
export default LibraryPage