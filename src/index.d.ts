declare module 'persisty' {
  type StorageProxyObject = {
    [key: string]: any;
  } & {
    clear: () => void;
  };

  const persisty: StorageProxyObject;

  export const persistLocal: StorageProxyObject;
  export const persistSession: StorageProxyObject;
  export default persisty;
}
