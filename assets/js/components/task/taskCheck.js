export function createTaskCheckBox() {
    // <div class="task--check-container">
    //     <div id="task--check" class="task--check"></div>
    // </div>

    const checkContainer = document.createElement("div");
    checkContainer.classList.add("task--check-container");

    const checkBox = document.createElement("div");
    checkBox.id = "task--check";
    checkBox.classList.add("task--check");

    checkContainer.appendChild(checkBox);

    return checkContainer;
}