'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('mmmController Client Tests, mmm_client_test', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a mmmController, test the tests', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});      // create the controller mock
    expect(typeof mmmController).toBe('object');      // always, TTTs
  });

  describe('rest request $httpBackend, mmm POST\'ing', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('makes a call to mmm POST route', function() {
      $httpBackend.expectPOST('/mmm').respond(200, {mean: 2, median: 2, mode: '2'});

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.mmm = {};
      $scope.mmm.numbers = '1 2 2 3';
      $scope.sendMMM();
      $httpBackend.flush();

      expect($scope.mmm.mean).toBe(2);
      expect($scope.mmm.median).toBe(2);
      expect($scope.mmm.mode).toBe('2');

      expect($scope.hiddenMMM).toBe(false);
    });
  });
});
