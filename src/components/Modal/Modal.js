import React from 'react';
import './Modal.css';
import Transition from "react-transition-group/esm/Transition";

const modal = (props) => {
    return (
        <Transition in={props.show} mountOnEnter unmountOnExit timeout={300}>
            {state => {
                const modalClasses = ['Modal', state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null];
                return (
                    <div className={modalClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                );
            }}
        </Transition>
    );
};

export default modal;
