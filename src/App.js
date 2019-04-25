import React, { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  state = {
    color: 'Red'
  }

  handleColorChange = (e) => {
    console.log('clicked')
    console.log(e.target.innerText)
    this.setState({
      color: e.target.innerText
    })
  }

  render() {
    return (
      <div style={{position: 'absolute', height: '95vh', width: '100%'}}>
        <Header handleColorChange={this.handleColorChange} color={this.state.color} />
        <Body color={this.state.color}/>
        <Footer />
      </div>
    )
  }
}

export default App
