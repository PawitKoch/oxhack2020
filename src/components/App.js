import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Draggable from 'react-draggable';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  } 

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Draggable handle="#imhandle">
            <div className="note">
              <span id="imhandle"><DragIndicatorIcon/></span>
              <Note
                key={index}
                id={index}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            </div>

          </Draggable>

        );
      })}
      <Footer />
    </div>
  );
}

export default App;
