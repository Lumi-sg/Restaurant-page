import { loadPage } from "./modules/initPage.js";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
	home();
});

menuButton.addEventListener("click", () => {
	menu();
});

contactButton.addEventListener("click", () => {
	contact();
});

function initializePage() {
	loadPage();
}

initializePage();
