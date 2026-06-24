import { createCategoryGrid } from "./category/categoryGrid.js";
import { createCategory } from "./category/category.js";
import { createLogo } from "./category/category.js";
import { capitalize } from "../utils/helpers.js"
import { store } from "../state/store.js";

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
            console.log(e.target.textContent + " clicked");
        }
    });

    return grid;
}