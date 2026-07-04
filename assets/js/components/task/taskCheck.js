import { store } from "../../state/store.js";
import { getCategoryName } from "../../utils/dom.js";

export function createTaskCheckBox() {
    // <div class="task--check-container">
    //     <div id="task--check" class="task--check"></div>
    // </div>

    const checkContainer = document.createElement("div");
    checkContainer.classList.add("task--check-container");

    const checkBox = document.createElement("div");
    checkBox.id = "task--check";
    checkBox.classList.add("task--check");
    checkBox.addEventListener("click", (e) => {
        const categoryName = getCategoryName(e.target.closest(".task-category"), ".task--category-title");

        checkBox.classList.toggle("completed");

        console.log(store[categoryName]);
    });

    checkContainer.appendChild(checkBox);

    return checkContainer;
}

