(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      categories: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getCategories();
      }]
    }
  })

    .state('menucategorydetail', {
      url: '/main-list/{category}',
      templateUrl: 'src/menuapp/templates/category-detail.template.html',
      controller: 'MenuCategoryDetailController',
      controllerAs: 'MenuCategoryDetail',
      resolve: {
        menuCategoryDetail: ['$stateParams','MenuAppService', function ($stateParams, MenuAppService) {
          return MenuAppService.getMenuItems($stateParams.category);
        }]
      }
    });
}

})();
