import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'


class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
}

  handleCitySubmit = (e) => {
    e.preventDefault()
    console.log('potwierdzony formularz')
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},pl&APPID=55bae99201abf05122511e2802d3fc8b`
    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <Form 
       value={this.state.value}
      change={this.handleInputChange}
      submit={this.handleCitySubmit}
       />
       <Result />
      </div>
    );
  }
}

export default App;
