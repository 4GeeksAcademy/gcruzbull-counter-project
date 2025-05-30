import React from "react";
import { Card } from "./Card";
// import index.css from "../styles/index.css";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = (props) => {
	return (
		<div>
			<div className="d-flex mt-5 justify-content-center align-content-center" id="counter">
				<Card digit={<i className="fa-regular fa-clock"></i>}/>
				<Card digit={props.hour2}/>
				<Card digit={props.hour}/>
				<Card digit={props.min2}/>
				<Card digit={props.min}/>
				<Card digit={props.sec2}/>
				<Card digit={props.sec}/>
			</div>
		</div>		
	);
};

export default Home;