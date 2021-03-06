import React from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Posts.css"

export default function Posts() {
	return (
		<div className="posts-container">
			<MainNavigation />
			<div className="posts-main">
				<h2>POSTS</h2>
				<hr />
			</div>
		</div>
	);
}
