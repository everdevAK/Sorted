import { createCategoryGrid } from "./category/categoryGrid.js";
import { createCategory } from "./category/category.js";
import { createLogo } from "./category/category.js";
import { capitalize } from "../utils/helpers.js"
import { store } from "../state/store.js";

import { createMainHeader } from "./mainHeader.js";
import { createTaskCategoryContainer } from "./taskCategoryContainer.js";

export function createCategoryContainer() {
    const grid = createCategoryGrid();
    
    //Add Category:
    grid.appendChild(createCategory(capitalize("Add Category"), "+"));
    //Add reat of the categorires:
    store.categories.forEach(cat => {
        grid.appendChild(
            createCategory(capitalize(cat), createLogo(cat))
        );
    });

    grid.addEventListener("click", (e) => {
        if (e.target.closest(".category-container")
            && e.target.id !== "delete-category"
            && !e.target.closest("#add-category")) {
                const parent = e.target.closest(".category-container");
                const categoryTitle = parent.querySelector(".category-title").textContent;
                
                const rootEl = document.querySelector("#root");
                rootEl.innerHTML = "";
                rootEl.appendChild(createMainHeader());
                rootEl.appendChild(createTaskCategoryContainer(categoryTitle));
                
                // console.log(store[categoryTitle.toLowerCase()]);
                // console.log(categoryTitle + " clicked");
        }
    });

    return grid;
}