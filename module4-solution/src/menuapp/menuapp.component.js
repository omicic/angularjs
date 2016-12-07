(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    categories: '<'
  }
});

})();
