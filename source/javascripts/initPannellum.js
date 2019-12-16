viewer = pannellum.viewer('viewer', {
  "default": {
    "hotSpotDebug": true,
    "firstScene": "Skyline",
    // "author": "David Myers",
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
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "clock-marker",
            "text": "\"Be on time\"",
            "image": "images/Ryder_sitecore.jpg"
          }
        },
        {
          "pitch": 0, 
          "yaw": 95.2,
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "auditorium-marker",
            "text": "Main Auditorium is the heart of Drexel University's tradition and grandeur.",
            "image": "images/Main_Auditorium.jpg"
          }
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
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "star-video",
            "text": "Watch Star Scholars",
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"
          }
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
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "co-op-video",
            "text": "Go on co-op!",
            "video": "https://www.youtube-nocookie.com/embed/JZ_kUo7Gr6c"
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
      "autoRotate": -0.1,
      "hotSpots": [
        {
          "pitch": 1,
          "yaw": 22.4,
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "bossone-marker",
            "text": "<strong>Bossone Research Center</strong><br><small>Drexel Biomed's home, anchoring Philadelphia's 'Avenue of Technology' on 32nd and Market Street</small>",
            "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": 5.1,
          "yaw": -1.6,
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "30th-marker",
            "text": "<strong>30th Street Station</strong><br><small>Philadelphia's main railroad station (SEPTA Regional Rail &amp; Subway Lines), and is a major stop on Amtrak's Northeast and Keystone corridors.</small>",
            "image": "images/30thStreet.jpg"
          }
        }     
      ]
    }
  }
});