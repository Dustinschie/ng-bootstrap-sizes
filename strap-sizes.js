/**
  @fileOverview

  @toc

*/

'use strict';

angular.module('ds.ng-bootstrap-sizes', ['matchMedia'])
.run(['$rootScope', 'screenSize', function ($rootScope, screenSize) {
  console.log('test');
  var sizes = ['xs', 'sm', 'md', 'lg'];
  angular.forEach(sizes, function (size) {
    $rootScope[size] = screenSize.is(size);
    screenSize.onChange($rootScope, size, function (isMatch) {
      $rootScope[size] = isMatch;
    });
  });
}])
;
