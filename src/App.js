import React from 'react';
import AR from './components/AR';
import Overlay from './components/Overlay';
import About from './components/About';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showAR: true,
      showInfo: false
    }
  }
  
  toggleView = () => {
    this.setState({
      showAR: !this.state.showAR,
      showInfo: !this.state.showInfo
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <>
        <Overlay showAR={this.state.showAR} toggleInfo={this.toggleView} />
        {this.state.showAR && <AR />} 
        {this.state.showInfo && <About toggleInfo={this.toggleView}/>} 
      </>
    );
  }
}
export default App;
