import { useState } from "react"
import { PlusBtn } from "./MobileLibrary.styled"

const { default: LibraryForm } = require("components/LibraryForm/LibraryForm")


const MobileLibrary = () => {
    const [isFormOpen, setIsFormOpen] = useState(true)
    setIsFormOpen(true)
    return (
        <>
            {isFormOpen ? <LibraryForm /> :
           <PlusBtn type="button"> +</PlusBtn>}  
           
        </>
    )
}
export default MobileLibrary