class HotSpot extends Feature {
  constructor(id, pitch, yaw, hfov, sceneId) {
    super(id);
    this.pitch = pitch;
    this.yaw = yaw;
    this.hfov = hfov;
    this.sceneId = sceneId;
  }
}
