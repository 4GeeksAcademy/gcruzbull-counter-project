import React from "react";
import { Card } from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	return (
		<div className="justify-content-center">
            <>
				<Card/>
			</>
		</div>
	);
};

export default Home;