const TestCase = require('../TestCase.js');
const Example = require('./Example.js');
class ExampleTest extends TestCase {
    testHello() {
        const example = new Example();
        this.assertEquals(example.hello(),        'Hello, world!');
        this.assertEquals(example.hello('Alice'), 'Hello, Alice!');
        this.assertEquals(example.hello('Bob'),   'Hello, Bob!');
    }
}
module.exports = ExampleTest;

