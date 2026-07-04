import { deleteBtns, createCategoryBtns, editTaskBtns, store } from "../../state/store.js";
import { saveStore } from "../../utils/helpers.js";
import { renderPopup } from "../popup.js";
import { getCategoryName } from "../../utils/dom.js";

export function createTaskActions() {
    // <div class="task--actions">
    //     <button id="edit-task" class="edit-task" type="button"></button>
    //     <button id="delete-task" class="delete-task" type="button"></button>
    // </div>

    const actions = document.createElement("div");
    actions.classList.add("task--actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-task");
    editBtn.type = "button";
    editBtn.addEventListener("click", (e) => {
        const task = e.target.closest(".task");
        renderPopup("Edit Task", "textarea", editTaskBtns, task);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task");
    deleteBtn.type = "button";
    deleteBtn.addEventListener("click", (e) => {
        const categroyName = getCategoryName(e.target.closest(".task-category"), ".task--category-title");
        const taskId = e.target.closest(".task").id;
        
        store[categroyName] = store[categroyName].filter(task => task.id !== taskId);
        saveStore(store);
        e.target.closest(".task").remove();
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    return actions;
}
