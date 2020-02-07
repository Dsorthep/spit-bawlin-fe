import React from 'react';
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import Resources from "./components/Resources";
import Coffee from "./components/Coffee";

import './App.css';
import "bulma/css/bulma.css";
// import * as Coffeehouse from "./coffeehouses.jpg";


export default function App() {
  return (
    <div className="App">
      <h1 className="brand">Spit Bawlin</h1>
      <br></br>
      <div className="columns form-coffee"><NoteForm />
      <Coffee />
      </div>
      <br></br>
      <NoteCard />
      <br></br>
      <Resources />
      
<br></br>


      </div>
      
      
    
      
    
  );
}


