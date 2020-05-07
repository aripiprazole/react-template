import { useState, useEffect } from "react";

export function useResource<T>(
  // tslint:disable-next-line:ban-types
  callback: Function,
  ...args: unknown[]
): [T, boolean, Error | null] {
  const [state, setState] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadState() {
      try {
        const response = await callback(...args);
        setState(response);
      } catch (ex) {
        setError(ex);
      }
    }

    if (loading) {
      loadState().then(() => setLoading(false));
    }
  }, [callback, args, loading]);

  return [state as T, loading, error];
}
