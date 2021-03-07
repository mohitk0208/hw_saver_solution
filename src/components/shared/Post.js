import React, { useState } from "react";

import "../../css/Post.css";
import Modal from "./Modal";

export default function Post({post}) {

	const [comments,setComments] = useState()
	const [openModal,setOpenModal] = useState(false)

	function modalCloseHandler() {
		setOpenModal(false)
	}


	return (
		<div className="post-container">
			<h3 className="post__title">{post.title}</h3>
			<p className="post__body">
				{post.body}
			</p>
			<div className="post__footer">
				<button className="post__comments" onClick={() => setOpenModal(true)}>COMMENTS</button>
			</div>
			<Modal open={openModal} onClose={modalCloseHandler}>
				<h1 style={{color:"white"}}>Hello World</h1>
			</Modal>
		</div>
	);
}
