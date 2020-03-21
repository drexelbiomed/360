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

console.log(initialConfig.scenes);

var nav, navUI;

function initNav () {
  console.log("Hello World");
  nav = new NavigationController(initialConfig, viewer);
  navUI = new NavigationView(controller);

  viewer.off('load');
}

viewer.on('load', initNav);

