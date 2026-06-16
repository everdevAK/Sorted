import { capitalize } from "./helpers.js";

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
        console.log(e.target.textContent);
    });

    container.appendChild(li);
}
