import _ from './jul.js';
import each from './each.js';

/**
 * Insert content after the currently wrapped elements
 * 
 * @param {node|string} content - The content you want inserted after each of the currently wrapped elements.
 * @return {jul}                  - The jul that the method was called on.
 */
_.prototype.after = function (content) {
  if (content instanceof Node) content = content.outerHTML;
  return this.each(function (e) { e.insertAdjacentHTML('afterend', content); });
};

export default _;