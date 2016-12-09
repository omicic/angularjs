(function () {
'use strict';

angular.module('data')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    categories: '<'
  }
});

})();
