import React, { Fragment, useContext, useEffect} from 'react';
import { Notes } from '../components/Notes';
import {FirebaseContext} from "../context/firebase/firebaseContext";


export function Dump () {

    const { notes,fetchNotes, deleteNote} = useContext(FirebaseContext)


    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
                : <Notes notes={notes} onRemove={deleteNote}/>
        </Fragment>
    )
}
