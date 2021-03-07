import React, { useEffect, useRef, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Images.css";

export default function Images() {
	const searchBarRef = useRef();
	const searchResultContainerRef = useRef();
	const [image, setImage] = useState("https://source.unsplash.com/random/400x400");

	function searchSubmitHandler(e) {
		e.preventDefault();

		const keywordString = searchBarRef.current.value.split(/\s+/).join(",");

		console.log(keywordString);

		setImage(`https://source.unsplash.com/400x400/?${keywordString}`);
	}

	return (
		<>
			<div className="images-container center">
				<MainNavigation />
				<div className="images-main">
					<div className="search-container">
						<p>type space seperated keywords to search for image</p>
						<form className="center" onSubmit={searchSubmitHandler}>
							<input type="search" className="search-bar" ref={searchBarRef} />
							<button className="search-btn" type="submit">
								S
							</button>
						</form>
					</div>

					<div
						className="search-result-container"
						ref={searchResultContainerRef}
					>
						{image && <img width="404px" src={image} alt="" />}
					</div>
				</div>
			</div>
		</>
	);
}
