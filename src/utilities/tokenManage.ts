import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function storeAtLocalStorage (key:string, value: string) {
    localStorage.setItem(key, value);
}

export function removeFromLocalStorage (key:string) {
    localStorage.removeItem(key);
}

export function retrieveFromLocalStorage (key: string) {
    const item = localStorage.getItem(key);
    return JSON.parse(item as string);
}

export function storeAtCookies (key: string, value: string) {
    cookies.set(key, value, {path: '/'})
}

export function retrieveFromCookies (key: string) {
    return cookies.get(key);
}

export function removeFromCookies (key:string) {
    cookies.remove(key);
}