app.controller('TabsCtrl',function ($rootScope, $scope, $stateParams, $q, $location, $window, $timeout) {

  $scope.tabs = [
    {"text" : "Home"},
    {"text" : "Games"},
    {"text" : "Mail"},
    {"text" : "Car"},
    {"text" : "Profile"},
    {"text" : "Favourites"},
    {"text" : "Chats"},
    {"text" : "Settings"},
    {"text" : "Photos"},
    {"text" : "Pets"}
  ];

})


