import './Note.css';
import React, { useState } from 'react';

const NewNote = ({color, handleSave}) => {

    const [noteText, setNoteText] = useState('');

    const handleTextChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSaveNote = () => {
        if(noteText.trim().length > 0){
            handleSave(noteText);
            setNoteText('');
        }
    }

    return(
        <div className="note new" style={{backgroundColor: color}}>
            <textarea 
                className="note-text" 
                rows="6" 
                columns="10"
                placeholder="Type Something Here..."
                value={noteText}
                onChange={handleTextChange}>
                </textarea>
            <div className="note-footer">
                <button
                onClick = {handleSaveNote}
                className="save-button">
                Save
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 download-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 record-button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            </div>
        </div>
    );
}

export default NewNote;