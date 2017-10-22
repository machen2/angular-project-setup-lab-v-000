function MainController($scope) {
  $scope.firstName = 'Jane';
  $scope.lastName = 'Doe';
}

angular
  .module('app')
  .controller('MainController', MainController);