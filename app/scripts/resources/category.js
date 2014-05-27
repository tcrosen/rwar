(function(angular) {
  'use strict';

  angular.module('rwar.resources').factory('Category', function($resource) {
    var category = $resource('/api/category');
    return category;
  });

}(window.angular));