class Scene extends Feature {
  constructor(sceneId) {
    super(sceneId);
    this.hotspots = [];
  }

  addHotspot(hotspot) {
    this.hotspots.push(hotspot);
  }
}