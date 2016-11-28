(function (){
	'use strict';
	angular.module('NarrowItDownApp',[])
		.controller('NarrowItDownController',NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
		.directive('foundItems', FoundItemsDirective);

		function FoundItemsDirective (){
			var ddo = {
				templateUrl: 'foundItems.html',
				scope: {
					found:'<',
					onRemove: '&'
				},
				controller: FoundItemsDirectiveController,
				controllerAs: 'list',
				bindToController: true
			};

			return ddo;
		}


function FoundItemsDirectiveController(){
	var list = this;
}


		NarrowItDownController.$inject = ['MenuSearchService'];

		function NarrowItDownController(MenuSearchService) {

			var list = this;		
			var promise = MenuSearchService.getMenuItems();

			promise.then(function (response){

				list.items = response.data;
			
				list.checkSearchTerm = function(searchTerm){
					
					if(searchTerm == ""){
						list.found=[];
					} else { 
						list.found = MenuSearchService.checkSearchTerm(searchTerm, list.items);	
					}
						
				};

			})
			.catch(function (error){
				console.log("Something went terribly wrong.");
			});


			list.removeFoundItem = function(indexOf){
				MenuSearchService.removeFoundItem(indexOf);
			}

		}
	

		MenuSearchService.$inject = ['$http','ApiBasePath']; 
		function MenuSearchService($http,ApiBasePath){
			var service = this;
			var found=[];

			service.getMenuItems = function(){
				var response = $http({
					method:"GET",
					url:ApiBasePath+"menu_items.json"
				});
				
				return response;

			};


			service.checkSearchTerm = function(searchTerm, list){
				//var found = [];
				for(var i=0;i<list.menu_items.length;i++){
					var descr = list.menu_items[i].description;
					if(descr.indexOf(searchTerm) !== -1){
						found.push(list.menu_items[i]);
					}
				}

				//console.log(found);

				return found;

			};

			service.removeFoundItem = function(indexOf){
				found.splice(indexOf,1);
			}

		}

})();