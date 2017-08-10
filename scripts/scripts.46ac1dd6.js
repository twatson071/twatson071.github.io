"use strict";angular.module("twatson071githubioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/resume",{templateUrl:"views/main.html",controller:"ResumeCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("twatson071githubioApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("twatson071githubioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),$(".collapse").on("shown.bs.collapse",function(){$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus")}).on("hidden.bs.collapse",function(){$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")}),angular.module("twatson071githubioApp").run(["$templateCache",function(a){a.put("views/about.html",'<!-- about.html --> <div class="container-full"> <div class="container"> <div class="row"> <div class="col-lg-offset-1"> <h2>Resume</h2> </div> </div> <div class="padding-top-lg"> <div class="row"> <div class="col-md-4"> <img src="images/programming-code.2a359040.svg" alt="Languages" class="float-left" height="20%" width="20%"> <div class="float-right"> <h4>Languages</h4> </div> </div> <div class="col-md-8"> <h5 class="content-left">JavaScript | Angular | React | Backbone | NodeJS | Java</h5> </div> </div> <div class="row"> <div class="col-md-4 padding-top-lg"> <img src="images/programming.363dcdf7.svg" alt="Skills/Experience" class="float-left" height="20%" width="20%"> <h4 class="float-right">About</h4> </div> <div class="col-md-8"> <div class="content-left"> I enjoy the design to development process. I like designing and wireframing web pages and seeing the user effectively using the design. I have worked on two different contracts for the government as a software engineer, imagining solutions for issues that the user may encounter. This interesting problem solving is what keeps me going within the world of software development. Listed above are some languages I am proficient in. </div> <div class="row"> <div class="col-md-8 padding-top-lg"> </div> </div> </div> </div> </div></div></div>'),a.put("views/main.html",'<div class="jumbotron"> <p class="lead"> <img src="images/Asset_1.427c2e60.svg" alt="Thomas Watson" height="20%" width="20%"><br> <div class="font-container"> <h4>Web Developer | Front End Design | User Experience</h4> <p><a class="btn btn-lg btn-success" ng-href="Thomas_Watson_Resume.pdf">Resume <span class="glyphicon glyphicon-fire"></span></a></p> </div></p></div>'),a.put("views/resume.html","")}]);