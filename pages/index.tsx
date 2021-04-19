import { useState, useEffect } from "react"
import styles from '../styles/Main.module.css'
import NewNote from "../components/NewNote"
import NoteGallery from "../components/NoteGallery"
import noteINT from "../interfaces/noteINT"
import Head from 'next/head'


export default function Main() {

  const[storedNotes, setStoredNotes] = useState<Array<noteINT | null>>([]);

  useEffect(() => {
    setStoredNotes(JSON.parse(localStorage.getItem("notes")!) || [])
  }, [])

  return (
    <div className={styles.container}>
            <Head>
              <title>Notes</title>
              <link rel="icon" href="/favicon.ico"/>
            </Head>
        <div className={styles.upper}>
            <NewNote setStoredNotes={setStoredNotes}/>
        </div>
        <div className={styles.lower}>
            <NoteGallery storedNotes={storedNotes} setStoredNotes={setStoredNotes}/>
        </div>
    </div>
  )
}
