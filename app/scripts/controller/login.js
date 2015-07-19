app.controller('login', function($scope, students, $location, Student) {
    $scope.username = "enter username";

    var showMessage = _.curry(function(msg){
        $scope.msg = msg;
    });

    $scope.tryLogin = function (username) {
        var success =  function(user){
            console.log(user);
            students. loginUser(user);
            $location.path("/life");
        };

        students.getByName(username)
            .then(success)
            .catch(showMessage("no user with name"));
    };

    $scope.register = function (username) {
        var student = new Student(username);
        students.save(student)
            .then(showMessage("you may login now"));
    };
});