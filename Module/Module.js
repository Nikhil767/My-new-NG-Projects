
var app = angular.module('myApp', []);
// app.config(function ($routeProvider, $locationProvider) {

//     // $routeProvider.
//     //     when('/DisplayData', {
//     //         templateUrl: './DisplayData.html',
//     //         controller: 'nController'
//     //     }).
//     //     when('/register', {
//     //         templateUrl: 'partials/register.html',
//     //         controller: 'ContactController'
//     //     }).
//     //     otherwise({
//     //         redirectTo: '/login'
//     //     });
// });

// app.run(function ($rootScope, $location) {

//     $rootScope.$on("$routeChangeStart", function () {
//         if ($rootScope.loggedInUser == null) {

//             $location.path("/login");

//         }
//     });
// });

// app.controller("LoginController", function ($scope, $location, $rootScope) {
//     $scope.login = function () {
//         $rootScope.loggedInUser = $scope.username;
//         $location.path("/register");
//     };

//     alert('m login controller');
// });


// app.controller("nController", function ($scope, $location, $rootScope) {
//     (function () {
//         $location.path("./DisplayData.html")
//     })();

// });