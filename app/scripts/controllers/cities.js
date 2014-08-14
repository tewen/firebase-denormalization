'use strict';

/**
 * @ngdoc function
 * @name FirebaseRelationsDemo.controller:AppointmentmakerCtrl
 * @description
 * # AppointmentmakerCtrl
 * Controller of the FirebaseRelationsDemo
 */
angular.module('FirebaseRelationsDemo')
    .controller('CitiesCtrl', ['$scope', 'syncData', function ($scope, syncData) {

        var ref = syncData('/affordability');
        var citiesRef = syncData('/cities');

        // create a synchronized array for use in our HTML code
        $scope.affordability = ref.$asArray();

        $scope.selectMyCity = function (cityName) {
            $scope.selectedCity = _.find(citiesRef.$asArray(), {name: cityName});
        };

    }]);
