import React, {useState} from 'react';
import NoteForm from "./components/NoteForm";
// import NoteCard from "./components/NoteCard";
import Resources from "./components/Resources";
import Coffee from "./components/Coffee";

import './App.css';
import "bulma/css/bulma.css";
// import * as Coffeehouse from "./coffeehouses.jpg";


export default function App(noteTitle, noteDate, noteText) {
  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes([...notes, note])
  }

  return (
    <div className="App">
      <h1 className="brand">Spit Bawlin</h1>
      <br></br>
      <div className="columns form-coffee">
      <NoteForm addNote={addNote}/>
      <Coffee />
      </div>
      <br></br>
      {notes.map(note => (
        <div className="tile is-parent">
        <article className="tile is-child box">
        
          <p className="title">{noteTitle}</p>
          
        
        
          
          <p className="subtitle">{noteDate}</p>
      
         <br></br>
         
           
          <p>{noteText}</p>
         
        
        </article>
      </div>
      ))}
      <br></br>
      <Resources />
      
<br></br>


      </div>
      
      
    
      
    
  );
}


