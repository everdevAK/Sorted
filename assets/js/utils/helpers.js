//Local Storage
export function saveStore(store) {
    localStorage.setItem("taskStore", JSON.stringify(store));
}

export function loadStore() {
    const data = localStorage.getItem("taskStore");
    return data ? JSON.parse(data) : null;
}

//Capitaliz
export function capitalize(str) {
  const words = str
    .trim()
    .split(/\s+/); // handles any amount of spaces

  return words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//create Task Object
export function createTaskObj(text, id) {
    // { id: 4, text: 'cc', isCompleted: false }
    return { id: id, taskText: text, isCompleted: false };
}

export function createId() {
    //get current date -> convert to base 36 -> get a random number -> convert to base 36 -> remove "0." using .slice(2)
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

