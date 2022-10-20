
import LibraryForm from "components/LibraryForm/LibraryForm"
import LibraryList from "components/LibraryList/LibraryList"


import BOOK_CATEGORY from "components/Constants/bookCategories"
const LibraryPage = () => {

    return (
        // <Section>   
        <>
           
            <LibraryForm />
            <LibraryList category= {BOOK_CATEGORY.goingToRead} />
            <LibraryList category= {BOOK_CATEGORY.currentlyReading} />
        </>
        // </Section>
    )
}
export default LibraryPage