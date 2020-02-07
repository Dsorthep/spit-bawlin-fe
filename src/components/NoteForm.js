import React, {useState} from "react";
import "bulma/css/bulma.css";

export default function NoteForm(props) {

    const [noteTitle, setNoteTitle] = useState("")
    const [noteDate, setNoteDate] = useState("")
    const [noteText, setNoteText] = useState("")

  return (
    <>
      <div className="note-form">
        <br></br>
        <h1 className="note-form-title">Create a new note!</h1>
        <br></br>
        <br></br>
        <div className="field-create-note">
          {/* <label className="label">Name</label> */}
          <div className="control">
            <input
              className="input note-title"
              type="text"
              value={noteTitle}
              onChange={({ target }) => {
                  setNoteTitle(target.value)
                    console.log(noteTitle)
                }}
              placeholder="TITLE OF YOUR NOTE"
            ></input>
          </div>
        </div>
        <div className="field-create-note">
          {/* <label className="label">Name</label> */}
          <div className="control">
            <input
              className="input note-date"
              type="text"
              value={noteDate}
              onChange={({ target }) => {
                  setNoteDate(target.value)
                  console.log(noteDate)
              }}
              placeholder="DATE AND TIME OF EVENT"
            ></input>
          </div>
        </div>
        <div className="field-create-note">
          {/* <label className="label"></label> */}
          <div className="control">
            <textarea
              className="textarea note-text"
              value={noteText}
              onChange={({ target }) => {
                  setNoteText(target.value)
                  console.log(noteText)
              }}
              placeholder="WRITE YOUR NOTE..."
            ></textarea>
          </div>
        </div>
        <div className="field-create-note">
          <div className="control">
            <button
              className="button note-submit-btn is-black"
              onClick={()=>props.addNote({
                  noteTitle, noteDate, noteText
              })}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
