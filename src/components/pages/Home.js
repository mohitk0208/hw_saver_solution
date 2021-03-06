import React from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Home.css";

export default function Home() {
	return (
		<>
			<MainNavigation />
			<div className="home-container">
				<div className="home-main">
					<h2 className="home-main__title">Perseverance Takes a Spin</h2>
					<p className="home-main__explanation">
						After arriving at Jezero Crater on Mars, Perseverance went for a
						spin on March 4. This sharp image from the car-sized rover's Navcam
						shows tracks left by its wheels in the martian soil. In preparation
						for operations on the surface of the Red Planet, its first drive
						lasted about 33 minutes. On a short and successful test drive
						Perseverance moved forward 4 meters, made a 150 degree turn, backed
						up for 2.5 meters, and now occupies a different parking space at its
						newly christened Octavia E. Butler Landing location. Though the
						total travel distance of the rover's first outing was about 6.5
						meters (21 feet), regular commutes of 200 meters or more can be
						expected in the future. Please take a short survey in aesthetics &
						astronomy: Sonification
					</p>
				</div>
			</div>
		</>
	);
}
