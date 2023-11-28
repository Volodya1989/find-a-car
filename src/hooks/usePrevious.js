import { useRef, useEffect } from 'react';

//using this hook to have ref to the previous value of the sorting options
export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
