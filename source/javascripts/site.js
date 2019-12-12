// This is where it all goes :)
viewer = pannellum.viewer('viewer', {
  "default": {
    "firstScene": "Chop",
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
          "type": "scene",
          "text": "Go to Bossone Atrium",
          "sceneId": "BossoneAtrium"
        }
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

var lobbyBtn = document.getElementById("BiomedLobbyBtn").addEventListener('click', function(e) {
  viewer.loadScene("BiomedLobby"); 
});

var lobbyBtn = document.getElementById("MainBldgBtn").addEventListener('click', function(e) {
  viewer.loadScene("MainBldg"); 
});

var lobbyBtn = document.getElementById("BiomedLabsBtn").addEventListener('click', function(e) {
  viewer.loadScene("BiomedLabs"); 
});

var lobbyBtn = document.getElementById("ChopBtn").addEventListener('click', function(e) {
  viewer.loadScene("Chop"); 
});

var lobbyBtn = document.getElementById("AtriumBtn").addEventListener('click', function(e) {
  viewer.loadScene("BossoneAtrium"); 
});

