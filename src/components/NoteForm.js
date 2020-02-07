import React from "react";
import "bulma/css/bulma.css";

export default function NoteForm() {
    
    return (
        <>
        <div className="note-form">
            <br></br>
            <h1>Create a new note!</h1>
            <br></br>
            <br></br>
        <div className="field-create-note">
  {/* <label className="label">Name</label> */}
  <div className="control">
    <input className="input" type="text" placeholder="TITLE OF YOUR NOTE" />
  </div>
</div>
<div className="field-create-note">
  {/* <label className="label">Name</label> */}
  <div className="control">
    <input className="input" type="text" placeholder="DATE AND TIME OF EVENT" />
  </div>
</div>
<div className="field-create-note">
  {/* <label className="label"></label> */}
  <div className="control">
    <textarea className="textarea" placeholder="WRITE YOUR NOTE..."></textarea>
  </div>
</div>
<div className="field-create-note">
  <div className="control">
    <button class="button is-dark">SUBMIT</button>
  </div>
</div>
</div>
</>
    )
}
