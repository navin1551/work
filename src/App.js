import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<NavBar />
			</div>
		);
	}
}
