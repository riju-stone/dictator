import Note from './Note';
import AddNote from './AddNote';
import './NotesList.css';


const displayNotes = (notes, handleDeleteNote) => {
    if(notes.length > 0)
        return (notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>));
    else
        return (<h2 className="no-notes">No Notes Available...</h2>)
}

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {displayNotes(notes, handleDeleteNote)}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}

export default NotesList;