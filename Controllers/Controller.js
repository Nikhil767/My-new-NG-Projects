/// <reference path="../Module/Module.js" />

app.controller('myController', function ($scope, userService) {
    $scope.users = userService.Getdata();

    $scope.ResertFields = function () {

        $scope.contact = {
            name: '',
            email: '',
            doj: '',
            pass: '',
            cpass: '',
            income: ''
        };
        $scope.default = true;
    };

});