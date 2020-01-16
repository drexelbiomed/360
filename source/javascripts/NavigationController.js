class NavigationController {
  constructor(initialConfig, pannellum) {
    this.sceneConfig = initialConfig.scenes;
    this.counter = 0;
    this.pannellum = pannellum;
  }
  get features() {
    let features = [];
    let sceneConfig = this.sceneConfig
    for (let scId in sceneConfig) {
      // add scenes with hotspots
      let scene = new Scene(scId);
      features.push(scene);

      // setup hotspots
      let hotSpots = sceneConfig[scId].hotSpots

      for (let hs in hotSpots) {
        if (hotSpots[hs].type != "scene") {
          let hsId = hotSpots[hs].createTooltipArgs.id;
          let pitch = hotSpots[hs].pitch;
          let yaw = hotSpots[hs].yaw;
          let hfov = hotSpots[hs].hfov;
          let hotspot = new HotSpot(hsId, pitch, yaw, hfov, scId);
          scene.addHotspot(hotspot);
          features.push(hotspot);
        }
      }
    }
    return features;
  }

  get length() {
    return this.features.length;
  }

  get current() {
    return this.features[this.counter];
  }

  get isCounterLessThanLength() {
    return this.counter < this.length - 1;
  }

  get isOnHotSpot() {
    return "HotSpot" == this.current.constructor.name;
  }

  next() {
    if (this.isCounterLessThanLength) {
      // Dismiss Popup
      if (this.isOnHotSpot) {
        this.toggleToolTip();
      }

      this.counter++;
      this.navigate();
      // this.current.action();
    }
    return this.current;
  }

  prev() {
    if (this.counter > 0) {
      // Dismiss Popup
      if (this.isOnHotSpot) {
        this.toggleToolTip();
      }
      this.counter--;
      this.navigate();
      // this.current.action();
    } else {
      console.log("At start, nowhere to go");
    }
    return this.current;
  }

  navigate() {
    if (this.isOnHotSpot) {
      if (this.isViewerOn(this.current.sceneId)) {
        this.protectNavigation();
        this.pannellum.on('load',
          function () {
            viewer.stopMovement();
            viewer.lookAt(nav.current.pitch, nav.current.yaw, nav.current.hfov, 1500, nav.toggleToolTip());
          }
        );
        this.pannellum.loadScene(this.current.sceneId);
      } else {
        console.log("got here 3");
        this.pannellum.stopMovement();
        this.pannellum.lookAt(this.current.pitch, this.current.yaw, this.current.hfov, 1500, this.toggleToolTip());
      }
    } else {
      if (this.isViewerOn(this.current.id)) {
        console.log("got here 4");
        this.protectNavigation();
        this.pannellum.loadScene(this.current.id);
      }
    }
  }

  isViewerOn(sceneId) {
    return this.pannellum.getScene() != sceneId;
  }

  toggleToolTip() {
    let div = document.getElementById(this.current.id);
    let span = div.firstChild;
    fixSpan(span);
    span.classList.toggle("show");

    // Remove event listener
    this.pannellum.off('load');
  }

  protectNavigation() {
    this.pannellum.on('scenechange', function () {
      document.getElementById("nextBtn").disabled = true;
      document.getElementById("prevBtn").disabled = true;
    });
    this.pannellum.on('scenechangefadedone', 
      function () {
        document.getElementById("nextBtn").disabled = false;
        document.getElementById("prevBtn").disabled = false;
        viewer.off('scenechange');
        viewer.off('scenechangefadedone');
      }
    );
  }
}
