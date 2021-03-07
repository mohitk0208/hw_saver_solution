import React, { useState } from "react";

import "../../css/Album.css";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";

export default function Album({ album }) {
	const [loading, setLoading] = useState(false);
	const [albumPhotos, setAlbumPhotos] = useState();
	const [openModal, setOpenModal] = useState(false);

	function openModalHandler() {
		setOpenModal(true);
		setLoading(true);

		fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`)
			.then((response) => response.json())
			.then((responseData) => setAlbumPhotos(responseData))
			.catch()
			.finally(setTimeout(() => setLoading(false) ,1000));
	}

	return (
		<div className="album-container">
			<h3 className="album__title">{album.title}</h3>
			<div className="album__footer">
				<p onClick={openModalHandler}>View all Photos &gt; </p>
			</div>
			<Modal open={openModal} onClose={() => setOpenModal(false)}>
				<div className="photos-container">
                    {loading && <LoadingSpinner />}
					{!loading &&
						albumPhotos &&
						albumPhotos.map((photo) => (
							<div className="photo-container">
								<img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
							</div>
						))}
				</div>
			</Modal>
		</div>
	);
}
