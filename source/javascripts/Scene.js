class Scene extends Feature {
  constructor(id) {
    super(id);
    this.hotspots = [];
  }
  
  addHotspot(hotspot) {
    this.hotspots.push(hotspot);
  }

  action() {
    viewer.loadScene(this.id);
  }
}
