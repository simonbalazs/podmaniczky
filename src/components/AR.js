import React from 'react';
import '../style.css';

const AR = () => (
    <>
        <a-scene>
            <a-anchor hit-testing-enabled="true">
                <a-entity position='0 0 0' scale='0.5 0.5 0.5' rotation='-360 180 0' gltf-model='url(models/pmy.gltf)'></a-entity>
            </a-anchor>
            <a-camera-static preset="hiro" />
        </a-scene>
    </>

)

export default AR;