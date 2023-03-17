import { loadPage } from "./modules/initPage.js";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";


function initializePage() {
	loadPage();
	createButtonEvents();
	let homeButtonBoolean = true;
	let menuButtonBoolean;


	function createButtonEvents() {
		const homeButton = document.getElementById("home");
		const menuButton = document.getElementById("menu");


		homeButton.addEventListener("click", () => {
			if (homeButtonBoolean) {
				return;
			}
			home();
			homeButtonBoolean = true;
			menuButtonBoolean = false;
			contactButtonBoolean = false;
		});

		menuButton.addEventListener("click", () => {
			if (menuButtonBoolean) {
				return;
			}
			menu();
			menuButtonBoolean = true;
			homeButtonBoolean = false;
		});
	}
}

initializePage();
