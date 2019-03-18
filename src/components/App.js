import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
const APIKey = '55bae99201abf05122511e2802d3fc8b';

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
		err: false
	};

	handleCitySubmit = (e) => {
		e.preventDefault();
		console.log('potwierdzony formularz');
		const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state
			.value},pl&APPID=${APIKey}&units=metric`;
		fetch(API)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error('Nie udało się');
			})
			.then((response) => response.json())
			.then((data) => {
        const time = new Date().toLocaleDateString()
				this.setState({
          err: false,
          date: time,
			    city: this.state.value,
			    sunrise: data.sys.sunrise,
			    sunset: data.sys.sunset,
			    temp: data.main.temp,
			    pressure: data.main.pressure,
			    wind: data.wind,
				});
			})
			.catch((err) => {
			  this.setState({
			    err: true,
			    
			  });
			});
	};
	handleInputChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
				<Result error={this.state.err}/>
			</div>
		);
	}
}

export default App;
