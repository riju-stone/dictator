import Note from './Note';
import AddNote from './AddNote';
import './NotesList.css';
import React from 'react';


const displayNotes = (notes, handleDeleteNote, handleDownloadNote) => {
    if(notes.length > 0)
        return (notes.map((note) => <Note 
                key={note.id}
                id={note.id} 
                text={note.text} 
                date={note.date} 
                handleDeleteNote={handleDeleteNote}
                handleDownloadNote={handleDownloadNote}
        />));
    else
        return (<h2 className="no-notes">No Notes Available...</h2>)
}

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleDownloadNote }) => {
    return (
        <div className="notes-list">
            {displayNotes(notes, handleDeleteNote, handleDownloadNote)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NotesList;