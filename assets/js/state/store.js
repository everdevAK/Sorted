import { loadStore, saveStore } from "../utils/helpers.js";
import { createCategoryContainer } from "../components/categoryContainer.js"; 

const defaultStore = {
    categories: ['personal', 'work', 'study', 'health', 'sports'],
    personal: [
        { id: 1, taskText: 'personal', isCompleted: false },
        { id: 2, taskText: 'aa', isCompleted: false },
        { id: 3, taskText: 'bb', isCompleted: false },
        { id: 4, taskText: 'cc', isCompleted: false },
    ],
    work: [
        { id: 1, taskText: 'work', isCompleted: false },
        { id: 2, taskText: 'aa', isCompleted: false },
        { id: 3, taskText: 'bb', isCompleted: false },
        { id: 4, taskText: 'cc', isCompleted: false }
    ],
    study: [
        { id: 1, taskText: 'study', isCompleted: false },
        { id: 2, taskText: 'aa', isCompleted: false },
        { id: 3, taskText: 'bb', isCompleted: false },
        { id: 4, taskText: 'cc', isCompleted: false }
    ],
    health: [
        { id: 1, taskText: 'health', isCompleted: false },
        { id: 2, taskText: 'aa', isCompleted: false },
        { id: 3, taskText: 'bb', isCompleted: false },
        { id: 4, taskText: 'cc', isCompleted: false }
    ],
    sports: [
        { id: 1, taskText: 'sports', isCompleted: false },
        { id: 2, taskText: 'aa', isCompleted: false },
        { id: 3, taskText: 'bb', isCompleted: false },
        { id: 4, taskText: 'cc', isCompleted: false }
    ],
}

export const store = loadStore() || defaultStore;

export function setCategorie(cat) {
    store.categories.push(cat);
}   

// Buttons for deletion of category.
const deleteBtns = [
  {
    text: "Yes, delete",
    action: function (e, i, categoryName) {
      store.categories = store.categories.filter(cat => cat !== categoryName);
      delete store[categoryName];
      saveStore(store);
      
      const rootEl = document.querySelector("#root");
      rootEl.lastElementChild.remove();
      rootEl.appendChild(createCategoryContainer());

      e.target.closest(".popup").remove();
      return;
    }
  },
  {
    text: "No, keep it",
    action: function (e) {
      e.target.closest(".popup").remove();
    }
  },
  {
    text: "Cancel",
    action: function (e) {
      e.target.closest(".popup").remove();
    }
  }
];

// Buttons for creating category.
const createCategoryBtns = [
  {
    text: "Create",
    id: "createBtn",
    action: function (e, inputValue) {
      if (inputValue.length <= 0) return alert("Input is empty.");

      if (store.categories.includes(inputValue)) {
        alert("Category with the same name already exist.");
        return;
      } 

      store.categories.push(inputValue);
      store[inputValue] = [];
      saveStore(store);

      const categoryGrid = document.querySelector(".category-grid");
      categoryGrid.remove();

      const rootEl = document.querySelector("#root");
      rootEl.appendChild(createCategoryContainer());

      e.target.closest(".popup").remove();
    }
  },
  {
    text: "Cancel",
    className: "cancel",
    action: function (e) {
      e.target.closest(".popup").remove();
    }
  }
];

// Buttons for creating category.
const editTaskBtns = [
  {
    text: "Edit",
    action: function (e, inputValue) {
      console.log(inputValue);
      e.target.closest(".popup").remove();
    }
  },
  {
    text: "Cancel",
    action: function (e) {
      e.target.closest(".popup").remove();
    }
  }
];

export { deleteBtns,  createCategoryBtns, editTaskBtns };