import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group'

import "./Modal.css";

export const Modal = props => {

    const closeOnEsc = e => {
        if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
        }
    };

    function cleanUp() {
        document.body.removeEventListener("keydown", closeOnEsc);
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEsc);
        cleanUp()
    }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={props.show} unmountOnExit timeout={{enter: 0, exit: 300}} >
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='content-modal'  onClick={ e => e.stopPropagation() }>

                <div className="body-modal">
                    <p className="title-modal">{props.title}</p>
                </div>

                <div className="footer-modal">
                    <button onClick={props.onClose} className='close-button-modal'>Close</button>
                </div>

            </div>
        </div>
    </CSSTransition>,
    document.getElementById("root")
  )
}
