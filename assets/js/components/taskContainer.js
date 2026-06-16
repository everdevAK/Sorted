import { createTask } from "./task/task.js";
import { createTaskObj, createId } from "../utils/helpers.js";
import { store } from "../state/store.js";

export function createTaskContainer(categoryName) {
    const container = document.createElement("div");
    container.classList.add("task-container");

    store[categoryName.toLowerCase()].forEach(task => {
        container.appendChild(createTask(task.taskText, task.id));
    });

    return container;
}