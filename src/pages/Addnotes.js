import React, { Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import {FirebaseContext} from "../context/firebase/firebaseContext";


export function Addnotes () {

    const { notes,fetchNotes, removeNote} = useContext(FirebaseContext)


    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])
    return (
        <Fragment>
            <Form/>
            <hr/>
                 <Notes notes={notes} onRemove={removeNote}/>
        </Fragment>
    )
}
