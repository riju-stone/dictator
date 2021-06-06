import React, { useState } from 'react';
import './App.css';
import NoteList from './components/notes/NotesList';
import Search from './components/search/Search';
import Header from './components/header/Header';
import { nanoid } from 'nanoid';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNoteList = [...notes, newNote];
    setNotes(newNoteList);
  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  const downloadNote = (id) => {
    const getNote = notes.filter((note) => note.id === id);
    const data = "data:text/plain;base64,"+ encodeBase64(getNote[0].text);
    saveAs(data, `${id}.txt`);
  }

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  return(
    <div className={`${darkMode && 'dark'}`}>
      <div className="app container">
        <Header handleTheme={setDarkMode}/>
        <Search handleSearch={setSearchText}/>
        <NoteList 
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText))
          } 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
          handleDownloadNote={downloadNote}
          />
      </div>
    </div>
  );
}

export default App;
