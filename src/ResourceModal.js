import React from "react";
import "bulma/css/bulma.css";
import Resources from "./components/Resources";
import { useStateValue } from "../utils/StateContext";


export default function ResourceModal({ resourceTitle, resourceUrl}) {
    const [globalState, dispatch] = useStateValue();
    return (
        <Resources>
            <div>
                
                    <section className="modal-main">
                    <ul>
                        <li>
                            <p className="title">{resourceTitle}</p>
                            <p className="subtitle">{resourceUrl}</p>
                        </li>
                    </ul>
                    <button className="modal-close-btn">close</button>
                </section>
                
            </div>
        </Resources>
    );
}