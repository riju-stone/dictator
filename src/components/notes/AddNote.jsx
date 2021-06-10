import './Note.css';
import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <div className="note new">
            <textarea 
                className="note-text" 
                rows="5" 
                columns="10" 
                placeholder="Type Something Here..."
                value={noteText}
                onChange={handleChange}>
                </textarea>
            <div className="note-footer">
                <button 
                onClick={handleSaveClick}
                className="save-button">
                Save
                </button>
            </div>
        </div>
    );
}

export default AddNote;