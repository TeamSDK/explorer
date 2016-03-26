angular.module('Shuttr.search', ['SearchServices'])

.controller('SearchController', ['$scope', 'SearchFactory', 
  function($scope, SearchFactory) {

  $scope.pictures;
  $scope.location = "San Francisco";
  $scope.getPictures = function(location) {

    SearchFactory.getAllPictures(location)
    .then(function(response) {
      console.log(response.data)
      $scope.pictures = response.data.photos.photo;
    })

  }

}])
