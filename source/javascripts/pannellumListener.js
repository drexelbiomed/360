viewer.on('load',
  function () {
    updateNav(viewer.getScene());
  }
);
// viewer.on('scenechange',
//   function () {
//     var newScene = viewer.getScene();
//     updateNav(newScene);
//   }
// );