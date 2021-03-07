import React, { useEffect, useRef, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Images.css";
import search from "../../iconmonstr-magnifier-6.svg";

export default function Images() {
	const searchBarRef = useRef();
	const searchResultContainerRef = useRef();
	const [image, setImage] = useState(
		"https://source.unsplash.com/random/400x400"
	);

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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
								</svg>
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
