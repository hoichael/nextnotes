import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import styles from "../styles/NewNote.module.css"
import InputBar from "../components/InputBar"
import noteINT from "../interfaces/noteINT"

interface Props {
    setStoredNotes: Dispatch<SetStateAction<(noteINT | null)[]>>;
}

const NewNote: React.FC<Props> = ( { setStoredNotes } ) => {
    const [charCount, setCharCount] = useState(0);

    function handleInput(e:any):void {
        let rowsAmount = e.currentTarget.value.split("\n").length;
        if(e.key === "Enter" && rowsAmount === 5) {
            e.preventDefault();
        }
    }

    function updateCharCount(e:any) {
        setCharCount(e.currentTarget.value.length);
    }

    return (
        <div className={styles.container}>
            <input id="title-input" className={styles.title} type="text" placeholder="Title" maxLength={15} spellCheck="false" autoComplete="off"></input>
            <textarea id="text-input" className={styles.input} onChange={(e) => updateCharCount(e)} onKeyDown={(e) => handleInput(e)} placeholder="Note" rows={5} maxLength={150} spellCheck="false" autoComplete="off"></textarea>
            
            <InputBar charCount={charCount} setCharCount={setCharCount} setStoredNotes={setStoredNotes}/>
        </div>
    )
}

export default NewNote