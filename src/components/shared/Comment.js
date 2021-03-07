import React from "react";

import "../../css/Comment.css"

export default function Comment({ comment }) {
	return (
		<div className="comment">
			<p className="comment__body">{comment.body}</p>
		</div>
	);
}
