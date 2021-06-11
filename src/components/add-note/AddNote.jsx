import React from 'react';
import './AddNote.css'


const AddNote = () => {
    return (
        <div className="wrapper">
        <button className="add">
          <svg viewBox="0 0 448 512" width="100" title="plus">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <button className="option one"></button>
        <button className="option two"></button>
        <button className="option three"></button>
        <button className="option four"></button>
        <button className="option five"></button>
        <button className="option six"></button>
      </div>
    );
}

export default AddNote;