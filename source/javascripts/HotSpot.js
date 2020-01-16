class HotSpot extends Feature {
  constructor(sceneId, hsId, pitch, yaw, hfov) {
    super(sceneId);
    this.hsId = hsId;
    this.pitch = pitch;
    this.yaw = yaw;
    this.hfov = hfov;
  }
}
