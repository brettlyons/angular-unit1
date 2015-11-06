var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
  $scope.greeting = "Hello Severus"
})
app.controller("ExercisesController", function($scope) {
  $scope.favColor = "Navy blue";
  $scope.secondsInACentury = (60 * 60 * 24 * 365.25);
  $scope.rightNow = Date.now();
})
