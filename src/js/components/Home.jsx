import React from "react";
import { Card } from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = (props) => {
	return (
		<div className="d-flex mt-5 justify-content-center">
            
			<Card digit={props.hour2}/>
			<Card digit={props.hour}/>
			<Card digit={props.min2}/>
			<Card digit={props.min}/>
			<Card digit={props.sec2}/>
			<Card digit={props.sec}/>
			
		</div>
	);
};

export default Home;