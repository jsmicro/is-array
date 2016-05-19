(function() {
    'use strict';

    if (!window.hasOwnProperty('isArray')) window.isArray = isArray;
    if (!window.hasOwnProperty('isNotArray')) window.isNotArray = isNotArray;

    function isArray(object) {
        return toString.call(object) === '[object Array]';
    }

    function isNotArray(object) {
        return !isArray(object);
    }
})();
