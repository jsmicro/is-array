const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isArray() Test.
    test($.isArray)
        .accept([])
        .reject(() => {})
        .reject('Test')
        .reject({})
        .reject(true)
        .reject(false)
        .reject(test.args(arguments))
        .queue(true);

    // Run the isNotArray() Test.
    test(isNotArray)
        .accept(10)
        .accept(() => {})
        .accept('Test')
        .accept({})
        .accept(true)
        .accept(false)
        .accept(test.args(arguments))
        .reject([])
        .queue(true);
}
