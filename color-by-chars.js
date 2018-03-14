(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.colorByChars = factory());
}(this, (function () { 'use strict';

/**
 * Generate color by characters.
 *
 * @param chars - characters
 * @param [base] - control color offset
 * @returns Number[] - [RED, GREEN, BLUE]
 */
function colorByChars (chars, base) {
  var remainder = base || 1;
  for (var i = 0; i < chars.length; ++i) {
    remainder *= chars.charCodeAt(i);
    // a number will lose its precision when it's too big
    remainder &= 0xffffff;
    if (remainder === 0) {
      remainder = 1;
    }
  }
  var red = remainder >> 16 & 0xff;
  var green = remainder >> 8 & 0xff;
  var blue = remainder & 0xff;

  return [red, green, blue]
}

return colorByChars;

})));
