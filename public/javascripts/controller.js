/*

angular code, sending live data out to the wepbage
 */

var UPSApp = angular.module('UPSApp', []);
UPSApp.controller('UPSController', function($scope,$http, $interval) {


    setInterval(function () {
        $http.get('/solution-two/data2').success(function (data) {
            $scope.users2 = data;
        })
        $http.get('/solution-two/data').success(function (data) {
            $scope.users = data;
        })
        $http.get('/solution-two/data4').success(function (data) {
            $scope.users4 = data;
        })
        $http.get('/solution-two/data5').success(function (data) {
            $scope.users6 = data;//battery capacity
        })
    },1000);


    $scope.Data=[
        {hour: 1,temps: 274}
    ];
    $scope.Data2=[
        {hour: 1,temps: 333}
    ];
    $scope.Data3=[
        {hour: 1,temps: 330}
    ];
    $interval(function(){//this function is synced with the database
        $http.get('/solution-two/data3').success(function (data) {
            var hour=$scope.Data3.length+1;
            var temps= data;
            $scope.Data3.push({hour: hour, temps:temps});
        });
    }, 6000000);
    $interval(function(){
        $http.get('/solution-two/data').success(function (data) {
            var hour=$scope.Data2.length+1;
            var temps= data;
            $scope.Data2.push({hour: hour, temps:temps});
        });
        $http.get('/solution-two/data2').success(function (data) {
            var hour=$scope.Data.length+1;
            var temps= data;
            $scope.Data.push({hour: hour, temps:temps});
        });
    }, 1000);
})


