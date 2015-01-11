var app = angular.module('K15', ["ngRoute","ngSanitize","ngTouch","mobile-angular-ui","ngCookies"])
app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/',          {templateUrl: "home.html"});
  $routeProvider.when('/Home',    {templateUrl: "home.html"}); 
  $routeProvider.when('/admin',   {templateUrl: "admin.php"}); 
});
app.controller('mainController', function($rootScope, $scope,$cookies,$http){
  
 $scope.event={
  Engineering:["Contraptions","BIM","Godspeed","TCS Innovate","Paper Presentation","e-Zone","Circuit craze"],
  Coding:["Onsite Programming Contest ","Onsite Debugging","Heptathlon","Microsoft's Tame the Code"],
  Management:["Chaos Theory","K! Idol","Marketing Madness"],
  Quizzes:["K! Open Quiz","Biz Quiz","Sci-tech Quiz","School Quiz"],
  Online:["Athena","Cerebra","Dalal bull","Riddles of the Sphinx","Sherlock","Online Programming Contest"],
  Robotics:["RoboWars","To the ArK!","K!ronicles of Mars","Hawker Bot"],
  General:["Alcatraz","Math modeling","The fourth estate"]};

$scope.event_categories=['General','Engineering','Robotics','Online','Quizzes','Coding','Management'];
$scope.updates=['French police free hostages from two buildings following a shooting at the headquarters of satirical magazine Charlie Hebdo in Paris.',
'Maithripala Sirisena is elected President of Sri Lanka.',
'Lithuania becomes the 19th member of the Eurozone.',
'Archaeologists announce the discovery of the tomb of Khentakawess III, a previously unknown ancient Egyptian queen.'
];
});
