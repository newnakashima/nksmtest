# README.md

jsで簡単なUTを書きたいときに使うやつです。

例:
```js
const nksmtest = require('./TestRunner.js');
const tests = [
    // ここにテストクラスをrequireしていきます
    require('./example/ExampleTest.js')
];
const runner = new nksmtest.TestRunner();
runner.run(tests);
```

例えば以下のようなクラスがあったとします。
```js
class Example {
    hello(name = 'world') {
        return `Hello, ${name}!`;
    }
}
module.exports = Example;
```

テストクラスは下記のように書きます。
```js
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

```
