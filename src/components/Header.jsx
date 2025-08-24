import React from 'react'
import "../App.css"
import morsk from "../assets/morsk.png"

const Header = () => {
		return (
			<header>
				<nav>
					<div className="image"><img src={morsk} alt="morsk logo" width="125px" /></div>
					<ul>
						<li><a href="#">Why Morsk?</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Solutions</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<button>Hire us</button>
					</nav>
					<div className="main"></div>
			</header>
						)
}

export default Header