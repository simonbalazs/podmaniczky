import React from 'react';
import '../style.css';

const Overlay = () => {

    const handleClick = () => console.log('CLICk!!4');

    return (
    <div id="overlay" onClick={() => alert('hello')}>
        <p><a href="google.com">PODMANICZKY</a></p>
    </div>
    )
}

export default Overlay;