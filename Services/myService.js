
angular.module('serviceModule', [])
.service('userService', function () {
    var users = [{ id: 0, 'name': 'Om', 'email': 'Om@gmail.com', 'doj': '07/08/1993', 'pass': '1234', 'cpass': '1234', 'income': 20000 },
        { id: 1, 'name': 'Ram', 'email': 'Ram@gmail.com', 'doj': '04/03/1995', 'pass': '1234', 'cpass': '1234', 'income': 40000 },
        { id: 2, 'name': 'Sham', 'email': 'Sham@gmail.com', 'doj': '05/06/1996', 'pass': '1234', 'cpass': '1234', 'income': 500000 },
        { id: 3, 'name': 'Anuj', 'email': 'Anuj@gmail.com', 'doj': '04/03/1995', 'pass': '1234', 'cpass': '1234', 'income': 40000 },
        { id: 4, 'name': 'Avinash', 'email': 'Avinash@gmail.com', 'doj': '05/06/1996', 'pass': '1234', 'cpass': '1234', 'income': 500000 },
        { id: 5, 'name': 'pankaj', 'email': 'pankaj@gmail.com', 'doj': '01-02-1999', 'pass': '1234', 'cpass': '1234', 'income': 760000 }];

this.Getdata = function (){ return users };


});