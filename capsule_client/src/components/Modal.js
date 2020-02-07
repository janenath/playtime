import React, { Component } from 'react';

class Modal extends Component {
 
    render() {
        return(
            <div>
                {this.props.showModal ? <h1>Modal</h1> : ''}
            </div>
            )
        }
    }

export default Modal;