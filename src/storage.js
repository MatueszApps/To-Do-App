// Zapisz dane do localStorage
export function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Odczytaj dane z localStorage
  export function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  