import React, { useState } from "react";
import "bulma/css/bulma.css";
import Modal from "./Modal";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/css-icon.png";
import jsIcon from "../assets/js-icon.png";



export default function Resources() {

    const [show, setShow] = useState(false);
    
    function showModal() {
        setShow(true);
    };

    function hideModal() {
        setShow(false);
    };
        
   
    
        return (
            <>
            <div className="columns">
            <div className="column resource-icon">
            <img src={htmlIcon} onClick={showModal} alt="HTML" />
            </div>
            <div className="column resource-icon">
            <img src={cssIcon} onClick={showModal} alt="HTML" />
            </div>
            <div className="column resource-icon">
            <img src={jsIcon} onClick={showModal} alt="HTML" />
            </div>
            <div>
                <Modal show={show} handleClose={hideModal}>
                </Modal>
            </div>
            </div>
            </>
        )
    }

//     const Modal = ({ children, closeModal, modalState, title }) => {
//         if(!modalState) {
//           return null;
//         }
        
//     return (
//         <>
//         <div className="columns">
        
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
        
// <br></br>
// <div className="column resource-icon">
//   <img src={cssIcon} alt="CSS" />
// </div>
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
// <br></br>
// <div className="column resource-icon">
//   <img src={jsIcon} alt="JS" />
// </div>
// <div className="modal">
//   <div className="modal-background" onClick={closeModal} />
//   <div className="modal-card">
//     <header className="modal-card-head">
//       <p className="modal-card-title">{title}</p>
//       <button className="delete" onClick={closeModal} />
//     </header>
//     <section className="modal-card-body">
//     <div className="content">
//         {children}
//     </div>
//     </section>
//     <footer className="modal-card-foot"> 
//       {/* <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button> */}
//     </footer> 
//   </div>
// </div>
// </div>
// </>
//     );
// }


  
  
  
  

