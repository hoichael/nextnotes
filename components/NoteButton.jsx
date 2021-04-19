import styles from "../styles/NoteButtons.module.css"
import { useEffect, useState } from "react"
import deleteByID from "../utils/deleteByID"


export default function NoteBtn( { which, text, id, content, char, setStoredNotes } ) {

    const [styling, setStyling] = useState({
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

    function handleClick(e) {
        e.stopPropagation()
        if(which === "copy") {
            const type = 'text/plain';
            const blob = new Blob([content], { type });

            try {
                let data = [new ClipboardItem({ [type]: blob })];
                navigator.clipboard.write(data).then(function() {
                  }, function() {
                  });
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