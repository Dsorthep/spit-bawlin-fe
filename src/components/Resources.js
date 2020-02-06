import React from "react";
import "bulma/css/bulma.css";

export default function Resources() {
    return (
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
    )
}