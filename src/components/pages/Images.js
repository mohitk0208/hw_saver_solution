import React from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Images.css";

export default function Images() {
	return (
		<>
			<div className="images-container center">
				<MainNavigation />
				<div className="images-main">
					<div className="search-container">
						<form className="center">
							<input type="search" className="search-bar" />
							<button className="search-btn" type="submit">
								S
							</button>
						</form>
					</div>

					<div className="search-result-container">
						<img width="404px" height="404px" src="https://source.unsplash.com/random/500x500" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
