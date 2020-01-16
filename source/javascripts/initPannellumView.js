var initialConfig = {
  "default": {
    // "hotSpotDebug": true,
    "firstScene": "1-Skyline",
    // "author": "David Myers",
    "sceneFadeDuration":  1500,
    "autoLoad": true
  },

  "scenes": {
    // Skyline
    // =============================================
    "1-Skyline": {
      // "hotSpotDebug": true,
      "title": "Philadelphia Skyline<br><small>View from Summit Residence Hall</small>",
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
            "text": "<strong>Bossone Research Center</strong><br><small>Home to Drexel BIOMED, anchoring Philadelphia's 'Avenue of Technology' on 32nd and Market Street</small>"//,
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
            "text": "<strong>30th Street Station</strong><br><small>A block away from Drexel campus is Philadelphia's main railroad station and a major stop on Amtrak's Northeast and Keystone corridors.</small>"//,
            //"image": "images/30thStreet.jpg"
          }
        },
        {
          "pitch": -12.3,
          "yaw": -13.7,
          "hfov": 25,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "buckley-field",
            "label": "Buckley Recreational Field",
            "text": "<strong>Buckley Recreational Field</strong><br><small> utilized for informal recreation, intramurals, and club sports.</small>"//,
            // "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": -6.6,
          "yaw": 21.9,
          "hfov": 25,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "lancaster-walk",
            "label": "Lancaster Walk",
            "text": "<strong>Make Your Mark</strong><br><small> In 2001, Student Life began honoring incoming classes with dragon claw plaques on Lancaster Walk. The bronze plaques are presented at the end of New Student Week to encourage students to 'Make Your Mark' at Drexel.</small>"//,
            // "image": "images/bossone.jpg"
          }
        }
      ]
    },
    // BIOMED Lobby
    // =============================================
    "2-BiomedLobby": {
      // "hotSpotDebug": true,
      "title": "Bossone Research Center<br><small>BIOMED Lobby 7th Floor</small>",
      "panorama": "images/Lobby-cc.jpg",
      "type": "equirectangular",
      "pitch": -10,
      "yaw": -53.2,
      "hfov": 100,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch": 18.8,
          "yaw": -88.2,
          "hfov": 75,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "faculty-directory",
            "label": "Faculty Directory",
            "text": "<strong>BIOMED Faculty Directory</strong><br><small>The mission of the School's faculty is to promote health and quality of life through education, research and innovation that integrates engineering and life sciences in a global context.</small>"//,
            // "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": -18.7,
          "yaw": -126.6,
          "hfov": 100,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "lifesaving-solutions",
            "label": "Lifesaving Solutions",
            "text": "<strong>Biomedical Engineers Save Lives</strong><br><small> The process is called translational research and it applies the latest discoveries in science to solve unmet medical needs bringing forth lifesaving solutions to the hands clinicians and medical professionals.</small>"//,
            // "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": -5.2,
          "yaw": 42.3,
          "hfov": 70,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "ultrasound-poster",
            "label": "Ultrasound Poster",
            "text": "<strong>Biomedical Ultrasound</strong><br><small>Did you know that the ultrasound technology behind Sonograms was developed here at Drexel by pioneer of the first clinical ultrasound scanner, Prof. Emeritus Dr. John Reid?</small>"//,
            // "image": "images/bossone.jpg"
          }
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
          "pitch": 16, 
          "yaw": -172.9,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "clock-marker",
            "label": "Ryder Clock",
            "text": "<strong>Ryder Clock</strong><br><small>The first dean of men, J. Peterson Ryder, had a penchant for punctuality, standing in the court, pocket-watch in hand, spurring on students late to class. He provided funds for the clock in the Great Court, inscribed, \"Be on Time.\"</small>"
            // "image": "images/Ryder_sitecore.jpg"
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
            "text": "<strong>Main Auditorium</strong><br><small>The heart of Drexel University's tradition and grandeur, and home to one of the largest pipe organs in the world.</small>"
            // "image": "images/Main_Auditorium.jpg"
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
};

var pannellumDiv = "viewer";
var viewer = pannellum.viewer(pannellumDiv, initialConfig);