(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['categories'];
function MainMenuAppController(categories) {
  var mainList = this;
  mainList.categories = categories;
}

})();
