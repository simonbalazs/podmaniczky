import React from 'react';
import '../style.css';

const Overlay = (props) => {

    return (
    <div id="overlay">
        <div id="header" onClick={props.toggleInfo}>
            <a>PODMANICZKY</a>
        </div>

        {
            props.showAR &&
            <div id="footer">
                <p>Tartsd a kamerát a QR kódra</p>
            </div>
        }
    </div>
    )
}

export default Overlay;