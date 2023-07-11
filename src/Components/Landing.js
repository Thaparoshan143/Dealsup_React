import "./Landing.css";
import "../uni.css";
import { FaSearch } from 'react-icons/fa';

function Landing() {
  return (
    <>
    <div className="page Landing flex-c-se-c">
        <div className="bg"></div>
        <h1 className="theme-text">Dealsup</h1>
        <div className="Search-Wrapper">
            <div className="flex-r-sb-c">
                <input type="text" placeholder="Search product that you want here.."/>
                <a  href={"#"} className="flex-r-se-c"><FaSearch className="Search-Icon" /></a>
            </div>
        </div>

        <a className="theme-button" href={"./home"}>Explore More</a>
    </div>
    </>
  )
}

export default Landing