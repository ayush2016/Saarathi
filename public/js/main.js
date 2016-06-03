/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    // Pages
    .when("/team", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/volunteer", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/sponser", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/whatwedo", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/donate", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/campaigns", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/login", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/bpost1", {templateUrl: "partials/bpost1.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/", {templateUrl: "partials/whatwedo.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});