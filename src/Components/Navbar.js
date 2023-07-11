import "../uni.css";
import "./Navbar.css";
import { _NavItems } from "../Data/MenuItems";
import { NavLink } from "react-router-dom";
import dealsuplogo from "../assets/ dealsup-logo.jpg"

function Navbar()
{
	return(
		<nav className="Navbar">
			<div className="Nav-Wrapper flex-r-sb-c">
				<a className="Logo-Cont" href={"./landing"}>
					<img className="Logo" src={dealsuplogo} alt="brand logo" />
				</a>
				{_NavItems.map(({title, url})=>{
						return <NavItem title={title} url={url} />
				})}
			</div>
		</nav>
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