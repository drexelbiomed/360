viewer = pannellum.viewer('viewer', {
  "default": {
    // "hotSpotDebug": true,
    "firstScene": "1-Skyline",
    // "author": "David Myers",
    "sceneFadeDuration":  1500
  },

  "scenes": {
    // Skyline
    // =============================================
    "1-Skyline": {
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
      "maxHfov": 28,
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
          "hfov": 25,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "bossone-marker",
            "label": "Bossone Research Center",
            "text": "<strong>Bossone Research Center</strong><br><small>Drexel Biomed's home, anchoring Philadelphia's 'Avenue of Technology' on 32nd and Market Street</small>"//,
            // "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": 5.1,
          "yaw": -1.6,
          "hfov": 25,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "30th-marker",
            "label": "30th Street Station",
            "text": "<strong>30th Street Station</strong><br><small>Philadelphia's main railroad station (SEPTA Regional Rail &amp; Subway Lines), and is a major stop on Amtrak's Northeast and Keystone corridors.</small>"//,
            //"image": "images/30thStreet.jpg"
          }
        }     
      ]
    },
    // BIOMED Lobby
    // =============================================
    "2-BiomedLobby": {
      // "hotSpotDebug": true,
      "title": "BIOMED Lobby<br><small>32nd and Market Streets</small>",
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

    // Main Building
    // =============================================
    "3-MainBldg": {
      // "hotSpotDebug": true,
      "title": "Go to Class - Main Building<br><small>32nd and Chestnut Streets</small>",
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
          "hfov": 50,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "clock-marker",
            "label": "Ryder Clock",
            "text": "\"Be on time\"",
            "image": "images/Ryder_sitecore.jpg"
          }
        },
        {
          "pitch": 0, 
          "yaw": 95.2,
          "hfov": 50,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "auditorium-marker",
            "label": "Auditorium",
            "text": "Main Auditorium is the heart of Drexel University's tradition and grandeur.",
            "image": "images/Main_Auditorium.jpg"
          }
        }
      ]
    },


    // Labs
    // =============================================
    "4-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>STAR Research Program</small>",
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
          "hfov": 50,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "star-video",
            "label": "Watch Star Scholars",
            "text": "Watch Star Scholars"/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        }
      ]
    },

    // CHOP
    // =============================================
    "5-Chop": {
      // "hotSpotDebug": true,
      "title": "Go on Co-op<br><small>Children's Hospital of Philadelphia (CHOP)</small>",
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
          "hfov": 50,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "co-op-video",
            "label": "Clinical Immersion Co-op",
            "text": "Go on co-op!"/*,
            "video": "https://www.youtube-nocookie.com/embed/JZ_kUo7Gr6c"*/
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
        // Atrium
    // =============================================
    "6-BossoneAtrium": {
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
    }
  }
});