import type { Dispatch, SetStateAction } from "react"
import styles from "../styles/NoteGallery.module.css"
import Note from "../components/Note"
import noteINT from "../interfaces/noteINT"

interface Props {
    storedNotes:(noteINT | null)[];
    setStoredNotes: Dispatch<SetStateAction<(noteINT | null)[]>>;
}

const NoteGallery: React.FC<Props> = ( { storedNotes, setStoredNotes } ) => {

    return (
        <div className={styles.container}>
            <div className={styles.innercontainer}>
                {storedNotes!.length != 0 ? <div className={styles.notescontainer}> 
                    { storedNotes!.reverse().map(element => (
                        <Note key={element!.id} title={element!.title} content={element!.content} id={element!.id} setStoredNotes={setStoredNotes}/>
                    )) } 
                </div>
                : <div className={styles.nonotesheader}>no notes</div>}
            </div>
        </div>
    )
}

export default NoteGallery