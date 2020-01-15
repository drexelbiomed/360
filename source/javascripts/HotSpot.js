class HotSpot extends Feature {
  constructor(id, pitch, yaw, hfov, sceneId) {
    super(id);
    this.pitch = pitch;
    this.yaw = yaw;
    this.hfov = hfov;
    this.sceneId = sceneId;
  }

  action() {
    if (viewer.getScene() != this.sceneId) {
      viewer.loadScene(this.sceneId);
      viewer.on('load',
        function () {
          // console.log('loaded');
          viewer.stopMovement();
          viewer.lookAt(nav.current.pitch, nav.current.yaw, nav.current.hfov, 1500, nav.current.toggleToolTip());
        }
      );
    } else {
      viewer.stopMovement();
      viewer.lookAt(this.pitch, this.yaw, this.hfov, 1500, this.toggleToolTip());
    }
  }

  toggleToolTip() {
    let div = document.getElementById(this.id);
    let span = div.firstChild;
    span.classList.toggle("show");

    // Remove event listener
    viewer.off('load');
  }
}
