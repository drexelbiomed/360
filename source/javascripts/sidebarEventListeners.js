// Sidebar Controls
// =============================

// Load Scene

var loadSceneLobby = document.getElementById("loadScene_BiomedLobby").addEventListener('click', function(e) {
  viewer.loadScene("BiomedLobby"); 
});
var loadSceneMainBldg = document.getElementById("loadScene_MainBldg").addEventListener('click', function(e) {
  viewer.loadScene("MainBldg"); 
});
var loadSceneLabs = document.getElementById("loadScene_BiomedLabs").addEventListener('click', function(e) {
  viewer.loadScene("BiomedLabs"); 
});
var loadSceneChop = document.getElementById("loadScene_Chop").addEventListener('click', function(e) {
  viewer.loadScene("Chop"); 
});
var loadSceneAtrium = document.getElementById("loadScene_Atrium").addEventListener('click', function(e) {
  viewer.loadScene("BossoneAtrium"); 
});
var loadSceneSkyline = document.getElementById("loadScene_Skyline").addEventListener('click', function(e) {
  viewer.loadScene("Skyline"); 
});

// Look At Skyline

var lookAt30th = document.getElementById("lookAt_30th").addEventListener('click', function(e) {
  viewer.lookAt(2.9, -1.77, 28, 1500, viewer.stopAutoRotate); 
});
var lookAtBossone = document.getElementById("lookAt_Bossone").addEventListener('click', function(e) {
  viewer.lookAt(-2.3, 22, 20, 1500, viewer.stopAutoRotate); 
});

// Look At Lobby

var lookAtCoulter = document.getElementById("lookAt_Coulter").addEventListener('click', function(e) {
  viewer.lookAt(5.2, -134.5, 65, 1500, viewer.stopAutoRotate); 
});
var lookAtFaculty = document.getElementById("lookAt_Faculty").addEventListener('click', function(e) {
  viewer.lookAt(12.1, -79.2, 50, 1500, viewer.stopAutoRotate); 
});
var lookAtUltrasound = document.getElementById("lookAt_Ultrasound").addEventListener('click', function(e) {
  viewer.lookAt(-1.2, 31.3, 50, 1500, viewer.stopAutoRotate); 
});
var lookAtLSS = document.getElementById("lookAt_LSS").addEventListener('click', function(e) {
  viewer.lookAt(-14.2, -110.8, 50, 1500, viewer.stopAutoRotate); 
});

// Look At Main Building

var lookAtClock = document.getElementById("lookAt_Clock").addEventListener('click', function(e) {
  viewer.lookAt(13.7, -173.2, 50, 1500, viewer.stopAutoRotate); 
});
var lookAtDrexelCentral = document.getElementById("lookAt_DrexelCentral").addEventListener('click', function(e) {
  viewer.lookAt(0, -84, 80, 1500, viewer.stopAutoRotate); 
});
var lookAtAuditorium = document.getElementById("lookAt_Auditorium").addEventListener('click', function(e) {
  viewer.lookAt(-3.6, 95, 60, 1500, viewer.stopAutoRotate); 
});
