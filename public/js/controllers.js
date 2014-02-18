'use strict';
function ListCtrl($scope, $modal, contactFactory) {
  $scope.headers = ["name", "phone", "email", ""];
  $scope.columnSort = { sortColumn: 'name', reverse: false };

  contactFactory.getContacts().success(function(contacts) {
    $scope.contacts = contacts;
  });
  //Add contact modal
  $scope.add = function() {
    var modalInstance = $modal.open({
      templateUrl: 'addContactModal',
      controller: addContactModalCtrl
    });
  };

  $scope.view = function(c) {
    var id = c._id;
    var modalInstance = $modal.open({
      templateUrl: 'viewContactModal',
      controller: viewContactModalCtrl,
      resolve: {
        contact: function() {
          return contactFactory.getContact(id);
        }
      }
    });
  };

  $scope.edit = function(c) {
    var id = c._id;
    var modalInstance = $modal.open({
      templateUrl: 'editContactModal',
      controller: editContactModalCtrl,
      resolve: {
        contact: function() {
          return contactFactory.getContact(id);
        }
      }
    });
  };

  $scope.delete = function(c) {
     var id = c._id;
    var modalInstance = $modal.open({
      templateUrl: 'deleteContactModal',
      controller: deleteContactModalCtrl,
      resolve: {
        contact: function() {
          return contactFactory.getContact(id);
        }
      }
    });
  }
}

var addContactModalCtrl = function($scope, $http, $modalInstance, $window, contactFactory) {
  $scope.form = {};

  $scope.addContact = function() {
    contactFactory.addContact($scope.form.add).success(function(data) {
      $modalInstance.close($window.location.reload());
      });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};

var viewContactModalCtrl = function($scope, $modalInstance, contact) {
  $scope.allheaders = ["name", "phone", "email", "facebook", "twitter", "skype"];
  $scope.contact = contact.data.contact;

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  };
};

var editContactModalCtrl = function($scope, $modalInstance, $window, contact, contactFactory) {
  $scope.form = {};
  $scope.allheaders = ["name", "phone", "email", "facebook", "twitter", "skype"];
  $scope.form.edit = contact.data.contact;
  $scope.name = contact.data.contact.name;

  $scope.editContact = function() {
    contactFactory.updateContact(contact.data.contact._id, $scope.form.edit).success(function() {
      $modalInstance.close($window.location.reload());
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  }
};

var deleteContactModalCtrl = function($scope, $route, $modalInstance, $window, contact, contactFactory) {
  $scope.name = contact.data.contact.name;

  $scope.deleteContact = function() {
    contactFactory.deleteContact(contact.data.contact._id).success(function() {
      $modalInstance.close();
      contactFactory.getContacts().success(function(contacts) {
        return $scope.contacts = contacts;
      });
      $window.location.reload();
    });
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel')
  };
};