class Navigation {
  constructor(pannellumConfig) {
    // read pannellum config
    this.sceneConfig = pannellumConfig.scenes;
    this.counter = 0;
  }
  get features() {
    let features = [];
    let sceneConfig = this.sceneConfig
    for (let id in sceneConfig) {
      // add scenes with hotspots
      let scene = new Scene(id);
      features.push(scene);

      // setup hotspots
      let hotSpots = sceneConfig[id].hotSpots

      for (let hs in hotSpots) {
        if (hotSpots[hs].type != "scene") {
          let id = hotSpots[hs].createTooltipArgs.id;
          let pitch = hotSpots[hs].pitch;
          let yaw = hotSpots[hs].yaw;
          let hfov = hotSpots[hs].hfov;
          let hotspot = new HotSpot(id, pitch, yaw, hfov);
          scene.addHotspot(hotspot);
          features.push(hotspot);
        }
      }
    }
    return features;
  }

  next() {
    // Dismiss Popup
    if (this.features[this.counter].constructor.name == "HotSpot") {
      this.features[this.counter].toggleToolTip();
    }

    this.counter ++;
    this.features[this.counter].action();
    return this.current;
  }

  prev() {
    if (this.counter > 0) {
      // Dismiss Popup
      if (this.features[this.counter].constructor.name == "HotSpot") {
        this.features[this.counter].toggleToolTip();
      }

      this.counter --;
      this.features[this.counter].action();
    } else {
      console.log("At start, nowhere to go");
    }
    return this.current;
  }

  get current() {
    return this.features[this.counter]
  }
}
