Real-world AngularJS Recipes [![Build Status](https://travis-ci.org/tcrosen/rwar.svg?branch=master)](https://travis-ci.org/tcrosen/rwar)
===

**Mocking a Controller Referenced by String in a Directive**

If you have a directive that references a controller by name:

```js
angular.module('directives').directive('myDirective', function() {
  restrict: 'EA',
  link: function() {},
  controller: 'myDirectiveCtrl'
});
```

You can mock it for testing like this:

```js
describe('Directive: myDirective', function() {
  beforeEach(function() {
    module(function($controllerProvider) {
      // Registers a module by name that is available to all tests
      $controllerProvider.register('myDirectiveCtrl', function($scope) {});
    });
  });
  
  // ...
});
```
