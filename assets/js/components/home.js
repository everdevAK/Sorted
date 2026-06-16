import { createMainHeader } from "../components/mainHeader.js";
import { createCategoryContainer } from "../components/categoryContainer.js"

export function renderHome() {
    const root = document.getElementById("root");
    root.innerHTML = ""; // clear current page

    // Rebuild the home page

    //Main Header
    root.appendChild(createMainHeader());
    //Category Container
    root.appendChild(createCategoryContainer());

    // You can also append other home components here
    // root.appendChild(createTaskList());
}
