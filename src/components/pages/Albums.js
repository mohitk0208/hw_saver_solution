import React from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Albums.css";
import Album from "../shared/Album";

export default function Albums() {
	return (
		<div className="albums-container">
			<MainNavigation />
			<div className="albums-main">
				<h2>ALBUMS</h2>
				<hr />
				<div className="albums">
                    <Album />
                    <Album />
                    <Album />
                    <Album />
                </div>
			</div>
		</div>
	);
}
