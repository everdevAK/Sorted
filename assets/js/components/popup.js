{/* <div class="popup">
    <div class="popup-container">
        <h2 class="popup--title">Title</h2>

        <!-- <div class="popup--info">
            <p>Would You like to delete this folder? There are tasks in it.</p>
        </div> -->

        <div class="popup--input">
            <!-- For create category -->
            <input type="text" id="user-input" placeholder="Enter here...">
            <!-- For Editing task text -->
                <textarea id="user-input" placeholder="Enter here..."></textarea>
        </div>

        <div class="popup--actions">
            <button type="button">Button 1</button>
            <button type="button">Button 2</button>
        </div>
    </div>
</div> */}

import { capitalize } from "../utils/helpers.js";

export function renderPopup(title, isInput, ...btns) {
    // Main wrapper
    const popup = document.createElement("div");
    popup.className = "popup";

    const container = document.createElement("div");
    container.className = "popup-container";

    // Title
    const h2 = document.createElement("h2");
    h2.className = "popup--title";
    h2.textContent = capitalize(title);

    // Input or textarea
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "popup--input";

    let inputElement;
    if (isInput === "text") {
        inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = "Enter here...";
    } else if (isInput === "textarea") {
        inputElement = document.createElement("textarea");
        inputElement.placeholder = "Enter here...";
    }

    // For deletion popup
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "popup--info";

    if (inputElement) {
        inputWrapper.appendChild(inputElement);
    } else {
        const info = document.createElement("p");
        info.textContent = "This category contains tasks, Delete it anyway?";

        infoWrapper.appendChild(info);
    }

    // Buttons
    const actions = document.createElement("div");
    actions.className = "popup--actions";

    btns.forEach(btn => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = btn.text;

        if (typeof btn.action === "function") {
            button.addEventListener("click", (e) => btn.action(e, inputElement?.value));
        }

        actions.appendChild(button);
    });

    // Build structure
    container.appendChild(h2);

    if (isInput === "text" || isInput === "textarea") {
        container.appendChild(inputWrapper);
    } else {
        container.appendChild(infoWrapper);
    }

    container.appendChild(actions);
    popup.appendChild(container);

    // Add to page
    document.body.appendChild(popup);

    return popup;
}

