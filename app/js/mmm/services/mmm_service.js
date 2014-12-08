module.exports = function(app) {
  'use strict';

  var logErr = function(errData) {    // thanks Toasty
    console.log(errData);
  };

  app.factory('mmmService', ['$http', function($http) {
    return {
      returnMMM: function(numArr, scope) {
        console.log('numArr: ' + numArr);
        $http({
          method: 'POST',
          url: '/mmm',
          data: numArr
        })
        .success(function(data) {
          scope.mmm.mean = data.mean;
          scope.mmm.median = data.median;
          scope.mmm.mode = data.mode;
          scope.hiddenMMM = false;
        })
        .error(logErr);
      }
    };
  }]);

};
