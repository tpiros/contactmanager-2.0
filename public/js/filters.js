angular.module("contacts.filters", []).
  filter('capitalise', function() {
    return function(input) {
      if(input != null) {
        return input.substring(0,1).toUpperCase() + input.substring(1);
      }
    }
  });