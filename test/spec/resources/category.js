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

  it('should insantiate', function() {
    expect(new Category()).toBeDefined();
  });

  it('should be a $resource', function() {
    expect(Category.get).toBeDefined();
  });
});