app.controller('life', function($scope, $location, students) {
    $scope.pass = false;
    $scope.failed = false;

    students.getCurrentUser().then(function(currentUser){
        $scope.student = currentUser;
    });

    $scope.doTest = function(){
        var doTest = $scope.student.doMathTest();
        $scope.pass = doTest;
        $scope.failed = !doTest;
    };

});