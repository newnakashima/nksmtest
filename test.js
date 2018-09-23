const nksmtest = require('./TestRunner.js');
const tests = [
    require('./example/ExampleTest.js')
];
const runner = new nksmtest.TestRunner();
runner.run(tests);

