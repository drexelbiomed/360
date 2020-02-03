var initialConfig = {
  "default": {
    "hotSpotDebug": false,
    "firstScene": "1-Skyline",
    // "firstScene": "4-MainBldg",
    // "firstScene": "5-Chop",
    // "firstScene": "6-PISB",
    // "firstScene": "7-PISB-NEBEC",
    // "firstScene": "8-Commencement",
    // "firstScene": "3a-BiomedLabs",
    // "firstScene": "3b-BiomedLabs",
    // "firstScene": "3c-BiomedLabs",
    // "firstScene": "3d-BiomedLabs",
    // "firstScene": "3e-BiomedLabs",
    // "firstScene": "Mario",
    // "author": "David Myers",
    "sceneFadeDuration":  1500,
    "preview": "../images/Tiny-Planet.jpg",
    "previewTitle": "<h1>BIOMED 360<br>Virtual Tour</h1><p>Graduate Studies</p>",
    "showFullscreenCtrl": false,
    "showControls": false,
    "autoLoad": false
  },

  "scenes": {
    // Skyline
    // =============================================
    "1-Skyline": {
      "title": "<h1>Philadelphia Skyline</h1><p>View from The Summit</p>",
      "type": "equirectangular",
      "panorama": "../images/Philly-Skyline.jpg",
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
            "text": "<h1>Bossone Research Center</h1><p>Home to Drexel BIOMED, and first stop on the tour</p>"
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
            "text": "<h1>30th Street Station</h1><p>Welcome to Philadelphia! If you're from out of town, you're likely to arrive here. 30th Street is Philadelphia's main transportation hub. </p>"//, 
            //"image": "../images/30thStreet.jpg"
          }
        }
        // ,
        // {
        //   "pitch": -6.6,
        //   "yaw": 21.9,
        //   "hfov": 25,
        //   "type": "lookAt",
        //   "cssClass": "hotspotV1",
        //   "createTooltipFunc": hotspotV1,
        //   "createTooltipArgs": { 
        //     "id": "lancaster-walk",
        //     "label": "Lancaster Walk",
        //     "text": "<h1>Make Your Mark</h1><p>Each incoming class is honored with with a bronze dragon claw plaque on Lancaster Walk. It's presented to encourage students to 'Make Your Mark' at Drexel.</p>"//,
        //     // "image": "../images/bossone.jpg"
        //   }
        // }
      ]
    },
    // BIOMED Lobby
    // =============================================
    "2-BiomedLobby": {
      "title": "<h1>Bossone Research Center</h1>",
      "panorama": "../images/Lobby-cc.jpg",
      "type": "equirectangular",
      "maxPitch": 50,
      "minPitch": -50,
      "minHfov": 30,
      "maxHfov": 80,
      "pitch": 0,
      "yaw": -20,
      "hfov": 80,
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
        //     // "image": "../images/bossone.jpg"
        //   }
        // },
        {
          "pitch": -5,
          "yaw": -40,
          "hfov": 100,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "lifesaving-solutions",
            "label": "Lifesaving Solutions",
            "text": "<h1>Discover Biomedical Engineering</h1><p>Watch our highlights video to learn about our <em>research areas</em> and see examples of lifesaving solutions to medical needs.</p> [video:VtkjDaW2Nn4]"//,
            // "image": "../images/bossone.jpg"
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
            "text": "<h1>Fun Fact</h1><p>Did you know the ultrasound technology behind Sonograms was developed by Drexel Prof. Emeritus Drs. John Reid and H. H. Sun?</p>"//,
            // "image": "../images/bossone.jpg"
          }
        }
      ]
    },

    "4-MainBldg": {
      "title": "<h1>Main Building</h1><p>32nd and Chestnut Streets</p>",
      "panorama": "../images/Main-Bldg-Test-1-cc.jpg",
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
            "text": "<h1>Graduate Studies at Drexel: Pathways to the Future</h1> Drexel provides comprehensive graduate-level education with a focus on application through research and practical experience. [video:U9glzPDI9mw]"
          }
        }
      ]
    },

    // Labs
    // =============================================

    // PISB
    // =============================================
    "6-PISB": {
      "title": "<h1>BIOMED Labs</h1><p>Papadaskis Integrated Sciences Building</p>",
      "type": "equirectangular",
      "panorama": "../images/PISB-Panorama-CC.jpg",
      "horizonRoll": -1,
      "horizonPitch": -1.5,
      "pitch": -1.5,
      "yaw": -80,
      "hfov": 100,
      "autoRotate": -2,
      "hotSpots": [
        {
          "pitch":  0,
          "yaw": -32,
          "hfov": 80,
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
      "title": "<h1>Biomaterials and Regenerative Medicine Laboratory</h1><p>PI: Dr. Kara Spiller</p>",
      "panorama": "../images/2016_04_27_DreLab01_A.jpg",
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
          "pitch":  -4,
          "yaw": 1.9,
          "hfov": 80,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "3d-printer",
            "label": "3d-printer",
            "text": "<h1>State-of-the-Art Facilities</h1><p>Drexel BIOMED is home to cutting edge research facilities. Here, students gain exposure to techniques such as biofabrication. </p> " //[video:3bb9_qrmO5w]
          }
        }
        // ,{
        //   "pitch":  0,
        //   "yaw": 21,
        //   "hfov": 80,
        //   "type": "lookAt",
        //   "cssClass": "hotspotV1",
        //   "createTooltipFunc": hotspotV1,
        //   "createTooltipArgs": { 
        //     "id": "karissa",
        //     "label": "karissa",
        //     "text": "<h1>Collaboration at BIOMED</h1><p>Learn how Karissa found a supportive and collaborative environment to pursue life saving & life enhancing research at Drexel University. </p> [video:q9dVV0Ryfi8]" //
        //   }
        // }
      ]
    },
    
    "3e-BiomedLabs": {
      "title": "<h1>Sled Lab</h1><p>PI: Dr. Sri Balasubramanian</p>",
      "panorama": "../images/2017_07_06DreBioMedSled01_A.jpg",
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
          "pitch":  -6.3,
          "yaw": 3.9,
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

    "3b-BiomedLabs": {
      "title": "<h1>BIOMED Labs</h1>",
      "panorama": "../images/2015_04_07_DreBME02.jpg",
      "type": "equirectangular",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": -3,
      "yaw":  -15,
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
            "text": "<h1>Mastering Lab Skills</h1><p>BIOMED students get plenty of time to sharpen both lab &amp; analytical skills prior to their 6 month co-op employment(s).</p>"
          }
        }
      ]
    },

    "3c-BiomedLabs": {
      "title": "<h1>BIOMED Labs</h1>",
      "panorama": "../images/2015_04_07_DreBME03_A.jpg",
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
            "text": "<h1>Fluorescence Microscopy</h1><p>Fluorescence microscopy makes it possible to visualize fluorescent proteins or dyes at the cellular and subcellular level.</p> "
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
            "text": "<h1>Live Imaging Microscope</h1><p>This advanced tool is for imaging live cells under growth conditions. See it for yourself!</p> "
          }
        }
      ]
    },

    "3d-BiomedLabs": {
      "title": "<h1>BIOMED Labs</h1><p>Inside Fluorescent Microscope</p>",
      "panorama": "../images/macrophages.jpg",
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

    "Mario": {
      "title": "<h1>Drexel Grad Co-op</h1>",
      "type": "equirectangular",
      "panorama": "../images/2017_10_04_DreGra02_A.jpg",
      "maxPitch": 27,
      "minPitch": -30,
      "maxYaw": 39,
      "minYaw": -39,
      "pitch": 0,
      "yaw":  0,
      "hfov": 40,
      "minHfov": 20,
      "maxHfov": 33,
      "haov": 80,
      "vaov": 60,
      "autoRotate": -0.5,
      "hotSpots": [
        {
          "pitch":  -9.5,
          "yaw": 12.3,
          "hfov": 28,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "spark",
            "label": "spark",
            "text": "<h1>Grad Co-op: Spark Therapeutics</h1><p>Watch how Victoria Nash gained mentorship, and career development guidance from senior industry leaders just a few blocks from Drexel Campus</p> [video:U7_JMUUjAhw]"
          }
        }, 
        {
          "pitch":  -9,
          "yaw": 7,
          "hfov": 28,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "lockheed",
            "label": "lockheed",
            "text": "<h1>Grad Co-op: Machine Learning</h1><p>“A graduate co-op is essentially the best way to preview yourself to a company,” says Adam Eichen, who recently received an offer from his current co-op employer. </p> [video:wVDw6at9YSY]"
          }
        }
      ]
    }, 



    "8-Commencement": {
      "title": "<h1>Commencement!</h1><p>Citizens Bank Park</p>",
      "panorama": "../images/2017_06_13_DreGra02_A.jpg",
      "type": "equirectangular",
      "haov": 80,
      "vaov": 60,
      "pitch": 0,
      "minPitch": -28,
      "maxPitch": 28,
      "yaw": 10,
      "minYaw": -38,
      "maxYaw": 38,
      "hfov": 28,
      "minHfov": 20,
      "maxHfov": 28,
      "autoRotate": 0.25,
      "hotSpots": [
        {
          "pitch":  1,
          "yaw": 3,
          "hfov": 28,
          "type": "lookAt",
          "cssClass": "hotspotV1",
          "createTooltipFunc": hotspotV1,
          "createTooltipArgs": { 
            "id": "career",
            "label": "career",
            "text": "<h1>Career Pathways: Biomechanics Expert</h1><p>“David Jamison explains his role as an expert for injury causation cases at Robson Forensic and how he found this career path in biomedical engineering. </p> [video:YKEwbAPZsjM]"
          }
        }
      ]
    }
  }
};

var pannellumDiv = "viewer";
var viewer = pannellum.viewer(pannellumDiv, initialConfig);