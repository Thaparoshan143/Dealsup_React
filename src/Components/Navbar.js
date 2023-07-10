import "../uni.css"
import "./Navbar.css"
import { _NavItems } from "../Data/MenuItems"
import { NavLink } from "react-router-dom"

function Navbar()
{
	return(
		<nav className="Navbar">
			<div className="Nav-Wrapper flex-r-se-c">
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