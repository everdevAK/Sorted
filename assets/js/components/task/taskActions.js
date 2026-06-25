import { deleteBtns, createCategoryBtns, editTaskBtns } from "../../state/store.js";
import { renderPopup } from "../popup.js";

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
    editBtn.addEventListener("click", () => {
        renderPopup("Edit Task", "textarea", ...editTaskBtns);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task");
    deleteBtn.type = "button";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    return actions;
}
