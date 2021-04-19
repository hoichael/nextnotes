import { useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import styles from "../styles/InputBar.module.css"
import setLocalStorage from "../utils/setLocalStorage"
import noteINT from "../interfaces/noteINT"

interface Props {
    charCount: number;
    setCharCount: Dispatch<SetStateAction<number>>;
    setStoredNotes: Dispatch<SetStateAction<(noteINT | null)[]>>;
}

interface NoteInterface {
    title:string;
    content:string;
    id:number;
}

const InputBar: React.FC<Props> = ( { charCount, setCharCount, setStoredNotes } ) => {

    class Note implements NoteInterface {
        title:string;
        content:string;
        id:number;
        constructor(title:string, content:string) {
            this.title = title;
            this.content = content;
            this.id = Math.random() + Math.random() + Math.random();
        }
    }

    function handleClick():void {
        const titleElement = document.querySelector("#title-input") as HTMLInputElement;
        const textElement = document.querySelector("#text-input") as HTMLInputElement;

        if(!titleElement.value || !textElement.value) {
            alert("Make sure your note has a title and some text!")
            return;
        }

        setLocalStorage("notes", new Note(titleElement.value, textElement.value))
        setStoredNotes(JSON.parse(localStorage.getItem("notes")!));
        titleElement.value = "";
        textElement.value = "";
        setCharCount(0);
    }

    return (
        <div className={styles.container}>
            <button onClick={() => handleClick()} className={styles.btn}>Save</button>
            <div className={styles.counter}>
                {`${charCount} / 150`}
            </div>
        </div>
    )
}

export default InputBar