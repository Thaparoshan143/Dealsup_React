import "../uni.css";
import "./Card.css";
import { FaBookmark, FaStar} from "react-icons/fa";

export function InfoCard({img, title, count})
{
	return(
		<div className="Info-Card flex-c-se-c">
			<div>{img}</div>
			<h2 className="pCase theme-text">{title}</h2>
			<h2>{count}</h2>
		</div>
	)
}

export function VendorCard({name, thumbnailSrc, serve, description, ratings})
{
	function AddBookMark()
	{
		// Backend logic to add to bookmark
	}

	return (
		<div className="Vendor-Card flex-c-se-c">
			<h1 className="theme-text Card-Title">{name}</h1>
			<img src={thumbnailSrc} className="Card-Img" />
			<h2 className="Card-Sub-TItle">{serve}</h2>
			<hr />
			<p className="Card-Desc">{description}</p>
			<div className="Ratings theme-text flex-r-sb-c">
				<span className="flex-r-se-c">Ratings : {ratings}<FaStar style={{margin:"0 0.4rem"}} /></span>
				<FaBookmark onClick={AddBookMark} className="Bookmark icon-medium" />
			</div>
		</div>
	)
}