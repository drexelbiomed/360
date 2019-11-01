// This is where it all goes :)
pannellum.viewer('panorama', {
  "default": {
    "firstScene": "Chop",
    "author": "David Myers",
    "sceneFadeDuration":  1500
    // "compass": true
    // "hotSpotDebug": true
  },

  "scenes": {
    // =============================================
    // ATRIUM
    // =============================================
    "BossoneAtrium": {
      "title": "Bossone 3rd Floor Atrium<br><small>32nd and Market Streets</small>",
      // "preview": "images/preview-six-rows.png",
      "type": "equirectangular",
      "panorama": "images/Atrium_2.jpg",
      "pitch": 31.5,
      "yaw": 68.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      // "hotSpotDebug": true,
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
    // =============================================
    // Main Building
    // =============================================
    "MainBldg": {
      "title": "Main Building",
      "panorama": "images/Main-Bldg-Test-1-cc.jpg",
      "type": "equirectangular",
      "pitch": 0,
      "yaw": -171.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      // "hotSpotDebug": true,
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
    // =============================================
    // BIOMED Lobby
    // =============================================
    "BiomedLobby": {
      "title": "BIOMED Lobby",
      "panorama": "images/Lobby-cc.jpg",
      "type": "equirectangular",
      "pitch": -10,
      "yaw": -53.2,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": -2,
      // "hotSpotDebug": true,
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
    // =============================================
    // Labs
    // =============================================
    "BiomedLabs": {
      "title": "BIOMED Labs",
      "panorama": "images/Labs_fused-cc.jpg",
      "type": "equirectangular",
      "pitch": -7.65,
      "yaw": 12.93,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      // "hotSpotDebug": true,
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
    // =============================================
    // CHOP
    // =============================================
    "Chop": {
      "title": "Chop",
      "panorama": "images/chop-cc.jpg",
      "type": "equirectangular",
      "pitch": -7.65,
      "yaw": 12.93,
      "hfov": 100,
      "autoLoad": true,
      "autoRotate": 2,
      // "hotSpotDebug": true,
      "hotSpots": [
        {
          "pitch":  1.5,
          "yaw": -52,
          "type": "scene",
          "text": "Go to Bossone Atrium",
          "sceneId": "BossoneAtrium"
        }
      ]
    }
  }
});