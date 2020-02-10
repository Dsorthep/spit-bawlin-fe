import React from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import Resources from "./components/Resources";
import Coffee from "./components/Coffee";
import { StateProvider } from "./utils/StateContext";

import "./App.css";
import "bulma/css/bulma.css";
// import * as Coffeehouse from "./coffeehouses.jpg";

export default function App() {
  // const [state, setState] = useState({
  //   title: '',
  //   date: '',
  //   text: ''
  // })

  // const changeState = (key, val) => {
  //   setState({
  //     ...state,
  //     [key]: val
  //   })
  // }

  // const submitNote = () => {
  //   console.log(state)
  // }

  return (
    <div className="App">
      <StateProvider>
        <h1 className="brand">Spit Bawlin</h1>
        <br></br>
        <div className="columns form-coffee">
          <NoteForm
            // state={state}
            // changeState={changeState}
            // submitNote={submitNote}
          />
          <Coffee />
        </div>
        <br></br>
        <NoteCard />
        <br></br>
        <Resources />

        <br></br>
      </StateProvider>
    </div>
  );
}
