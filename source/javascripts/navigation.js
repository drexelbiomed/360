class Navigation {
  constructor(pannellumConfig) {
    // read pannellum config
    this.sceneConfig = pannellumConfig.scenes;
    this.counter = 0;
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
    return this.features[this.counter]
  }

  next() {
    if (this.counter < this.length - 1) {
      // Dismiss Popup
      if ("HotSpot" == this.current.constructor.name) {
        this.current.toggleToolTip();
      }

      this.counter++;
      this.current.action();
    }
    return this.current;
  }

  prev() {
    if (this.counter > 0) {
      // Dismiss Popup
      if ("HotSpot" == this.current.constructor.name) {
        this.current.toggleToolTip();
      }
      this.counter--;
      this.current.action();
    } else {
      console.log("At start, nowhere to go");
    }
    return this.current;
  }
}
