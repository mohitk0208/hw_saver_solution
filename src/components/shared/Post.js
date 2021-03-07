import React, { useState } from "react";

import "../../css/Post.css";
import Modal from "./Modal";
import Comment from "./Comment";
import LoadingSpinner from "./LoadingSpinner";

export default function Post({ post }) {
	const [loading, setLoading] = useState(false);
	const [comments, setComments] = useState();
	const [openModal, setOpenModal] = useState(false);

	function modalCloseHandler() {
		setOpenModal(false);
	}

	function modalOpenHandler() {
		setOpenModal(true);
		setLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
			.then((response) => response.json())
			.then((responseData) => setComments(responseData))
			.then(console.log(comments))
			.catch()
			.finally(setTimeout(() => setLoading(false) ,2000));

		
	}

	return (
		<div className="post-container">
			<h3 className="post__title">{post.title}</h3>
			<p className="post__body">{post.body}</p>
			<div className="post__footer">
				<button className="post__comments" onClick={modalOpenHandler}>
					COMMENTS
				</button>
			</div>
			<Modal open={openModal} onClose={modalCloseHandler}>
				<h1 style={{ color: "white" }}>Hello World</h1>
				<div className="comments-container">
					{loading && <LoadingSpinner />}
					{!loading &&
						comments &&
						comments.map((comment) => (
							<Comment comment={comment} key={comment.id} />
						))}
				</div>
			</Modal>
		</div>
	);
}
