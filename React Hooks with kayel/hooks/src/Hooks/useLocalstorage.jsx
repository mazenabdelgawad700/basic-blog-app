import { useState } from "react";

export default function useLocalstorage(key, initilaValue) {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initilaValue;

  const [value, setValue] = useState(initial);

  const setStoredValue = (newValue) => {
    const jsonValue = JSON.stringify(newValue);
    localStorage.setItem(key, jsonValue);
    setValue(newValue);
  }

  return [value, setStoredValue];
}

//