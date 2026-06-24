import { renderHome } from "./components/home.js";
import { closeEl } from "./utils/dom.js";

renderHome();

// document.addEventListener("click", (e) => {

//     if (!e.target.closest(".list.show")) {
//         document.querySelectorAll(".list.show").forEach(dropDown => dropDown.classList.remove("show"));
//     }

//     //Centralized "Click-Outside-To-Close" Logic:
//         // const menuCatList = document.querySelector(".menu-category-list");
//         // const menuBtn = document.querySelector("#btn-menu");

//         // const clickedInside =
//         //     menuCatList.contains(e.target) ||
//         //     menuBtn.contains(e.target);

//         // if (!clickedInside) closeEl(menuCatList, "show");
    
// });

document.addEventListener("click", (e) => {
    // If the click is NOT inside any open dropdown
    if (!e.target.closest(".list.show")) {
        document.querySelectorAll(".list.show")
            .forEach(dropdown => dropdown.classList.remove("show"));
    }

    // Popup display 
    if (e.target.classList.contains("popup")) {
        e.target.remove();
    }
});


//testing...
// const filter = document.querySelector(".filter");

// filter.addEventListener("click", (e) => {
//         const actionsContainer = e.target.closest(".task--category-actions");
//         const list = actionsContainer.querySelector(".list");

//         list.classList.toggle("show");
// });

// import { createTaskCategoryContainer } from "./components/taskCategoryContainer.js";
// document.body.appendChild(createTaskCategoryContainer("work"));


// import { deleteBtns, createCategoryBtns, editTaskBtns } from "./state/store.js";
// import { renderPopup } from "./components/popup.js";

// renderPopup("delete category", "d", ...deleteBtns);