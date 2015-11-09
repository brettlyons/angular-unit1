angular.module('clickerApp',[])
  .controller('clickerApp', function($scope) {
    $scope.greeting = "Yooheeeelllooo";
    $scope.pickRandomNumber = function(){
      $scope.number = Math.floor(Math.random() * 10) + 1
    }
    $scope.reverseWord = function(someInfo){
      $scope.theWord = $scope.theWord.split('').reverse().join('');
    }
  })
