import "../uni.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { _SocialLinks, _QuickLinks} from "../Data/Dealsup";

function Footer()
{
	return(
		<footer className="Footer flex-r-se-c">
			<QuickLinks />
			<SocialLinks />
		</footer>
	)
}

function SocialLinks()
{
	return (
		<ul className="Social-Links flex-r-se-c">
			{_SocialLinks.map(({social, url})=>
			{
				return <Item item={social} url={url} />
			})}
		</ul>
	)
}

function QuickLinks()
{
	return (
		<ul className="Quick-Links flex-c-se-c">
			{_QuickLinks.map(({title, url})=>{
				return <Item item={title} url={url} />
			})}
		</ul>
	)
}

function Item({item, url})
{
	return (
		<Link className="Links" to={url}>{item}</Link>
	)
}


export default Footer