/**
 * UtilHelper
 */
export const UtilHelper = {
  /**
   * debouncing
   * @param {Function} fn
   * @param {number} delay
   * @returns
   */
  debounce(fn: (...args: unknown[]) => void, delay: number = 300) {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: unknown, ...args: unknown[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  },
};
