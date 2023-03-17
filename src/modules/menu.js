const menu = () => {
	console.log("menu page called");
	const image = document.querySelector(".shawarma");

	if (image.className === "shawarma") {
		image.src = "./d06d514f-1c4b-4f3c-b8e5-efae1da5a880.jpg";
		image.setAttribute("class", "menu");
		image.setAttribute("alt", "picture of the menu");
	}
};

export { menu };
