(function () {
'use strict';

angular.module('data')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['categories'];
function MainMenuAppController(categories) {
  var mainList = this;
  mainList.categories = categories;
}

})();
