import "../uni.css"
import "./Home.css"
import { _Description, _Brand } from "../Data/Dealsup"


function Home()
{
	return(
		<div className="Home page flex-r-se-c">
			<div className="Hero-Cont">
				<img className="Hero-Img" src={"https://cdn.dribbble.com/users/3832465/screenshots/10993367/media/39b1dd573a3e078a1c6793758d72f627.jpg?compress=1&resize=400x300&vertical=center"} alt ="Brand Image" />
			</div>
			<div className="Info flex-c-se-c">
				<h1 className="pCase heading theme-text">{_Brand.name}</h1>
				<h2 className="">{_Brand.theme}</h2>
				<p>{_Description}</p>
			</div>
		</div>
	)
}

export default Home