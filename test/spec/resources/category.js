describe('Resource: Category', function() {

  'use strict';

  var Category;

  beforeEach(function() {
    module('rwar.resources');

    inject(function(_Category_) {
      Category = _Category_;
    });
  });

  it('should exist', function() {
    expect(Category).toBeDefined();
  });
});