import styles from "../styles/NoteButtons.module.css"
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import deleteByID from "../utils/deleteByID"
import noteINT from "../interfaces/noteINT"

interface Props {
    which: "copy" | "delete";
    text: string;
    id: number;
    content: string;
    char: string;
    setStoredNotes: Dispatch<SetStateAction<(noteINT | null)[]>>;
}

export default function NoteBtn( { which, text, id, content, char, setStoredNotes }: Props ) {

    const [styling, setStyling] = useState<{
        wrapper?: string,
        btn?: string,
        popup?: string
    }>({
        wrapper: undefined,
        btn: undefined,
        popup: undefined
    })

    useEffect(() => {
        if(which === "copy") {
            setStyling({
                wrapper: styles.copywrapper,
                btn: styles.copybtn,
                popup: styles.copypopup
            })
        } else {
            setStyling({
                wrapper: styles.deletewrapper,
                btn: styles.deletebtn,
                popup: styles.deletepopup
            })
        }
    }, [])

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        if(which === "copy") {
            try {
                navigator.clipboard.writeText(content).catch((e) => {
                    throw new Error(e)
                })
            } catch(err) {
                console.log(err);
                alert("uh oh! looks like you don't allow firefox to write to the clipboard. ( the related setting can be found at about:config (don't bother fucking with that though) )")
            }
        } else {
            deleteByID(id, setStoredNotes);
        }
    }

    return (
        <div className={styling.wrapper}>
        <button onClick={(e) => handleClick(e)} className={styling.btn}>
            <div className={styling.popup}>
                <div className={styles.popuptext}>{text}</div>
            </div>
            {char}
            </button>
        </div>
    )
}
