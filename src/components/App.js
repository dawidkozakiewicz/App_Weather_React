import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';
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

	// handleCitySubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log('potwierdzony formularz');
	// 	const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state
	// 		.value},pl&APPID=${APIKey}&units=metric`;
	// 	fetch(API)
	// 		.then((response) => {
	// 			if (response.ok) {
	// 				return response;
	// 			}
	// 			throw Error('Nie udało się');
	// 		})
	// 		.then((response) => response.json())
	// 		.then((data) => {
  //       const time = new Date().toLocaleString()
	// 			this.setState( prevState => ({
  //         err: false,
  //         date: time,
	// 		    city: this.state.value,
	// 		    sunrise: data.sys.sunrise,
	// 		    sunset: data.sys.sunset,
	// 		    temp: data.main.temp,
	// 		    pressure: data.main.pressure,
	// 		    wind: data.wind.speed,
	// 			}));
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 			this.setState(prevState => ({ 
	// 				err: true,
	// 				city: prevState.value
	// 			}))
	// 		})
	// };

	handleInputChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

  componentDidUpdate(prevProps, prevState) {
		// console.log(`poprzednia wartość: ${prevState.value}`)
		// console.log(`aktualna wartość: ${this.state.value}`)
		if (prevState.value.length === 0) return
		if (prevState.value !== this.state.value) {
			
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
        const time = new Date().toLocaleString()
				this.setState( prevState => ({
          err: false,
          date: time,
			    city: this.state.value,
			    sunrise: data.sys.sunrise,
			    sunset: data.sys.sunset,
			    temp: data.main.temp,
			    pressure: data.main.pressure,
			    wind: data.wind.speed,
				}));
			})
			.catch(err => {
				console.log(err)
				this.setState(prevState => ({ 
					err: true,
					city: prevState.value
				}))
			})


		}

	}

	render() {
		return (
			<div className="App">
				<Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
				<Result weather={this.state}/>
			</div>
		);
	}
}

export default App;
