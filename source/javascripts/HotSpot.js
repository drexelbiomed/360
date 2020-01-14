class HotSpot extends Feature {
  constructor(id, pitch, yaw, hfov) {
    super(id);
    this.pitch = pitch;
    this.yaw = yaw;
    this.hfov = hfov;
  }

  action() {
    viewer.stopMovement();
    viewer.lookAt(this.pitch, this.yaw, this.hfov, 1500, this.toggleToolTip());
  }

  toggleToolTip() {
    let div = document.getElementById(this.id);
    let span = div.firstChild;
    span.classList.toggle("show");
  }
}
