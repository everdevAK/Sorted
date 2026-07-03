import { loadStore, saveStore } from "../utils/helpers.js";
import { createCategoryContainer } from "../components/categoryContainer.js"; 
import { capStart } from "../utils/helpers.js";

const defaultStore = {
    categories: ['personal', 'work', 'study', 'health', 'sports'],
    personal: [
        { id: "1p", taskText: 'personal', isCompleted: false },
        { id: "2p", taskText: 'aa', isCompleted: false },
        { id: "3p", taskText: 'bb', isCompleted: false },
        { id: "4p", taskText: 'cc', isCompleted: false },
    ],
    work: [
        { id: "1w", taskText: 'work', isCompleted: false },
        { id: "2w", taskText: 'aa', isCompleted: false },
        { id: "3w", taskText: 'bb', isCompleted: false },
        { id: "4w", taskText: 'cc', isCompleted: false }
    ],
    study: [
        { id: "1s", taskText: 'study', isCompleted: false },
        { id: "2s", taskText: 'aa', isCompleted: false },
        { id: "3s", taskText: 'bb', isCompleted: false },
        { id: "4s", taskText: 'cc', isCompleted: false }
    ],
    health: [
        { id: "1h", taskText: 'health', isCompleted: false },
        { id: "2h", taskText: 'aa', isCompleted: false },
        { id: "3h", taskText: 'bb', isCompleted: false },
        { id: "4h", taskText: 'cc', isCompleted: false }
    ],
    sports: [
        { id: "1sp", taskText: 'sports', isCompleted: false },
        { id: "2sp", taskText: 'aa', isCompleted: false },
        { id: "3sp", taskText: 'bb', isCompleted: false },
        { id: "4sp", taskText: 'cc', isCompleted: false }
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
    action: function (e, inputValue, task) {
      //Get category name and taskId
      const taskCategory = task.closest(".task-category");
      const categoryName = taskCategory.querySelector(".task--category-title").textContent.toLowerCase();
      const taskText = task.querySelector(".task--text");
      const taskId = task.id;

      //Save the edited text in store and change the textContent
      for (const task of store[categoryName]) {
        if (task.id === taskId) {
          task.taskText = capStart(inputValue);
          saveStore(store);
          taskText.textContent = task.taskText;
          break;
        }
      }

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