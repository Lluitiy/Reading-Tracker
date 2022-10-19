
import LibraryForm from "components/LibraryForm/LibraryForm"
import LibraryList from "components/LibraryList/LibraryList"

const LibraryPage = () => {
    return (
        // <Section>   
        <>
            <LibraryForm />
            <LibraryList heading={"Going to read"} />
            <LibraryList heading={"Reading now"}/>
        </>
        // </Section>
    )
}
export default LibraryPage