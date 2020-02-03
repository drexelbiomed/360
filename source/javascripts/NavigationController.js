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
          let hotspot = new HotSpot(scId, hsId, pitch, yaw, hfov);
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

  get currentIsHotSpot() {
    return "HotSpot" == this.current.constructor.name;
  }

  get isGoingToLoadScene() {
    return this.pannellum.getScene() != this.current.sceneId;
  }

  next() {
    if (this.isCounterLessThanLength) {
      
      if (this.currentIsHotSpot) { this.toggleToolTip("dismiss"); } // Dismiss Popup
      this.counter++;
      this.navigate();

    }

    return this.current;
  }

  prev() {
    if (this.counter > 0) {

      if (this.currentIsHotSpot) { this.toggleToolTip("dismiss"); } // Dismiss Popup
      this.counter--;
      this.navigate();

    } else { console.log("At start, nowhere to go"); }
    
    return this.current;
  }

  navigate() {

    if (this.currentIsHotSpot) {
      if (this.isGoingToLoadScene) {
        this.prepareNavigation();
        
        // load scene from previous button
        this.pannellum.on('load',
          function () {
            viewer.stopMovement();
            viewer.lookAt(nav.current.pitch, nav.current.yaw, nav.current.hfov, 2500, nav.toggleToolTip("show_backwards"));
          }
        );
        this.pannellum.loadScene(this.current.sceneId, this.current.pitch, this.current.yaw);

      } else {
        
        // look at from next button
        this.pannellum.stopMovement();
        this.pannellum.lookAt(this.current.pitch, this.current.yaw, this.current.hfov, 2500, this.toggleToolTip("show"));
      }
    } else {
      if (this.isGoingToLoadScene) {

        // load scene from next button
        this.prepareNavigation();
        this.pannellum.loadScene(this.current.sceneId);
      }
    }
  }

  toggleToolTip(msg) {
    let div = document.getElementById(this.current.hsId);
    let span = div.firstChild;
    // console.log(msg);
    
    if (msg == "show" || msg == "show_backwards") { 
      fixSpan(span);
      span.classList.add("show");
    } else if (msg == "dismiss") { 
      span.classList.remove("show");
    }

    if (span.getElementsByTagName('iframe').length > 0) {
      let iframe = span.getElementsByTagName('iframe')[0];
      var player = YT.get(iframe.id);
      // prevent bug from navigating to already opened video
      if (msg != "show_backwards") {
        var s = player.getPlayerState();
        if (msg == "show") {
          if (s == 2 || s == 3 || s == 5) {
            // togglePlayer(player);
          }
        }
        if (msg == "dismiss") {
          if (s == 1 || s == 2 || s == 3) {
            player.pauseVideo();
          }
        }
      }
    }

    // Remove event listener
    this.pannellum.off('load');
  }

  prepareNavigation() {
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
