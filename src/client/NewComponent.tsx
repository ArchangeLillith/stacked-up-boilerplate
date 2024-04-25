import React from "react";
import { useState, useEffect } from "react";
const NewComponent = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000/api/new-endpoint")
			.then((res) => res.json())
			.then((data) => setData(data.message))
			.catch((e) => console.log("[fetch erorr]", e));
	}, []);

	return (
		<div className="mx-auto mt-5 w-25">
			<div className="alert alert-info text-center">New Endpoint: {data}</div>
		</div>
	);
};

export default NewComponent;
