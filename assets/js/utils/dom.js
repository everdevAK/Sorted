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
            
            //Temp bug fix
            if (container.classList.contains("show")) {
                container.classList.toggle("show");
            }
        } 

        if (e.target.closest(".task--category-actions")) {
            const target = e.target.textContent.trim();
            const taskCategory = e.target.closest(".task-category");
            const tasks = taskCategory.querySelectorAll(".task");

            tasks.forEach(task => {
                const isCompleted = task
                    .querySelector(".task--check")
                    .classList.contains("completed");

                if (target === "All") {
                    task.style.display = "flex";
                }

                if (target === "Completed") {
                    task.style.display = isCompleted ? "flex" : "none";
                }

                if (target === "Pending") {
                    task.style.display = !isCompleted ? "flex" : "none";
                }
            });
        }  
    });

    container.appendChild(li);
}

//Get category name for active task category
export function getCategoryName(parent, targetClass) {
    const parentEl = parent;
    const categoryName = parentEl.querySelector(targetClass);

    return categoryName.textContent.toLowerCase();
}