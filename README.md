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
