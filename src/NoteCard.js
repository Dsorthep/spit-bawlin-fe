import React from "react";
import "bulma/css/bulma.css";
import NoteForm from "./components/NoteForm";
// import PostIt from "./post-it.jpg";

export default function NoteCard({ noteTitle, noteDate, noteText }) {
  return (
    <NoteForm>
      {/* <div className="tile is-ancestor"> */}
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">{noteTitle}</p>
          <p className="subtitle">{noteDate}</p>
          <br></br>
          <p>{noteText}</p>
        </article>
      </div>
    </NoteForm>
    /* <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Job Interview</p>
      <p className="subtitle">@Target: Wednesday, Feb 5</p>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Jr. Dev Meetup</p>
      <p className="subtitle">Friday, Feb  7</p>
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
      </div>
    </article>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">Job Interview</p>
      <p className="subtitle">@General Mills: Wednesday, Feb 12</p>
    </article>
  </div> */
    // </div>
  );
}
