import React from 'react'

import "../../css/Album.css"

export default function Album({album}) {
    return (
        <div className="album-container">
            <h3 className="album__title">{album.title}</h3>
            <div className="album__footer">
                <p>View all Photos &gt; </p>
            </div>
        </div>
    )
}
