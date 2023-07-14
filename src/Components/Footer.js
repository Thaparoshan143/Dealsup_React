import "../uni.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { _SocialLinks, _QuickLinks} from "../Data/Dealsup";

function Footer()
{
	return(
		<footer className="flex-c-se-c">
			<div className="flex-r-se-c Footer">
				<div className="Loct-Info flex-c-se-c">
					<h1 className="theme-text">Thapathali, Kathmandu</h1>
					<h2>01-1492419</h2>
					<h3>info.dealsup@gmail.com</h3>
				</div>
				<QuickLinks />
				<SocialLinks />
			</div>
			<br />
			<br />
			<div>Copyright &copy; 2023. All right reserved</div>
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