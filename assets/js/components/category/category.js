
    // <div class="category-container">
    //     <div class="category-logo">
    //         <span class="logo">S</span>
    //     </div>

    //     <div class="category-title">
    //         <span class="title">Sports</span>
    //     </div>

    //     <button id="delete-category" type="button"></button>
    // </div>

export function createCategory(title, logo) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");
    if (title === "Add Category") {
        categoryContainer.id = "add-category";
    }
    //Deligating All Category Logic Here:
    categoryContainer.addEventListener("click", (e) => {
        //Delete Category Logic:
        if (e.target.id === "delete-category") {
            console.log("deleteBtn working...");
            return;
        }

        //Add Category Logic:
        if (e.target.closest("#add-category")) {
            console.log("Add Category Working...");
            return;
        }
        
        console.log("Category working...");
    });

    // Logo container
    const categoryLogo = document.createElement("div");
    categoryLogo.classList.add("category-logo");

    const logoSpan = document.createElement("span");
    logoSpan.classList.add("logo");
    logoSpan.textContent = logo;

    categoryLogo.appendChild(logoSpan);

    // Title container
    const categoryTitle = document.createElement("div");
    categoryTitle.classList.add("category-title");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("title");
    titleSpan.textContent = title;

    categoryTitle.appendChild(titleSpan);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.id = "delete-category";
    deleteBtn.type = "button";

    // Append only logo, categoryTitle for "Add Category"
    if (title === "Add Category") {
        categoryContainer.appendChild(categoryLogo);
        categoryContainer.appendChild(categoryTitle);
        return categoryContainer;
    }

    // Append everything
    categoryContainer.appendChild(categoryLogo);
    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(deleteBtn);

    return categoryContainer;
}

export function createLogo(name) {
    return name.trim().charAt(0).toUpperCase();
}