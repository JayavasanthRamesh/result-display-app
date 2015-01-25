var app = angular.module('K15', ["ngRoute","ngSanitize","ngTouch","mobile-angular-ui","ngCookies","angular-flexslider"])

app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/',          {templateUrl: "home.html"});
  $routeProvider.when('/Home',    {templateUrl: "home.html"}); 
  $routeProvider.when('/admin',   {templateUrl: "admin.php"}); 

});


app.controller('mainController', function($rootScope, $scope,$cookies,$http){
  
 $rootScope.winners1=[{eve:"open quiz",position:"next-round",data:["k!2312","Ragav","K!1234","harish","K!2323","sabari"]}];
 $rootScope.winners2=[{eve:"OPc",position:"Winners",data:["k!23sd12","sdsddfav","K!1df234","Jaii","K!2323","gowtham"]}];
 //$rootScope.winners2={eve:"Circuit-craze",position:"next-round",data:{["k!2312","Ragav","K!1234","harish","K!2323","sabari"],["k!2312","Rav","K!1234","werish","K!2323","scxvari"],["k3243!2312","dsfgav","sdf234","barish","K!2323","sdsdri"]}};
 $rootScope.disp=1;
 //$scope.winners3={position:"next-round",data:{["k!2312","Ragav","K!1234","harish","K!2323","sabari"],["k!2312","Rav","K!1234","werish","K!2323","scxvari"],["k3243!2312","dsfgav","sdf234","barish","K!2323","sdsdri"]};


 $scope.event={
  Engineering:["Contraptions","BIM","Godspeed","TCS Innovate","Paper Presentation","e-Zone","Circuit craze"],
  Coding:["Onsite Programming Contest ","Onsite Debugging","Heptathlon","Microsoft's Tame the Code"],
  Management:["Chaos Theory","K! Idol","Marketing Madness"],
  Quizzes:["K! Open Quiz","Biz Quiz","Sci-tech Quiz","School Quiz"],
  Online:["Athena","Cerebra","Dalal bull","Riddles of the Sphinx","Sherlock","Online Programming Contest"],
  Robotics:["RoboWars","To the ArK!","K!ronicles of Mars","Hawker Bot"],
  General:["Alcatraz","Math modeling","The fourth estate"]};

  $scope.event_categories=['General','Engineering','Robotics','Online','Quizzes','Coding','Management'];
  
  $scope.updates=['1.French police free hostages from two buildings following a shooting at the headquarters of satirical magazine Charlie Hebdo in Paris.',
  '2.Maithripala Sirisena is elected President of Sri Lanka.',
  '3.Lithuania becomes the 19th member of the Eurozone.',
  '4.sdsdsdgfdggfdgffffffffffffffffffffffffffffffffffffffffffff',
  '5.sdsdsffffffffffffffffffffffffdsd',
  '6.fgdgfbvbgfngfhhhhhhhhhhhhhhhgfgh',
  '7.Archaeologists announce the discovery of the tomb of Khentakawess III, a previously unknown ancient Egyptian queen.'
  ];

});


app.controller('Updater', ['$scope',function($scope){

  $scope.addUpdate=function(){
          console.log("Adding "+ $scope.updateData);
          $scope.updates.push($scope.updateData);
          console.log($scope.updates);
        };

}]);

app.controller('r1Controller', function($scope,$rootScope){

  if($rootScope.disp==1)
  { 
    console.log("for 1"); 
    $scope.eventname=$rootScope.winners1[0].eve;
    $scope.details=$rootScope.winners1;
    $rootScope.count++;
    console.log($scope.eventname);
    console.log($scope.details);
  }

  $scope.addUpdate=function(){
          console.log("Adding "+ $scope.updateData);
          $scope.updates.push($scope.updateData);
          console.log($scope.updates);
        };

  $scope.chooseNext=function(){
    $scope.eventname=$rootScope.winners2[0].eve;
    $scope.details=$rootScope.winners2;
    $rootScope.count++;
    console.log($scope.eventname);
    console.log($scope.details);
  };

});