import { useRef } from "react"
import type { Dispatch, SetStateAction } from "react"
import NoteButton from "./NoteButton"
import styles from "../styles/Note.module.css"
import noteINT from "../interfaces/noteINT"

interface Props {
    title: string;
    content: string;
    id: number;
    setStoredNotes: Dispatch<SetStateAction<(noteINT | null)[]>>;
}

const Note: React.FC<Props> = ( { title, content, id, setStoredNotes } ) => {

    const expanded = useRef(false);

    function handleExpand(e:any):void {

        if(!expanded.current) {
            e.currentTarget.classList.add(styles.expand)
            expanded.current = true;
        } else {
            e.currentTarget.classList.remove(styles.expand)
            expanded.current = false;
        }
    }

    return (
        <div onClick={(e) => handleExpand(e)} id={id.toString()} className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div id={`${id.toString()}-content`} className={styles.content}>{content}</div>
            </div>
            <div className={styles.buttons}>
                <NoteButton which="copy" text="copy to clipboard" id={id} content={content} char="C" setStoredNotes={setStoredNotes}/>
                <NoteButton which="delete" text="delete permanently" id={id} content={content} char="X" setStoredNotes={setStoredNotes}/>
            </div>
        </div>
    )
}

export default Note
