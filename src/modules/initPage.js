const loadPage = () => {
	console.log("init page called");

	createHeader();

	createImage();

	createFooter();

	function createFooter() {
		const pElement = document.createElement("p");

		const aElement1 = document.createElement("a");
		aElement1.innerText = "Built by Lumi ";

		const aElement2 = document.createElement("a");
		aElement2.href = "https://github.com/Lumi-sg/Restaurant-page";
		aElement2.style.textDecoration = "none";
		aElement2.target = "_blank";
		aElement2.rel = "noopener noreferrer";

		const iconElement = document.createElement("i");
		iconElement.className = "fa";
		iconElement.style.fontSize = "24px";
		iconElement.innerText = "\uf09b";

		aElement2.appendChild(iconElement);

		pElement.appendChild(aElement1);
		pElement.appendChild(aElement2);

		const divElement = document.createElement("div");
		divElement.className = "footer";

		divElement.appendChild(pElement);
		document.body.appendChild(divElement);
	}

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
