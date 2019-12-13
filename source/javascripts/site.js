// This is where it all goes :)
viewer = pannellum.viewer('viewer', {
  "default": {
    "hotSpotDebug": true,
    "firstScene": "Skyline",
    "author": "David Myers",
    "sceneFadeDuration":  1500
  },

  "scenes": {
    
    // Atrium
    // =============================================
    "BossoneAtrium": {
      // "hotSpotDebug": true,
      "title": "Bossone 3rd Floor Atrium<br><small>32nd and Market Streets</small>",
      "type": "equirectangular",
      "panorama": "images/Atrium_2.jpg",
      "pitch": 31.5,
      "yaw": 68.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch": -2.3,
          "yaw": -145.1,
          "type": "scene",
          "text": "Go to Main Building",
          "sceneId": "MainBldg"
        },
        {
          "pitch": 1.5,
          "yaw": 104,
          "type": "scene",
          "text": "Elevator to Biomed 7th Floor Lobby",
          "sceneId": "BiomedLobby"
        },
        {
          "pitch": 27.6,
          "yaw": 22.4,
          "type": "scene",
          "text": "Go to the labs",
          "sceneId": "BiomedLabs"
        }
      ]
    },

    // Main Building
    // =============================================
    "MainBldg": {
      // "hotSpotDebug": true,
      "title": "Main Building",
      "panorama": "images/Main-Bldg-Test-1-cc.jpg",
      "type": "equirectangular",
      "pitch": 0,
      "yaw": -171.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch":  6.8,
          "yaw": 102.1,
          "type": "scene",
          "text": "Go to Bossone Atrium",
          "sceneId": "BossoneAtrium"
        },
        {
          "pitch": 13.7, 
          "yaw": -169.2,
          "type": "info",
          "text": "\"Be on time\"",
          "image": "images/Ryder_sitecore.jpg",
          "width": 200
        },
        {
          "pitch": 0, 
          "yaw": 95.2,
          "type": "info",
          "text": "Main Auditorium is the heart of Drexel University's tradition and grandeur.",
          "image": "images/Main_Auditorium.jpg",
          "width": 220
        }
      ]
    },

    // BIOMED Lobby
    // =============================================
    "BiomedLobby": {
      // "hotSpotDebug": true,
      "title": "BIOMED Lobby",
      "panorama": "images/Lobby-cc.jpg",
      "type": "equirectangular",
      "pitch": -10,
      "yaw": -53.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": -2,
      "hotSpots": [
        {
          "pitch":  .9,
          "yaw": -177,
          "type": "scene",
          "text": "Go to Bossone Atrium",
          "sceneId": "BossoneAtrium"
        }
      ]
    },

    // Labs
    // =============================================
    "BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs",
      "panorama": "images/Labs_fused-cc.jpg",
      "type": "equirectangular",
      "pitch": -7.65,
      "yaw": 12.93,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch":  1.5,
          "yaw": -52,
          "text": "Watch STAR Scholar",
          "type": "info",
          "video": "http://techslides.com/demos/sample-videos/small.mp4",
          "width": "200"
        },

      ]
    },

    // CHOP
    // =============================================
    "Chop": {
      // "hotSpotDebug": true,
      "title": "Chop",
      "panorama": "images/chop-cc.jpg",
      "type": "equirectangular",
      "pitch": -7.65,
      "yaw": 12.93,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch":  10,
          "yaw": -44,
          "cssClass": "custom-hotspot",
          "createTooltipFunc": hotspot,
          "createTooltipArgs": { 
            "text": "Go on co-op!",
            "video": "https://www.youtube.com/watch?v=JZ_kUo7Gr6c"
          }
        }, 
        {
          "pitch":  1.5,
          "yaw": 100,
          "type": "scene",
          "text": "Go to Bossone Atrium",
          "sceneId": "BossoneAtrium"
        }
      ]
    },
    // Skyline
    // =============================================
    "Skyline": {
      // "hotSpotDebug": true,
      "title": "Philadelphia Skyline<br><small>View from Drexel Summit</small>",
      "type": "equirectangular",
      "panorama": "images/Philly-Skyline.jpg",
      "maxPitch": 25,
      "minPitch": -25,
      "pitch": 10,
      "yaw":  0,
      "hfov": 40,
      "minHfov": 20,
      "maxHfov": 40,
      "haov": 133,
      "vaov": 54,
      "minYaw": -42,
      "maxYaw": 58,
      "autoLoad": true,
      "autoRotate": -0.1
    }
  }
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = "<input id='btn' type='button' value='" + args.text + "' />";
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  
  var el = document.getElementById("btn").addEventListener('click', function(e) {
    viewer.loadScene("BiomedLabs");
  });
}

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

var lookAtNesbitt = document.getElementById("lookAt_Nesbitt").addEventListener('click', function(e) {
  viewer.lookAt(-11.5, 31, 26, 1500, viewer.stopAutoRotate); 
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
