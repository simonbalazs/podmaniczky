import React from 'react';
import '../style.css';

const Overlay = (props) => {

    return (
    <div id="overlay">
        <div id="header" onClick={props.toggleInfo}>
            <h1>PODMANICZKY</h1>
        </div>

        {
            props.showAR &&
            <div id="footer">
                <div class="wrapper" onClick={props.toggleInfo}>
                    <p>
                        <strong>Tartsd a kamerát a QR kódra</strong><br />
                        Mi ez? »
                    </p>
                </div>
            </div>
        }
    </div>
    )
}

export default Overlay;