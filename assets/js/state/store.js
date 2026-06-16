import { loadStore } from "../utils/helpers.js";

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
    action: function () {
      console.log("yes");
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
    action: function (e, inputValue) {
      console.log(inputValue);
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
const editTaskBtns = [
  {
    text: "Edit",
    action: function (e, inputValue) {
      console.log(inputValue);
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