(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


//ShoppingListService.$inject = ['$q', '$timeout']
//MenuAppService.$inject = ['$q', '$timeout']
MenuDataService.$inject = ['$http', 'ApiPath']
function MenuDataService($http, ApiPath) {
  var service = this;

  // List of shopping items
   //var categories = [];

  service.getAllCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  //service.getItemsForCategory(categoryShortName)

  service.getItemsForCategory = function (category) {
    var config = {};
    if (category) {
      console.log(category);
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
}



})();
