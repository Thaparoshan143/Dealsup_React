import "../uni.css"
import "./Card.css"

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
