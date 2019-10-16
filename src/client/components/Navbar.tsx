import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
			<span className="navbar-brand">Luke's Blog</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<div className="navbar-nav ml-auto">
					<NavLink exact to="/" className="nav-item nav-link" activeClassName="nav-item nav-link active border-bottom">
						View Blogs
					</NavLink>
					<NavLink exact to="/compose" className="nav-item nav-link" activeClassName="nav-item nav-link active border-bottom">
						Compose Blog
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;
