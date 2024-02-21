const localStorageProxy = new Proxy(
  {},
  {
    get(_, prop) {
      if (prop === 'clear') {
        return () => localStorage.clear();
      }
      try {
        return JSON.parse(localStorage.getItem(prop));
      } catch {
        return undefined;
      }
    },
    set(_, prop, value) {
      localStorage.setItem(prop, JSON.stringify(value));
      return true;
    },
    deleteProperty(_, prop) {
      localStorage.removeItem(prop);
      return true;
    },
  }
);

export default localStorageProxy;
