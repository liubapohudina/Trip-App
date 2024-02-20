export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}