// var app = angular.module('app', ['ngRoute, ngAnimate']);
var app = angular.module('app', ['ngRoute','ngAnimate']);

app.config(
    function($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'templates/gallery.html',
            controller: 'portfolioCtrl'
        }).
        when('/portfolio=:ItemName', {
            templateUrl: 'templates/portfolioItem.html',
            controller: 'portfolioItemCtrl'
        }).
        otherwise({
            redirectTo: function (routeParams, path, search) {
                //location.reload();
                return "/";
              }
        });
    }
);

// ===========================
//         dataFactory
// ===========================

app.factory('dataFactory',function($http){
    var JSON_url = '../json/portfolio.json';
    var JSON_item = '../json/';

    function getData(callback){
          $http({
            method: 'GET',
            url: JSON_url,
            cache: true
          }).success(callback);
    }

    return {
        getPortfolio: function(callback){
            getData(function(data) {
              callback( data );
            });
        },
        getItem: function(item,callback){
          $http({
            method: 'GET',
            url: '../json/'+item+'.json',
            cache: true
          }).success(callback);
        }
    };
});

// ================================
//      Portfolio Controller
// ================================

app.controller('portfolioCtrl', function($scope,dataFactory,$timeout) {

  $scope.portfolio = [];

  var PortfolioItemIn = new TimelineMax({
     repeat: -1,
     paused: false,
     delay:0,
     ease: Power4.easeInOut});

  PortfolioItemIn.set('.card',{ opacity:"0", transformOrigin:"0 0",transform:"translateX(-230px)"})
                 .staggerTo('.card',1,{opacity:"1", transform:"translateX(0)"},0.3);

  $scope.$on( '$viewContentLoaded', function( event ){
    PortfolioItemIn.play();
  });

  dataFactory.getPortfolio(function(data) {
    $scope.portfolio = data;
  })

  $scope.itemSelected = function(model){
    location.href = '#/portfolio=' + model.title
  };

  $scope.$on( '$viewContentLoaded', function( event ){

   $timeout(function () {
     $.fn.fullpage.setAllowScrolling(true);
     $.fn.fullpage.setKeyboardScrolling(true);
   }, 1000);

  });

});

// ================================
//     portfolioItem Controller
// ================================

app.controller('portfolioItemCtrl', function($scope,dataFactory,$routeParams,$timeout) {

  $scope.itemName = $routeParams.ItemName
  $scope.item = {}

  dataFactory.getPortfolio(function(data) {
    var result = $.grep(data, function(obj) {
      return obj.title == $scope.itemName
    })

    if (result.length == 0) {
      // not found
    } else if (result.length == 1) {
      $scope.item = result[0]
    } else {
      // multiple items found
    }
  })

  $scope.$on( '$viewContentLoaded', function( event ){
   $timeout(function () {
     $.fn.fullpage.moveTo(4);
     $.fn.fullpage.setAllowScrolling(false);
     $.fn.fullpage.setKeyboardScrolling(false);
   }, 1000);
  });
});

// ================================
//          AppAnimations
// ================================

app.animation('.view-slide-in', function ($timeout) {

  function myFunction(){
    $rootScope.$broadcast('bgTransitionComplete');
  }

  return {
    enter: function(element, done) {
      if (element.find( ".itemView" ).length == 1) {


        // portfolio in animation
        TweenMax.set('.itemView', {
          opacity: "0",
          transform:"translateX(100vw)"
        })

        $timeout(function () {
          TweenMax.to('.itemView', 1.5, {opacity:"1", transform:"translateX(0px)"});
        }, 1000);

      }else{

        TweenMax.set('.card', {
          transformOrigin:"0 0",
          transform:"translateX(-100vw)",
          opacity: "0"
        })

        $timeout(function () {
          TweenMax.staggerTo('.card', 0.5, {opacity:"1", transform:"translateX(0px)"},0.05);
        }, 1000);

      }
    }
    ,
    leave: function(element, done) {
      if (element.find( ".card" ).length > 0) {
        TweenMax.staggerTo('.card', 0.5, {opacity:"1", transform:"translateX(-100vw)"},0.05);
        $timeout(function () {
            done();
        }, 1000);

      }else{
        TweenMax.to('.itemView', 1.5, {opacity:"0", transform:"translateX(100vw)"});
        $timeout(function () {
            done();
        }, 1000);
      }
    }
  }

});

// app.animation('list-out',function() {
//   return {
//     start : function(element, done) {
//       TweenMax.set(element, {position:'relative'});
//
//       var duration = 1;
//       //we can use onComplete:done with TweenMax, but lets use
//       //a delay value for testing purposes
//       TweenMax.to(element, 1, {opacity:0, width:0});
//     }
//   }
// })
//
// app.animation('list-in',function() {
//   return {
//     setup: function(element) {
//       TweenMax.set(element, {opacity:0, width:0});
//     },
//     start : function(element, done) {
//       var duration = 1;
//       //we can use onComplete:done with TweenMax, but lets use
//       //a delay value for testing purposes
//       TweenMax.to(element, duration, {opacity:1, width:210});
//     }
//   }
// })
//
// app.animation('list-move',function() {
//   return {
//     start : function(element, done) {
//       var duration = 1;
//       //we can use onComplete:done with TweenMax, but lets use
//       //a delay value for testing purposes
//       TweenMax.to(element, duration, {opacity:1, width:210});
//     }
//   }
// })
