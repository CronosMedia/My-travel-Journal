import React from "react";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<img src="/img/earth-icon.png" alt="Logo" className="earth-logo" />
			<span className="logo-text">my travel journal.</span>
		</header>
	);
};

export default Header;
