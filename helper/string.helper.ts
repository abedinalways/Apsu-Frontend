/**
 * StringHelper helps us with string methods
 */
export const StringHelper = {
  /**
   * Extract parts of a string
   */
  textShorten(text: string, length = 100): string {
    if (text.length >= length) {
      return text.substring(0, length) + '...';
    }
    return text;
  },

  /**
   * Replace text with performance
   */
  replace(str: string, search: string, replacement: string): string {
    return str.split(search).join(replacement);
  },

  /**
   * return discounted price
   * @param {number} price
   * @param {number} discount
   */
  discount(price: number, discount?: number): number {
    if (discount == null) {
      return Number(price);
    }
    return Number(price) - (Number(price) * Number(discount)) / 100;
  },
};
