import React from "react";
import "bulma/css/bulma.css";
// import htmlIcon from "../assets/html-icon.png";

export default function Modal({handleClose, show, children}) {
    
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <button className="modal-close-btn" onClick={handleClose}>close</button>
                </section>
            </div>
        );
    };
    
