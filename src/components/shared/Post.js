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
			.finally(setTimeout(() => setLoading(false), 1000));
	}

	return (
		<>
			<div className="post-container" onClick={modalOpenHandler}>
				<h3 className="post__title">{post.title}</h3>
				<p className="post__body">{post.body}</p>
			</div>
			<Modal open={openModal} onClose={modalCloseHandler}>
				<h2 className="comments__heading" >Comments</h2>
				<hr />
				<div className="comments-container">
					{loading && <LoadingSpinner />}
					{!loading &&
						comments &&
						comments.map((comment) => (
							<Comment comment={comment} key={comment.id} />
						))}
				</div>
			</Modal>
		</>
	);
}
