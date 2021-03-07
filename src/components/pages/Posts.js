import React, { useEffect, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Posts.css";
import Post from "../shared/Post";

export default function Posts() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((responseData) => setPosts(responseData))
			.catch((error) => console.log(error))
			.finally(setLoading(false));
	}, []);

	return (
		<>
			{!loading && posts && (
				<div className="posts-container">
					<MainNavigation />
					<div className="posts-main">
						<h2>POSTS</h2>
						<hr />
						<div className="posts">
							{posts.map((post) => (
								<Post post={post} key={post.id} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
