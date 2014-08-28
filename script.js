// Code goes here

(function() {
  'use strict';

  var app = angular.module('app', []);

  app.controller('MainCtrl', [
    function() {
      var vm = this;
      vm.nameOptions = [
        {
          name: "numbers",
        },
        {
          name: "letters",
        },
        {
          name: "colors",
          values: [
              'red',
              'blue',
              'green',
              'yellow',
              'orange',
              'indigo',
              'violet',
              'brown',
              'black',
              'white',
              'grey',
            ],
        },
        {
          name: "animals",
          values: [
              'aardvark',
              'buffalo',
              'cat',
              'dog',
              'elephant',
              'falcon',
              'gopher',
              'hawk',
              'iguana',
              'jaguar',
              'kangaroo',
              'lion',
              'manatee',
            ],
        }
        ];
      vm.groupNameOption = vm.nameOptions[1];
      vm.maxCards = 81;
      vm.maxGroups = 10;
      vm.repeatArray = [];
      var i = 0;
      for (i = 0; i < 1000; i++) {
        vm.repeatArray.push(i);
      }
      vm.letterOfAlphabet = function(number) {
        var aNumber = "A".charCodeAt(0);
        return String.fromCharCode(number + aNumber);
      };
    }
  ]);
})();
