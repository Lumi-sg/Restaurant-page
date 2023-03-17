const home = () => {
	console.log("home page called");

	const image = document.querySelector(".menu");

	if (image.className === "menu") {
		image.src = "./b8018bbf-9fea-4f70-9c24-017e50480cd8.jpeg";
		image.setAttribute("class", "shawarma");
		image.setAttribute("alt", "picture of the foods offered");
	}
};
export { home };
