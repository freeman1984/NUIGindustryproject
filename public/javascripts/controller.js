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
        {hour: 1,sales: 274}
    ];
    $scope.Data2=[
        {hour: 1,sales: 333}
    ];
    $scope.Data3=[
        {hour: 1,sales: 330}
    ];
    $interval(function(){//this function is synced with the database
        $http.get('/solution-two/data3').success(function (data) {
            var hour=$scope.Data3.length+1;
            var sales= data;
            $scope.Data3.push({hour: hour, sales:sales});
        });
    }, 600000);
    $interval(function(){
        $http.get('/solution-two/data').success(function (data) {
            var hour=$scope.Data2.length+1;
            var sales= data;
            $scope.Data2.push({hour: hour, sales:sales});
        });
        $http.get('/solution-two/data2').success(function (data) {
            var hour=$scope.Data.length+1;
            var sales= data;
            $scope.Data.push({hour: hour, sales:sales});
        });
    }, 1000);
})


