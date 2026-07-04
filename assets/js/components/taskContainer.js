import { createTask } from "./task/task.js";
import { createTaskObj, createId } from "../utils/helpers.js";
import { store } from "../state/store.js";

export function createTaskContainer(categoryName) {
    const container = document.createElement("div");
    container.classList.add("task-container");

    store[categoryName.toLowerCase()].forEach(task => {
        const taskEl = createTask(task.taskText, task.id);
        const taskCheck = taskEl.querySelector(".task--check");

        if (task.isCompleted === true) taskCheck.classList.add("completed");
        container.appendChild(taskEl);
    });

    return container;
}