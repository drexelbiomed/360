var initialConfig = {
  "default": {
    // "hotSpotDebug": true,
    "firstScene": "1-Skyline",
    // "firstScene": "3a-BiomedLabs",
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
      "maxPitch": 50,
      "minPitch": -50,
      "minHfov": 30,
      "maxHfov": 80,
      "pitch": 0,
      "yaw": -20,
      "hfov": 55,
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
            "label": "Welcome",
            "text": "<strong>Welcome to BIOMED!</strong><br><small>The mission of the School's faculty is to promote health and quality of life through education, research and innovation that integrates engineering and life sciences in a global context.</small>"//,
            // "image": "images/bossone.jpg"
          }
        },
        {
          "pitch": 5,
          "yaw": -109.1,
          "hfov": 100,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "lifesaving-solutions",
            "label": "Lifesaving Solutions",
            "text": "<strong>BIOMED Engineers <br>Save Lives</strong><br><small> <em>Biomedical Engineers</em> apply the latest discoveries in science to solve unmet medical needs bringing forth lifesaving solutions to the hands clinicians and medical professionals.</small>"//,
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
            "text": "<strong>Did you know?</strong><br><small>The ultrasound technology behind Sonograms was developed here at Drexel by pioneer of the first clinical ultrasound scanner, Prof. Emeritus Dr. John Reid?</small>"//,
            // "image": "images/bossone.jpg"
          }
        }
      ]
    },

    // Labs
    // =============================================

    "3a-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>a</small>",
      "panorama": "images/2016_04_27_DreLab01_A.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": 0,
      "yaw":  0,
      "hfov": 40,
      "minHfov": 10,
      "maxHfov": 30,
      "haov": 80,
      "vaov": 60,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch":  -2.4,
          "yaw": -1.2,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "3d-printer",
            "label": "3d-printer",
            "text": "<strong>3D Printed Living Cells</strong><br><small>Drexel BIOMED is home to cutting edge research facilities where students gain exposure to state-of-the-art techniques, such as biofabrication.</small> "
          }
        }
      ]
    },
    
    "3b-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>b</small>",
      "panorama": "images/2015_04_07_DreBME02.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": -3,
      "yaw":  0,
      "hfov": 40,
      "minHfov": 20,
      "maxHfov": 30,
      "haov": 80,
      "vaov": 60,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch": -5.7,
          "yaw": -16.6,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "pipette",
            "label": "Lab Skills",
            "text": "<strong>Mastering Lab Skills</strong><br><small>BIOMED students get plenty of time to sharpen both lab &amp; analytical skills prior to their 6 month co-op employment(s).</small>"/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        }
      ]
    },

    "3c-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>c</small>",
      "panorama": "images/2015_04_07_DreBME03_A.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": 0,
      "yaw":  -100,
      "hfov": 40,
      "minHfov": 20,
      "maxHfov": 30,
      "haov": 80,
      "vaov": 60,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch": 2.5,
          "yaw": -16,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "fluorescent-microscope",
            "label": "fluorescent microscope",
            "text": "<strong>Fluorescence Microscopy</strong><br><small>Fluorescence microscopy makes it possible to visualize fluorescent proteins or dyes at the cellular and subcellular level.</small> "/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        },
        {
          "pitch": 0,
          "yaw": 9,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "fluorescent-microscope-2",
            "label": "fluorescent microscope",
            "text": "<strong>Live Imaging Microscope</strong><br><small>This advanced tool is for imaging live cells under growth conditions. See it for yourself!</small> "/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        }
      ]
    },

    "3d-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>Inside Fluorescent Microscope</small>",
      "panorama": "images/macrophages.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": 0,
      "yaw":  -5,
      "hfov": 40,
      "minHfov": 20,
      "maxHfov": 40,
      "haov": 30,
      "vaov": 30,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch": 4.9,
          "yaw": 0,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "macrophage-cells",
            "label": "macrophage cells",
            "text": "<strong>Macrophage Cells</strong><br><small>Current research initiatives include tracking macrophage changes in the healing of diabetic wounds, which holds potential to allow a personalized medicine approach to wound care.</small> "
          }
        }
      ]
    },

    "3e-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<br><small>Sled Lab</small>",
      "panorama": "images/2017_07_06DreBioMedSled01_A.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -27,
      "maxYaw": 38,
      "minYaw": -38,
      "pitch": 3,
      "yaw":  -10,
      "hfov": 50,
      "minHfov": 20,
      "maxHfov": 33,
      "haov": 80,
      "vaov": 60,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch":  9.25,
          "yaw": 0.3,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "seatbelt",
            "label": "seatbelt",
            "text": "<strong>Featured on Discovery Channel</strong><br><small>Learn about Dr. Sri Balasubramanian's Sled Lab research</small> [video:IoHH4YuzGDk] "
          }
        }
      ]
    },

    // Main Building
    // =============================================
    "4-MainBldg": {
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
            "text": "Go on co-op! [video:JZ_kUo7Gr6c]"
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
    // ,
        // Atrium
    // =============================================
    // "6-BossoneAtrium": {
      // "hotSpotDebug": true,
    //   "title": "Bossone 3rd Floor Atrium<br><small>32nd and Market Streets</small>",
    //   "type": "equirectangular",
    //   "panorama": "images/Atrium_2.jpg",
    //   "pitch": 31.5,
    //   "yaw": 68.2,
    //   "hfov": 100,
    //   "autoRotate": 2,
    //   "hotSpots": [
    //     {
    //       "pitch": -2.3,
    //       "yaw": -145.1,
    //       "type": "scene",
    //       "text": "Go to Main Building",
    //       "sceneId": "MainBldg"
    //     },
    //     {
    //       "pitch": 1.5,
    //       "yaw": 104,
    //       "type": "scene",
    //       "text": "Elevator to Biomed 7th Floor Lobby",
    //       "sceneId": "BiomedLobby"
    //     },
    //     {
    //       "pitch": 27.6,
    //       "yaw": 22.4,
    //       "type": "scene",
    //       "text": "Go to the labs",
    //       "sceneId": "BiomedLabs"
    //     }
    //   ]
    // }
  }
};

var pannellumDiv = "viewer";
var viewer = pannellum.viewer(pannellumDiv, initialConfig);