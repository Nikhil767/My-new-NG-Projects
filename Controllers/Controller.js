/// <reference path="../Module/Module.js" />

app.controller('myController',function($scope){

    $scope.person = {
                personName: 'ABC',        
        patientAge: 25,
        gender: 'male',        
        city: 'pune'
    }
    
    $scope1.persons = [{personName:'Om',id:1,age:26,gender:'male',city:'pune'},
    {personName:'Sham',id:2,age:23,gender:'male',city:'pune'},
    {personName:'Ram',id:3,age:22,gender:'Male',city:'Goa'},
    {personName:'Jitu',id:4,age:25,gender:'Male',city:'pune'}]
})