app.directive('myDirective', function () {
    return{
        restrict: 'E',
        templateUrl: '../Views/diective.html',
        controller: 'directiveController'
    };
});