export function createTaskText(text) {
    // <div class="task--text">
    //     Testing out the task Item..
    // </div>

    const taskText = document.createElement("div");
    taskText.classList.add("task--text");
    taskText.textContent = text;

    return taskText;
}