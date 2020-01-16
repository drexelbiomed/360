class Scene extends Feature {
  constructor(id) {
    super(id);
    this.hotspots = [];
  }

  addHotspot(hotspot) {
    this.hotspots.push(hotspot);
  }

  action() {
    if (this.isViewerOn(this.id)) {
      this.protectNavigation();
      viewer.loadScene(this.id);
    }
  }
}