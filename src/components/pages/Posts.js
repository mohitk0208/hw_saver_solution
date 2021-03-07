import React from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Posts.css";
import Post from "../shared/Post";

export default function Posts() {
	return (
		<div className="posts-container">
			<MainNavigation />
			<div className="posts-main">
				<h2>POSTS</h2>
				<hr />
				<div className="posts">
					<Post />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
}
