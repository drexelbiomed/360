// This is where it all goes :)
pannellum.viewer('panorama', {
  "default": {
    "firstScene": "Bossone6thFloor",
    "author": "David Myers",
    "sceneFadeDuration":  1500
  },

  "scenes": {
    "Bossone6thFloor": {
      "title": "Bossone 6th Floor",
      "preview": "images/preview-six-rows.png",
      "type": "equirectangular",
      "panorama": "images/six-rows.jpg",
      "hfov": 45,
      "yaw": -90,
      "pitch": -10,
      "autoLoad": true,
      "autoRotate": -2,
      // "hotSpotDebug": true,
      "hotSpots": [
        {
          "pitch": -3.2083557288453783,
          "yaw": -113.5555885681672,
          "type": "info",
          "text": "pitch: 0, yaw: 0"
        },
        {
          "pitch": 0,
          "yaw": 90,
          "type": "info",
          "text": "pitch: 0, yaw: 90"
        },
        {
          "pitch": 0,
          "yaw": 169,
          "type": "info",
          "text": "Research Poster: Harnessing the Inflammatory Response for the Diagnosis of Diabetic Ulcers"
        },
        {
          "pitch": 0,
          "yaw": 270,
          "type": "info",
          "text": "pitch: 0, yaw: 270"
        }
      ]
    }
  }
});