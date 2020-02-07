import React from "react";
import "bulma/css/bulma.css";
import NoteForm from "./components/NoteForm";
// import PostIt from "./post-it.jpg";

export default function  NoteCard() {
    // const [noteTitle, setNoteTitle] = useState("");
    // const [noteDate, setNoteDate] = useState("");
    // const [noteText, setNoteText] = useState("");
    return (
      
      <NoteForm />
  //     handleFormSubmit={({ preventDefault }) => {
  //       preventDefault();
  //     }}
  //     handleTitleChange={({ target }) => setNoteTitle(target.value)}
  //     handleDateChange={({ target }) => setNoteDate(target.value)}
  //     handleTextChange={({ target }) => setNoteText(target.value)} />
     
  // <div className="tile is-parent">
  //   <article className="tile is-child box">
  //   {noteTitle.map(noteTitle => (
     
  //     <p className="title">{noteTitle}</p>
      
  //   ))}
  //   {noteDate.map(noteDate => (
      
  //     <p className="subtitle">{noteDate}</p>
  //   ))}
  //    <br></br>
  //    {noteText.map(noteText => (
       
  //     <p>{noteText}</p>
  //    ))}
    
  //   </article>
  // </div>
  
    );
  }