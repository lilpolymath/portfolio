import { useState, useEffect } from 'react';

export const useLocalStorage = itemKey => {
  const [value, setValue] = useState(localStorage.getItem(itemKey) || '');

  useEffect(() => {
    localStorage.setItem(itemKey, value);
  }, [itemKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
