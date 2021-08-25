import React, {useState} from 'react';
import './NotesList.css';
import Note from '../notes/Note';

import NewNote from '../notes/NewNote';

const NotesList = ({newNote, noteColor, handleSave}) => {

    return (
        <div className="notes-list">
            {newNote === true ? <NewNote color={noteColor} save={handleSave}/> : null}
        </div>
    );
}

export default NotesList;