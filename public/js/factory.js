'use strict';

angular.module("contacts.factory", []).
  factory('contactFactory', function($http){
    return {
      addContact: function(contact) {
        return $http.post('/api/contact/', contact); 
      },
      getContacts: function() {
        return $http.get('/api/contact/');
      },
      getContact: function(id) {
        return $http.get('/api/contact/' + id);
      },
      updateContact: function(id, contact) {
        return $http.put('/api/contact/' + id, contact);
      },
      deleteContact: function(id) {
        return $http.delete('/api/contact/' + id);
      }
    }
  });