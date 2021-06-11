import React, {useState} from 'react';
import './App.css';
import NoteList from './components/notes/NotesList';
import Search from './components/search/Search';
import {nanoid} from 'nanoid';
import {saveAs, encodeBase64} from '@progress/kendo-file-saver';
import AddNote from './components/add-note/AddNote';


function App(){
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
    const data = "data:text/plain;base64,"+ encodeBase64(getNote[0].date+"\n\n"+getNote[0].text);
    saveAs(data, `${id}.txt`);
  }

  const [searchText, setSearchText] = useState('');


  return(
      <div className="app">
      <div className="app-menu">
        <AddNote />
      </div>
      <div className="app-content">
      <Search className="app-search" handleSearch={setSearchText}/>
      <NoteList 
        className="app-noteslist"
        notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchText))
        } 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        handleDownloadNote={downloadNote}/>
      </div>
      </div>
  );
}

export default App;
