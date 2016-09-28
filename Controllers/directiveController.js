app.controller('directiveController', function ($scope,service) {    
    alert("In controller")
    $scope.users = service.Getdata();
});