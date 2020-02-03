import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";

// Health Check
axios.get("http://localhost:5000/ping").then(() => {
    console.log("Should be working")
}).catch(() => {
    console.log("Not working");
})


ReactDOM.render(<App />, document.getElementById('root'));

