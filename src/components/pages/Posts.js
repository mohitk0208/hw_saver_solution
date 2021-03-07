import React, { useEffect, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Posts.css";
import Post from "../shared/Post";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function Posts() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState();

	useEffect(() => {
		setLoading(true);
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((responseData) => setPosts(responseData))
			.catch((error) => console.log(error))
			.finally(setTimeout(() => setLoading(false) ,2000));
			// setLoading(false)
	}, []);

	return (
		<>
			<div className="posts-container">
				<MainNavigation />
				<div className="posts-main">
					<h2>POSTS</h2>
					<hr />
					{loading && <LoadingSpinner />}
					{!loading && posts && (
						<div className="posts">
							{posts.map((post) => (
								<Post post={post} key={post.id} />
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
