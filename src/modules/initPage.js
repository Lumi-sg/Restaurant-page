const loadPage = () => {
	console.log("init page called");

	createHeader();

	createImage();

	// const footer = document.createElement("p");
	// footer.className = "footer";
	// footer.innerHTML = "Built by Lumi&nbsp;&nbsp;&nbsp";
	// document.body.append(footer);

	function createHeader() {
		const storeTitle = document.createElement("div");
		storeTitle.setAttribute("class", "StoreTitle");
		storeTitle.innerHTML = "Lazeez Shawarma";
		document.body.append(storeTitle);
		console.log("store title created");

		const header = document.createElement("div");
		header.className = "header";
		document.body.append(header);
		console.log("header created");

		createButton("home", "Home");
		createButton("menu", "Menu");
		createButton("contact", "Contact");

		function createButton(id, text) {
			const button = document.createElement("button");
			button.setAttribute("id", id);
			button.innerHTML = text;
			console.log(`${text} button created.`);
			header.appendChild(button);
			return button;
		}
	}

	function createImage() {
		const contentDiv = document.createElement("div");
		contentDiv.className = "content";
		document.body.append(contentDiv);

		const contentSection = document.querySelector(".content");
		const image = document.createElement("img");
		image.src = "./b8018bbf-9fea-4f70-9c24-017e50480cd8.jpeg";
		image.setAttribute("class", "shawarma");
		image.setAttribute("alt", "picture of the foods offered");
		contentSection.appendChild(image);
		console.log("image created.");
	}
};

export { loadPage };
