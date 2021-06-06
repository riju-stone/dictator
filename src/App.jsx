import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { nanoid } from 'nanoid';

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
          handleDeleteNote={deleteNote}/>
      </div>
    </div>
  );
}

export default App;
