// This is where it all goes :)
pannellum.viewer('panorama', {
  "default": {
    "firstScene": "BossoneAtrium",
    "author": "David Myers",
    "sceneFadeDuration":  1500,
    // "hotSpotDebug": true
  },

  "scenes": {
    "Bossone6thFloor": {
      "title": "Bossone 6th Floor",
      // "preview": "images/preview-six-rows.png",
      "type": "equirectangular",
      "panorama": "images/six-rows-cc.jpg",
      "hfov": 100,
      "pitch": -10,
      "yaw": -110,
      "autoLoad": true,
      "autoRotate": -2,
      // "hotSpotDebug": true,
      "hotSpots": [
        {
          "pitch": -15.4,
          "yaw": -116.1,
          "type": "scene",
          "text": "Go downstairs",
          "sceneId": "BossoneAtrium"
        },
        {
          "pitch": 0,
          "yaw": 169,
          "type": "info",
          "text": "Research Poster: Harnessing the Inflammatory Response for the Diagnosis of Diabetic Ulcers"
        }
      ]
    },
    "BossoneAtrium": {
      "title": "Bossone 3rd Floor Atrium",
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
          "pitch": 27.6,
          "yaw": 22.4,
          "type": "scene",
          "text": "Go upstairs",
          "sceneId": "Bossone6thFloor"
        }
      ]
    }
  }
});