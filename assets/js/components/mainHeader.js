import { store } from "../state/store.js";
import { createDropDown } from "../utils/dom.js";

import { createCategoryContainer } from "./categoryContainer.js";
 
/* <header class="app-header">
    <h1 class="app-title">Sorted</h1>

    <div class="header-actions">
        <button id="btn-home" class="icon-button" aria-label="home"></button>
        <button id="btn-menu" class="icon-button" aria-label="Menu"></button>

        <ul class="menu-category-list">
            <li data-category="personal" class="menu-category-item">Personal</li>
            <li data-category="work" class="menu-category-item">Work</li>
            <li data-category="health" class="menu-category-item">Health</li>
        </ul>
    </div>
</header> */

export function createMainHeader() {
    const header = document.createElement("header");
    header.classList.add("app-header");

    // Title
    const title = document.createElement("h1");
    title.classList.add("app-title");
    title.textContent = "Sorted";

    // Header actions container
    const headerActions = document.createElement("div");
    headerActions.classList.add("header-actions");

    // Home button
    const homeBtn = document.createElement("button");
    homeBtn.id = "btn-home";
    homeBtn.classList.add("icon-button");
    homeBtn.type = "button";
    homeBtn.setAttribute("aria-label", "Home");
    //Home button Logic:
    homeBtn.addEventListener("click", () => {
        // console.log("Home Working...");
        const rootEl = document.querySelector("#root");
        rootEl.innerHTML = "";
        rootEl.appendChild(createMainHeader());
        rootEl.appendChild(createCategoryContainer());
    });

    // Menu button
    const menuBtn = document.createElement("button");
    menuBtn.id = "btn-menu";
    menuBtn.classList.add("icon-button");
    menuBtn.type = "button";
    menuBtn.setAttribute("aria-label", "Menu");
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        categoryList.classList.toggle("show");
    });

    // Category list
    const categoryList = document.createElement("ul");
    categoryList.classList.add("menu-category-list", "list");

    const categories = store.categories;

    categories.forEach(cat => {
        createDropDown(cat, categoryList, "menu-category-item", "list-item");
        // const li = document.createElement("li");
        // li.classList.add("menu-category-item", "list-item");
        // li.dataset.category = cat;
        // li.textContent = capitalize(cat);
        // //Menu Items Logic:
        // li.addEventListener("click", (e) => {
        //     console.log(e.target.textContent);
        // });

        // categoryList.appendChild(li);
    });

    // Build structure
    headerActions.appendChild(homeBtn);
    headerActions.appendChild(menuBtn);
    headerActions.appendChild(categoryList);

    header.appendChild(title);
    header.appendChild(headerActions);

    return header;
}
