declare module 'persisty' {
  import persisty, { persistLocal, persistSession } from 'persisty';

  /**
   * Clear the localStorage cache
   */
  function clear(): void;
}
