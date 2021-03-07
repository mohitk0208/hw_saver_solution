import React from "react";

import "../../css/Post.css";

export default function Post({post}) {
	
	return (
		<div className="post-container">
			<h3 className="post__title">csdkbksndn sadbudsb</h3>
			<p className="post__body">
				est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
				dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
				reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
			</p>
			<div className="post__footer">
				<button className="post__comments">COMMENTS</button>
			</div>
		</div>
	);
}
