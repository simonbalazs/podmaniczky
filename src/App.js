import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene arjs='sourceType: webcam; debugUIEnabled: false'>
          <a-anchor hit-testing-enabled="true">
              <a-entity position='0 0 0' scale='0.05 0.05 0.05' rotation='200 0 0' obj-model='obj: url(models/dog.obj); mtl: url(models/dog.mtl)'></a-entity>
          </a-anchor>
          <a-camera-static preset="hiro" />
      </a-scene>
    </div>
  );
}

export default App;
