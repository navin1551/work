import React from 'react';
import HealthNucleus from '../../assets/navbar-icons/Health Nucleus.png';
import './NavBar.css';

export default function NavBar() {
	return (
		<div className="nav-bar">
			<div className="first-half-nav">
				<img src={HealthNucleus} alt="Health Nucleus icon" id="health-nucleus-icon" />
				<span>Home</span>
				<span>Visits</span>
				<span>Health</span>
			</div>
			<div className="second-half-nav">
				<span>Help</span>
				<span>Test Computer</span>
				<span>User</span>
			</div>
		</div>
	);
}
