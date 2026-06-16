/* <div class="task-category">
    <div class="task--category-header">
        <h2 class="task--category-title">Personal</h2>

        <div class="task--category-input">
            <input id="user-task-input" type="text" placeholder="Enter task...">
            <button type="button" id="add-task">Add</button>
        </div>

        <div class="task--category-actions">
            <div id="filter" class="filter">
                <span class="filter-icon"></span> filter
            </div>
            
            <ul class="filter-list list">
                <li class="filter-item list-item">All</li>
                <li class="filter-item list-item">Completed </li>
                <li class="filter-item list-item">Pending</li>
            </ul>
        </div>
    </div>

    Task container here...
</div> */

import { createDropDown } from "../utils/dom.js";
import { createTaskContainer } from "./taskContainer.js";
import { capitalize } from "../utils/helpers.js";

export function createTaskCategoryContainer(categoryName) {
    const mainWrapper = document.createElement("div");
    mainWrapper.classList.add("task-category");

    const header = createTaskCategoryHeader(categoryName);
    const input = createTaskCategoryInput();
    const actions = createTaskCategoryActions();
    const taskContainer = createTaskContainer(categoryName);

    header.appendChild(input);
    header.appendChild(actions);

    mainWrapper.appendChild(header);
    mainWrapper.appendChild(taskContainer);

    return mainWrapper;
}

export function createTaskCategoryHeader(categoryName) {
    const header = document.createElement("header");
    header.classList.add("task--category-header");
    
    const title = document.createElement("h2");
    title.classList.add("task--category-title");
    title.textContent = capitalize(categoryName);

    header.appendChild(title);

    return header;
}

export function createTaskCategoryInput() {
    // <div class="task--category-input">
    //     <input id="user-task-input" type="text" placeholder="Enter task...">
    //     <button type="button" id="add-task">Add</button>
    // </div>

    const wrapper = document.createElement("div");
    wrapper.classList.add("task--category-input");

    const input = document.createElement("input");
    input.id = "user-task-input";
    input.type = "text";
    input.placeholder = "Enter task...";

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("add-task");
    button.id = "add-task";
    button.textContent = "Add";

    // Add logic later if needed
    // button.addEventListener("click", () => { ... });

    wrapper.appendChild(input);
    wrapper.appendChild(button);

    return wrapper;
}

export function createTaskCategoryActions() {
    // <div class="task--category-actions">
    //     <div id="filter" class="filter">
    //         <span class="filter-icon"></span> filter
    //     </div>
        
    //     <ul class="filter-list list">
    //         <li class="filter-item list-item">All</li>
    //         <li class="filter-item list-item">Completed </li>
    //         <li class="filter-item list-item">Pending</li>
    //     </ul>
    // </div>

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("task--category-actions");

    // Filter button
    const filter = document.createElement("div");
    filter.id = "filter";
    filter.classList.add("filter");
    // Accessibility
    filter.setAttribute("role", "button");
    filter.setAttribute("aria-label", "Open filter options");
    filter.addEventListener("click", (e) => {
        e.stopPropagation();
        const actionsContainer = e.target.closest(".task--category-actions");
        const list = actionsContainer.querySelector(".list");

        list.classList.toggle("show");
    });
    // filter.addEventListener("keydown", (e) => {
    //     if (e.key === "Enter" || e.key === " ") {
    //         filter.click();
    //     }
    // });
    

    const filterIconWrapper = document.createElement("span");
    filterIconWrapper.classList.add("filter-icon");

    // Append icon, then text
    filter.appendChild(filterIconWrapper);
    filter.appendChild(document.createTextNode(" Filter"));

    // Filter list
    const filterList = document.createElement("ul");
    filterList.classList.add("filter-list", "list");

    const filters = ["All", "Completed", "Pending"];

    filters.forEach(name => {
        createDropDown(name, filterList, "filter-item", "list-item");
        // const li = document.createElement("li");
        // li.classList.add("filter-item", "list-item");
        // li.textContent = name;

        // // Optional: add click logic
        // // li.addEventListener("click", () => console.log(name));

        // filterList.appendChild(li);
    });

    // Build structure
    actionsWrapper.appendChild(filter);
    actionsWrapper.appendChild(filterList);

    return actionsWrapper;
}
