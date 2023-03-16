const loadPage = () => {
	console.log("init page called");
	const contentSection = document.querySelector(".content");

	const image = document.createElement("img");
	image.src = "./b8018bbf-9fea-4f70-9c24-017e50480cd8.jpeg";
	image.setAttribute("class", "shawarma");
	image.setAttribute("alt", "picture of the foods offered");
	contentSection.appendChild(image);
};

export { loadPage };
