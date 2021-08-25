import React, { useEffect, useState} from 'react';
import './App.css';
import NoteList from './components/notes-list/NotesList';
import Search from './components/search/Search';
import { nanoid } from 'nanoid';
import {saveAs, encodeBase64} from '@progress/kendo-file-saver';

function App(){

  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  const [noteColor, setNoteColor] = useState('#00DA91');
  const [searchText, setSearchText] = useState('');


  const handleNewNote = (noteColor) => {
    if(newNote === false)
      setNewNote(true);
    setNoteColor(noteColor);
  }

  const handleDeleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  const handleNoteSave = (text) => {
    const date = new Date();
    const newNoteContainer = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    } 

    const newNoteList = [...notes, newNoteContainer];
    setNotes(newNoteList);
  }
  
  const handleNoteDownload = () => {
    const getNote = notes.filter((note) => note.id === id);
    const data = "data:text/plain;base64,"+ encodeBase64(getNote[0].date+"\n\n"+getNote[0].text);
    saveAs(data, `${id}.txt`);
  }

  return(
      <div className="app">
      <div className="app-menu wrapper">
        <button className="add">
        <svg viewBox="0 0 448 512" width="100" title="plus">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        </button>
        <button className="option one" value="#e80c58" onClick={(e) => handleNewNote(e.target.value)}></button>
        <button className="option two" value="#bd6e00" onClick={(e) => handleNewNote(e.target.value)}></button>
        <button className="option three" value="#506ad4" onClick={(e) => handleNewNote(e.target.value)}></button>
        <button className="option four" value="#0ca886" onClick={(e) => handleNewNote(e.target.value)}></button>
        <button className="option five" value="#88c010" onClick={(e) => handleNewNote(e.target.value)}></button>
        <button className="option six" value="#468091" onClick={(e) => handleNewNote(e.target.value)}></button>
      </div>
      <div className="app-content">
        <Search className="app-search"/>
        <NoteList className="app-noteslist" newNote={newNote} noteColor={noteColor} handleNoteSave = {handleNoteSave}/>
      </div>
      </div>
  );
}

export default App;
