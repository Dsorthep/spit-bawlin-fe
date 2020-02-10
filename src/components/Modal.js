import React from "react";
import "bulma/css/bulma.css";
import { useStateValue } from "../utils/StateContext";

// import htmlIcon from "../assets/html-icon.png";

export default function Modal({handleClose, show}) {
    
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        const [globalState, dispatch] = useStateValue();
    
        return (
            <div className={showHideClassName}>
                {globalState.resources.map((resource, i) => (
                    <section className="modal-main" key={i + "-resource"}>
                    <ul>
                        <li>
                            <p className="title">{resource.title}</p>
                            <p className="subtitle">{resource.url}</p>
                        </li>
                    </ul>
                    <button className="modal-close-btn" onClick={handleClose}>close</button>
                </section>
                ))}
                
            </div>
        );
    };
    
