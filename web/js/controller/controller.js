'use strict';
var app = angular.module('app');

app.controller('HomeController', function ($scope, $location, $http, $rootScope, LoginService) {
    $rootScope.logout = function () {
        LoginService.ClearCredentials();
        $location.path('/login');
    };

});

app.controller('UserController', function ($scope, $location, $http, $rootScope, LoginService, UserService) {

    $scope.usersList = [];
    $scope.user = {};
    getAllUsers(UserService, $scope);
    $scope.userEdit = function (user) {

        UserService.GetById(user.id)
                .then(function (res) {
                    if (res.status == '200') {
                        console.log(res);
                        $scope.user = res.data;
                    }
                }).catch(function (err) {
            console.log(err);
        });
    };

});

app.controller('ProjectController', function ($scope, $location, $http, $rootScope, LoginService) {

    $scope.createProject = function () {
        $http.post('/api/projects/save', JSON.stringify(this.project))
                .then(function (res) {
                    console.log(res);
                }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.project = [
            { p1: 'pro1',
              p2: 'in progress'
            },

            { p1: 'pro2',
              p2: 'ogress'
            
            },
    
            {
             p1: 'pro3',
             p2: 'fdfdf'
            }
        ];
    
    

    $scope.review = function(){
        alert("Review Okay");
    };
    
//    $scope.project = {
//        name:'',
//        description:'',
//        pstartDate:'',
//        pendDate:'',
//        status:''
//    };
//    $scope.method = function(){
//        alert($scope.project.name);
//    };
//    
});
//jitus work
app.controller('projectManager', function ($scope) {
$scope.msg="Project Manager Page"
    $scope.project = [
            { p1: 'Project  no1',
              p2: 'Project Issue No1'
            },

            { p1: 'Project  no2',
              p2: 'Project Issue No2'
            
            },
    
            {
             p1: 'Project  no3',
             p2: 'Project Issue No3'
            }
        ];
    
    

    $scope.review = function(){
        alert("Status Mathed");
    };
    
   
});
app.controller('IssueController', function ($scope, $location, $http, $rootScope, LoginService) {
    $scope.users = [];
    $scope.projects = [];
    getInitUsers();
    getInitProjects();
    
     $scope.issueabc = function(){
        
        $scope.msg = 'fhgfhgf';
        alert($scope.msg);
    }

    function getInitUsers() {

        $http.get('/api/users/showAll')
                .then(function (res) {
                    $scope.users = res.data;
                }).catch(function (err) {
            console.log(err);
        });
    }
    ;

    function getInitProjects() {

        $http.get('/api/projects/showAll')
                .then(function (res) {
                    $scope.projects = res.data;
                }).catch(function (err) {
            console.log(err);
        });
    }
    ;

    $scope.createIssue = function () {
        console.log(this.issue);
    };

});

function getAllUsers(UserService, $scope) {
    UserService.GetAll()
            .then(function (res) {
                if (res.status == '200') {
                    console.log(res.data);
                    $scope.usersList = res.data;
                }
            }).catch(function (err) {
        console.log(err);
    });
}