import { renderHome } from "./components/home.js";
import { closeEl } from "./utils/dom.js";

renderHome();

// localStorage.clear();

document.addEventListener("click", (e) => {
    // Popup display 
    if (e.target.classList.contains("popup")) {
        e.target.remove();
    }
});