import "../uni.css";
import "./Navbar.css";
import { _NavItems } from "../Data/MenuItems";
import { NavLink } from "react-router-dom";
import dealsuplogo from "../assets/ dealsup-logo.jpg"
import { useState } from "react";
import { FaBars, FaMinus } from "react-icons/fa";

function Navbar()
{
	const [isOpen, setIsOpen] = useState(false);
	
	function changeState()
	{
		setIsOpen(pre=>!pre);
	}

	return(
	<>
		<div className="Mobile-Btn" onClick={changeState}>
			{!isOpen?<FaBars />:<FaMinus />}
		</div>
		{isOpen ?<nav className="Mobile Navbar flex-r-sb-c">
			<a className="Logo-Cont" href={"./landing"}>
				<img className="Logo" src={dealsuplogo} alt="brand logo" />
			</a>
			<div className="Nav-Wrapper flex-r-se-c">
				{_NavItems.map(({title, url})=>{
						return <NavItem title={title} url={url} />
				})}
			</div>
		</nav>:<></>}
		<nav className="Desktop Navbar flex-r-sb-c">
			<a className="Logo-Cont" href={"./landing"}>
				<img className="Logo" src={dealsuplogo} alt="brand logo" />
			</a>
			<div className="Nav-Wrapper flex-r-se-c">
				{_NavItems.map(({title, url})=>{
						return <NavItem title={title} url={url} />
				})}
			</div>
		</nav>
	</>
	)
}

function NavItem({title, url})
{
	return (
		<NavLink className="Nav-Item pse-ul1" to={url}>
			{title}
		</NavLink>
	)
}

export default Navbar