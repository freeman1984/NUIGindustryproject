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

        /*sending json to html page
        $http.get('/solution-two/data6').success(function (data) {
            $scope.users3 = data;
        })
*/


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






    $interval(function(){
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



























/*
 $interval(function(data){
 $http.get('/solution-two/data').success(function (data) {
 $scope.users = data;
 })
 var hour=$scope.salesData.length+1;
 data = users;
 var sales= users;
 $scope.salesData.push({hour: hour, sales:sales});
 }, 1000, 100);
 });

 /*
 $scope.salesData=[
 {hour: 1,sales: 280},
 {hour: 2,sales: 200},

 ];
 $interval(function(data){
 var hour=$scope.salesData.length+1;
 var sales= Math.round(Math.random() * 300);
 $scope.salesData.push({hour: hour++ , sales:data});
 }, 1000, 100);

 });


 /*
 var voltageModel = mongoose.model('Voltage', {temp: Number});
 setInterval (function(){//interval function which allows us to store values every 8 seconds
 getList(function(data) {
 var Voltage = new voltageModel({temp:data});
 Voltage.save(function (err) {
 if (err)//....
 console.log('Done');
 });

 });
 }, 8000);
 */
/*
 var voltageModel = mongoose.model('Voltage', {temp: Number});
 setInterval (function(){//interval function which allows us to store values every 8 seconds
 getList(function(data) {
 var Voltage = new voltageModel({temp:data});
 Voltage.save(function (err) {
 if (err)//....
 console.log('Done');
 });

 });
 }, 8000);
 */
/*
 setInterval(function () {

 $http.get('/solution-two/data').success(function (data) {
 $scope.users = data;
 })

 $http.get('/solution-two/data2').success(function (data) {
 $scope.users2 = data;
 })
 },1000);
 */