module.exports = function(app) {
  'use strict';

  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.hiddenMMM = true;

    $scope.sendMMM = function() {
      var numsArray = $scope.mmm.nums.split(',').sort(function(a, b) {
        return a - b;
      }).map(Number);
      console.log('numsArray: ' + numsArray);

      $http({
        method: 'POST',
        url: '/mmm',
        data: numsArray
      })
      .success(function(data) {
        $scope.mmm.mean = data.mean;
        $scope.mmm.median = data.median;
        $scope.mmm.mode = data.mode;
        $scope.hiddenMMM = false;   // show
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);

};
