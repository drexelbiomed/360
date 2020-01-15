class Scene extends Feature {
  constructor(id) {
    super(id);
    this.hotspots = [];
  }

  addHotspot(hotspot) {
    this.hotspots.push(hotspot);
  }

  action() {
    if (viewer.getScene() != this.id) {
      viewer.loadScene(this.id);
    }
  }
}
