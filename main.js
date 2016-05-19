'use strict';

if (!global.hasOwnProperty('isArray')) global.isArray = isArray;
if (!global.hasOwnProperty('isNotArray')) global.isNotArray = isNotArray;

/**
 * Check does the given javascript object is an Array.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isArray(object) {
    return toString.call(object) === '[object Array]';
}

/**
 * Check does the given javascript object is not an Array.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotArray(object) {
    return !isArray(object);
}

module.exports = {isArray, isNotArray};
