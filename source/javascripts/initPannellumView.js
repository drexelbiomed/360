var initialConfig = {
  "default": {
    // "hotSpotDebug": true,
    "firstScene": "1-Skyline",
    // "firstScene": "4-MainBldg",
    // "firstScene": "6-PISB",
    // "firstScene": "7-PISB-NEBEC",
    // "author": "David Myers",
    "sceneFadeDuration":  1500,
    "preview": "images/Tiny-Planet.jpg",
    "showFullscreenCtrl": false,
    "showControls": false,
    "autoLoad": true
  },

  "scenes": {
    // Skyline
    // =============================================
    "1-Skyline": {
      // "hotSpotDebug": true,
      "title": "<h1>Philadelphia Skyline</h1><p>View from The Summit <br>3400 Lancaster Ave</p>",
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
            "text": "<h1>Bossone Research Center</h1><p>Home to Drexel BIOMED, anchoring Philadelphia's 'Avenue of Technology' on 32nd and Market Street</p>"//,
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
            "text": "<h1>30th Street Station</h1><p>Philadelphia's main transportation hub, one block from Drexel campus. A major stop on Amtrak's Northeast and Keystone corridors.</p>"//,
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
            "text": "<h1>Make Your Mark</h1><p>Incoming classes are honored with with bronze dragon claw plaques presented at the end of New Student Week to encourage students to 'Make Your Mark' at Drexel.</p>"//,
            // "image": "images/bossone.jpg"
          }
        }
      ]
    },
    // BIOMED Lobby
    // =============================================
    "2-BiomedLobby": {
      // "hotSpotDebug": true,
      "title": "<h1>Bossone Research Center</h1><p>BIOMED Lobby 7th Floor</p>",
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
        // {
        //   "pitch": 18.8,
        //   "yaw": -88.2,
        //   "hfov": 75,
        //   "type": "lookAt",
        //   "cssClass": "hotspotV1",
        //   "createTooltipFunc": hotspotV1,
        //   "createTooltipArgs": { 
        //     "id": "faculty-directory",
        //     "label": "Welcome",
        //     "text": "<h1>Welcome to BIOMED!</h1><p>The mission of the School's faculty is to promote health and quality of life through education, research and innovation that integrates engineering and life sciences in a global context.</p>"//,
        //     // "image": "images/bossone.jpg"
        //   }
        // },
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
            "text": "<h1>BIOMED Engineers Save Lives</h1><p> <em>Biomedical Engineers</em> apply the latest discoveries in science to solve unmet medical needs bringing forth lifesaving solutions to the hands clinicians and medical professionals.</p>"//,
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
            "text": "<h1>Did you know?</h1><p>The ultrasound technology behind Sonograms was developed by Drexel Prof. Emeritus Dr. John Reid?</p>"//,
            // "image": "images/bossone.jpg"
          }
        }
      ]
    },

    // Labs
    // =============================================

    // PISB
    // =============================================
    "6-PISB": {
      "hotSpotDebug": true,
      "title": "<h1>PISB</h1><p>Papadaskis Integrated Sciences Building</p>",
      "type": "equirectangular",
      "panorama": "images/PISB-Panorama-CC.jpg",
      "horizonRoll": -1,
      "horizonPitch": -1.5,
      "pitch": -1.5,
      "yaw": -180,
      "hfov": 100,
      "autoRotate": -2,
      "hotSpots": [
        {
          "pitch":  10,
          "yaw": -32,
          "hfov": 50,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "pisb-video",
            "label": "Josue",
            "text": "<h1>Bio Wall</h1> [video:CNk22zXR-yc]"
          }
        }, 
      ]
    },

    "3a-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "BIOMED Labs<p>a</p>",
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
            "text": "<h1>3D Printed Living Cells</h1><p>Drexel BIOMED is home to cutting edge research facilities where students gain exposure to state-of-the-art techniques, such as biofabrication.</p> "
          }
        }
      ]
    },
    
    "3b-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "<h1>BIOMED Labs</h1>",
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
            "text": "<h1>Mastering Lab Skills</h1><p>BIOMED students get plenty of time to sharpen both lab &amp; analytical skills prior to their 6 month co-op employment(s).</p>"/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        }
      ]
    },

    "3c-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "<h1>BIOMED Labs</h1>",
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
            "text": "<h1>Fluorescence Microscopy</h1><p>Fluorescence microscopy makes it possible to visualize fluorescent proteins or dyes at the cellular and subcellular level.</p> "/*,
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
            "text": "<h1>Live Imaging Microscope</h1><p>This advanced tool is for imaging live cells under growth conditions. See it for yourself!</p> "/*,
            "video": "https://www.youtube-nocookie.com/embed/ud9-JOG_AR0"*/
          }
        }
      ]
    },

    "3d-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "<h1>BIOMED Labs</h1><p>Inside Fluorescent Microscope</p>",
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
            "text": "<h1>Macrophage Cells</h1><p>Current research initiatives include tracking macrophage changes in the healing of diabetic wounds, which holds potential to allow a personalized medicine approach to wound care.</p> "
          }
        }
      ]
    },

    "7-PISB-NEBEC": {
      "hotSpotDebug": true,
      "title": "<h1>PISB</h1><p>NorthEast BioEngineering Conference</p>",
      "type": "equirectangular",
      "panorama": "images/PISB-NEBEC-2.jpg",
      "haov": 84,
      "vaov": 100,
      "pitch": -1.5,
      "minPitch": -48,
      "maxPitch": 45,
      "yaw": 0,
      "minYaw": -30,
      "maxYaw": 30,
      "hfov": 50,
      "minHfov": 30,
      "maxHfov": 64,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch":  -13,
          "yaw": 1,
          "hfov": 45,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "nebec",
            "label": "nebec",
            "text": "<h1>Poster Presentations</h1><p>Students sharpen their communication skills and learn from their peers and mentors at conferences, such as NEBEC. </p>"
          }
        }, 
      ]
    }, 

    "3e-BiomedLabs": {
      // "hotSpotDebug": true,
      "title": "<h1>BIOMED Labs</h1><p>Sled Lab</p>",
      "panorama": "images/2017_07_06DreBioMedSled01_A.jpg",
      "type": "equirectangular",
      "autoRotate": -0.5,
      "pitch": 3,
      "yaw":  -10,
      "haov": 80,
      "vaov": 60,
      "maxPitch": 27,
      "minPitch": -27,
      "maxYaw": 38,
      "minYaw": -38,
      "hfov": 50,
      "minHfov": 20,
      "maxHfov": 33,
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
            "text": "<h1>Featured on Discovery Channel</h1><p>Learn about Dr. Sri Balasubramanian's Sled Lab research</p> [video:IoHH4YuzGDk] "
          }
        }
      ]
    },

    // Main Building
    // =============================================
    "4-MainBldg": {
      // "hotSpotDebug": true,
      "title": "<h1>Main Building</h1><p>32nd and Chestnut Streets</p>",
      "panorama": "images/Main-Bldg-Test-1-cc.jpg",
      "type": "equirectangular",
      "pitch": 0,
      "yaw": -171.2,
      "hfov": 100,
      "autoRotate": 2,
      "hotSpots": [
        {
          "pitch": 13, 
          "yaw": -172.9,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "clock-marker",
            "label": "Ryder Clock",
            "text": "<h1>Ryder Clock</h1><p>The first dean of men, J. Peterson Ryder, had a penchant for punctuality, standing in the court, pocket-watch in hand, spurring on students late to class. The Ryder clock is inscribed, \"Be on Time.\"</p>"
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
            "text": "<h1>Main Building Video</h1> [video:_UvcF1Rp0LM]"
          }
        }
      ]
    },

    // CHOP
    // =============================================
    "5-Chop": {
      // "hotSpotDebug": true,
      "title": "<h1>Children's Hospital of Philadelphia</h1>",
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
          "sceneId": "6-PISB"
        }
      ]
    }
  }
};

var pannellumDiv = "viewer";
var viewer = pannellum.viewer(pannellumDiv, initialConfig);