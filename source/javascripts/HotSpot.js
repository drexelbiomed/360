class HotSpot extends Feature {
  constructor(id, pitch, yaw, hfov) {
    super(id);
    this.pitch = pitch;
    this.yaw = yaw;
    this.hfov = hfov;
  }
  action() {
    console.log("Look At Hotspot Transition!");
  }
}
