var UPSApp = angular.module('UPSApp', []);
UPSApp.controller('UPSController', function($scope,$http, $interval) {


    $scope.salesData4=[
        {hour: 1,sales: 274},
        {hour: 2,sales: 250},
        {hour: 3,sales: 260},
        {hour: 4,sales: 274}
    ];
    $http.get('/solution-two/data6').success(function (data) {//json database sent out data
        $scope.users5 = data;
        var hour=20;
        var sales= data;
        $scope.salesData4.push({hour: hour, sales:sales});
    });



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
        /*  $http.get('/solution-two/data6').success(function (data) {
         $scope.users5 = data; data from database spat out every 1 second
         })*/
    },1000);

    $scope.salesData=[
        {hour: 1,sales: 274}
    ];
    $scope.salesData2=[
        {hour: 1,sales: 333}
    ];
    $scope.salesData3=[
        {hour: 1,sales: 280}
    ];
    $interval(function(){//this function is synced with the database
        $http.get('/solution-two/data3').success(function (data) {
            var hour=$scope.salesData3.length+1;
            var sales= data;
            $scope.salesData3.push({hour: hour, sales:sales});
        });
    }, 60000,60);
    $interval(function(){
        $http.get('/solution-two/data').success(function (data) {
            var hour=$scope.salesData2.length+1;
            var sales= data;
            $scope.salesData2.push({hour: hour, sales:sales});
        });
        $http.get('/solution-two/data2').success(function (data) {
            var hour=$scope.salesData.length+1;
            var sales= data;
            $scope.salesData.push({hour: hour, sales:sales});
        });
    }, 1000);
})



