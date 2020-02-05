import React from 'react';
import NoteCard from "./NoteCard";
import './App.css';
import "bulma/css/bulma.css";
// import * as Coffeehouse from "./coffeehouses.jpg";


export default function App() {
  return (
    <div className="App">
      <h1 className="brand">Spit Bawlin</h1>
      <textarea className="memo" placeholder="What's on your mind?"></textarea>
      <br></br>
      <button className="button">CREATE A MEMO</button>
      <br></br>
      <NoteCard />
      <div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="resources-menu">
      <a href="https://www.javascript.com/">
        <span class="icon"><i class="fab fa-js-square" aria-hidden="true"></i></span>
        <span>JavaScript Resources</span>
      </a>
    </li>
    <li class="resources-menu">
      <a href="https://reactjs.org/">
        <span class="icon"><i class="fab fa-react" aria-hidden="true"></i></span>
        <span>ReactJS Resources</span>
      </a>
    </li>
    <li class="resources-menu">
      <a href="https://www.w3schools.com/html/html_css.asp">
        <span class="icon"><i class="fas fa-file-code" aria-hidden="true"></i></span>
        <span>HTML/CSS Resources</span>
      </a>
    </li>
  </ul>
</div>


      </div>
      
      
    
      
    
  );
}


