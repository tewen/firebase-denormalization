'use strict';

describe('Controller: AppointmentmakerCtrl', function () {

  // load the controller's module
  beforeEach(module('FirebaseRelationsDemo'));

  var AppointmentmakerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentmakerCtrl = $controller('AppointmentmakerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
