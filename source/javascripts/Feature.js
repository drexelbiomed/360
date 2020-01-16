class Feature {
  constructor(id) {
    this.id = id;
  }
  action() {
    console.log("Feature Action!")
  }
  isViewerOn(sceneId) {
    return viewer.getScene() != sceneId;
  }
  protectNavigation() {
    viewer.on('scenechange', function () {
      document.getElementById("nextBtn").disabled = true;
      document.getElementById("prevBtn").disabled = true;
    });
    viewer.on('scenechangefadedone', 
      function () {
        document.getElementById("nextBtn").disabled = false;
        document.getElementById("prevBtn").disabled = false;
        viewer.off('scenechange');
        viewer.off('scenechangefadedone');
      }
    );
  }
}
