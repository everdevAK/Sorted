import { createTaskCheckBox } from "./taskCheck.js"; 
import { createTaskText } from "./taskText.js";
import { createTaskActions } from "./taskActions.js";

export function createTask(taskText, taskId) {
    // <div class="task">
    //     <div class="task--check-container">
    //         <div id="task--check" class="task--check"></div>
    //     </div>
        
    //     <div class="task--text">
    //         Testing out the task Item..
    //     </div>

    //     <div class="task--actions">
    //         <button id="edit-task" class="edit-task" type="button"></button>
    //         <button id="delete-task" class="delete-task" type="button"></button>
    //     </div>
    // </div>

    const task = document.createElement("div");
    task.id = taskId;
    task.classList.add("task");

    const checkBox = createTaskCheckBox();
    const text = createTaskText(taskText);
    const taskActions = createTaskActions();

    task.appendChild(checkBox);
    task.appendChild(text);
    task.appendChild(taskActions);

    return task;
}