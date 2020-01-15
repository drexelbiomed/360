//= require initPannellum

//= require Navigation
//= require Feature
//= require Scene
//= require HotSpot

//= require NavigationView

//= require hotspotFunctions
//= require hotspotCounter

var controller = document.getElementById('controller');
var nav = new Navigation(viewer.getConfig());
var navUI = new NavigationView(controller);
