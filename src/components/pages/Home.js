import React, { useEffect, useState } from "react";
import MainNavigation from "../navigation/MainNavigation";

import "../../css/Home.css";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
				);

				const responseData = await response.json();

				setData(responseData);

				console.log(responseData);
			} catch {}
			finally {
				setLoading(false)
			}
		}
		fetchData();
	}, []);



	return (
		<>
			{!loading && data && (
				<div className="home-container" style={{backgroundImage:`url(${data.hdurl})`}}>
					<MainNavigation />
					<div className="home-main center">
						<h2 className="home-main__title">{data.title}</h2>
						<p className="home-main__explanation">
							{data.explanation}
						</p>
					</div>
				</div>
			)}
		</>
	);
}
