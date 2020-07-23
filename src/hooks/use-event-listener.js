import { useEffect } from 'react';

export default function useEventListener(eventName, handler, element = global) {
  useEffect(
    () => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      element.addEventListener(eventName, handler);

      return () => {
        element.removeEventListener(eventName, handler);
      };
    },
    [eventName, element, handler] // Re-run if eventName or element changes
  );
}
