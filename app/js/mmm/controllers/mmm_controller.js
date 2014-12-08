module.exports = function(app) {
  'use strict';

  app.controller('mmmCtrl', ['$scope', '$http', 'mmmService',

    function($scope, $http, mmmService) {
      $scope.hiddenMMM = true;

      $scope.sendMMM = function() {
        var numArr = $scope.mmm.numbers.split(' ').sort(function(a, b) {
          return a - b;
        }).map(Number);

        mmmService.returnMMM(numArr, $scope);
      };
    }

  ]);

};
