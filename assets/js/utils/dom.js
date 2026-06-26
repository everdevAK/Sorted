import { capitalize } from "./helpers.js";
import { createTaskCategoryContainer } from "../components/taskCategoryContainer.js";

export function closeEl(element, selector) {
    element.classList.remove(selector);
}

export function createDropDown(item, container, ...classes) {
    const li = document.createElement("li");
    li.classList.add(...classes);
    li.dataset.category = item;
    li.textContent = capitalize(item);
    //Menu Items Logic:
    li.addEventListener("click", (e) => {
        if (e.target.closest(".menu-category-item")) {
            const rootEl = document.querySelector("#root");
            const taskCat = createTaskCategoryContainer(e.target.textContent.toLowerCase());
            const lastElChild = rootEl.lastElementChild;
            lastElChild.remove();
            rootEl.appendChild(taskCat);
        }

        console.log(e.target.textContent);
    });

    container.appendChild(li);
}
