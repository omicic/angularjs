(function () {
  'use strict';

  angular.module('shoppingListCheckOff',[])

    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ToBuyService', ToBuyService);

    ToBuyController.$inject = ['ToBuyService'];
    AlreadyBoughtController.$inject = ['ToBuyService'];


    function ToBuyController(ToBuyService){

        var toBuyList = this;
        toBuyList.items = ToBuyService.getItems();
        toBuyList.removeItem = function(itemIndex){
          ToBuyService.removeItem(itemIndex);
          ToBuyService.addBoughtItem(toBuyList.items[itemIndex-1]);

        };
    }

    function AlreadyBoughtController(ToBuyService){

      var alreadyBoughtList = this;
      alreadyBoughtList.alreadyBoughtItems = ToBuyService.getBoughtItems();
    }

    function ToBuyService(){

      //var serviceAlreadyBought = this;
      var serviceToBuy = this;
      var alreadyBoughtItem;
      var alreadyBoughtItems = [];

      var toBuyItems = [
            {
              name:"cookies",
              quantity:"10"
            },
            {
              name:"cookies",
              quantity:"11"
            },
            {
              name:"cookies",
              quantity:"12"
            },
            {
              name:"cookies",
              quantity:"13"
            },
            {
              name:"cookies",
              quantity:"14"
            },
            {
              name:"cookies",
              quantity:"15"
            }
          ];

          serviceToBuy.getItems = function (){
            return toBuyItems;
          };

          serviceToBuy.removeItem = function (itemIndex){

            alreadyBoughtItem = {
              name: toBuyItems[itemIndex].name,
              quantity: toBuyItems[itemIndex].quantity
            };

            alreadyBoughtItems.push(alreadyBoughtItem);
            toBuyItems.splice(itemIndex, 1);

          };

          serviceToBuy.addBoughtItem = function (item){
            //console.log("item "+item.name + "  " + item.quantity);

          };

          serviceToBuy.getBoughtItems = function (){
            return alreadyBoughtItems;
          };

          serviceToBuy.removeBoughtItems = function (itemIndex) {
            alreadyBoughtItems.splice(itemIndex, 1);
          };
    }
})();
