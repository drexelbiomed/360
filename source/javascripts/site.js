//= require youtubeApi
//= require initPannellumView
//= require NavigationView

//= require NavigationController

//= require Feature
//= require Scene
//= require HotSpot

//= require hotspotFunctions
//= require hotspotCounter

var controller = document.getElementById('controller');
var nav = new NavigationController(initialConfig, viewer);
var navUI = new NavigationView(controller);

