import { store } from "../../state/store.js";
import { saveStore } from "../../utils/helpers.js";
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
        const taskId = e.target.closest(".task").id;

        checkBox.classList.toggle("completed");

        for (const task of store[categoryName]) {
            if (task.id === taskId) {
                const taskInStore = task;
                
                if (taskInStore.isCompleted === false) {
                    taskInStore.isCompleted = true;
                    saveStore(store);
                } else {
                    taskInStore.isCompleted = false;
                    saveStore(store);
                }

                return;
            }
        }

    });

    checkContainer.appendChild(checkBox);

    return checkContainer;
}

