(function () {
'use strict';

angular.module('MenuApp')
.service('MenuAppService', MenuAppService);


//ShoppingListService.$inject = ['$q', '$timeout']
//MenuAppService.$inject = ['$q', '$timeout']
MenuAppService.$inject = ['$http', 'ApiPath']
function MenuAppService($http, ApiPath) {
  var service = this;

  // List of shopping items
   var categories = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };
}

})();
