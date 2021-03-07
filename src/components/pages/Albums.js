import React, { useEffect, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Albums.css";
import Album from "../shared/Album";

export default function Albums() {
	const [loading, setLoading] = useState(true);
	const [albums, setAlbums] = useState();

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/albums")
			.then((response) => response.json())
			.then((responseData) => setAlbums(responseData))
			.catch((err) => console.error(err))
			.finally(setLoading(false));
	}, []);

	return (
		<>
			{!loading && albums && (
				<div className="albums-container">
					<MainNavigation />
					<div className="albums-main">
						<h2>ALBUMS</h2>
						<hr />
						<div className="albums">
							{albums.map(album => <Album album={album} key={album.id} />)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
