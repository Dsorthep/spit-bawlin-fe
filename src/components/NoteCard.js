import React from "react";
import "bulma/css/bulma.css";
// import PostIt from "./post-it.jpg";

export default function  NoteCard() {
    return (
      <div className="tile is-ancestor">
  <div className="tile is-parent">
    <article className="tile is-child box">
      <p className="title">TEST!!!</p>
      <p className="subtitle">Thursday, Feb 6</p>
    </article>
  </div>
  <div className="tile is-parent">
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
  </div>
</div>
    )
  }