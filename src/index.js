function StorageProxyFactory(StorageObject) {
  return new Proxy(
    {},
    {
      get(_, prop) {
        if (prop === 'clear') {
          return () => StorageObject.clear();
        }
        try {
          return JSON.parse(StorageObject.getItem(prop));
        } catch {
          return undefined;
        }
      },
      set(_, prop, value) {
        StorageObject.setItem(prop, JSON.stringify(value));
        return true;
      },
      deleteProperty(_, prop) {
        StorageObject.removeItem(prop);
        return true;
      },
    }
  );
}

export const persistLocal = StorageProxyFactory(localStorage);
export const persistSession = StorageProxyFactory(sessionStorage);

export default persistLocal;
