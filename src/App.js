import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
	const [file, setFile] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [link, setLink] = useState("");

	const data = new FormData();

	const handleFileInputChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

		const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

		const handleLinkChange = (e) => {
		setLink(e.target.value);
	};

	const handleUploadImage = () => {
		data.append("file", file);
		data.append("name", name);
		data.append("price", price);
		data.append("link", link);
		uploadImage(file);
	};

	const uploadImage = async (file) => {
		try {
			const res = await axios.post(
				"/api/v1/users/5f9afe5102669e661c492bf4/products",
				data,
				{
					headers: {
						"content-type": "multipart/form-data",
					},
				}
			);

			console.log("res", res);

			console.log("calling backend api");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="enter name"
				id="name"
				value={name}
				onChange={handleNameChange}
			/>
				<input
				type="text"
				placeholder="enter price"
				id="price"
				value={price}
				onChange={handlePriceChange}
			/>
				<input
				type="text"
				placeholder="enter link"
				id="link"
				value={link}
				onChange={handleLinkChange}
			/>
			<input
				id="fileInput"
				type="file"
				name="image"
				onChange={handleFileInputChange}
			/>
			<button type="submit" onClick={handleUploadImage}>
				Submit
			</button>
		</div>
	);
}

export default App;
