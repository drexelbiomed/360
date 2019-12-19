var controllerDiv = document.getElementById("controller");
var controllerOl = document.createElement("ol");
var currentScene = viewer.getScene();
var viewerConfig = viewer.getConfig()

controllerDiv.appendChild(controllerOl);
populateNav(currentScene, viewerConfig);

function populateNav (scene, master) {
  var current = master.scenes[scene]; // console.log(current);
  var scenes = master.scenes; // console.log(scenes);
  
  for (id in scenes) {
    var li = createLoadSceneBtn(scenes[id].title, id); // console.log(scenes[id]);
    var hotSpots = scenes[id].hotSpots; // console.log(hotspots);
    
    for (hs in hotSpots) {
      if (hotSpots[hs].type == "lookAt") {
        var btn = createLookAtBtn(hotSpots[hs]);
        li.appendChild(btn)
      }
    }
    controllerOl.appendChild(li);
  }
}

function createLoadSceneBtn (sceneTitle, sceneId) {
  var li = document.createElement("li"),
      h2 = document.createElement("h2"),
      sceneBtn = document.createElement("input");

  h2.innerHTML = sceneTitle;
  sceneBtn.setAttribute("type", "button");
  sceneBtn.setAttribute("id", "loadScene_" + sceneId)
  sceneBtn.setAttribute("value", "Go!");
  sceneBtn.addEventListener('click', function(e) { viewer.loadScene(sceneId) });
  h2.appendChild(sceneBtn);
  li.appendChild(h2);
  return li;
}

function createLookAtBtn (hs) {
  var lookBtn = document.createElement("input");
  lookBtn.setAttribute("type", "button");
  lookBtn.setAttribute("id", "lookAt_" + hs.createTooltipArgs.id);
  lookBtn.setAttribute("value", hs.createTooltipArgs.id);
  lookBtn.addEventListener('click', function(e) { viewer.lookAt(hs.pitch, hs.yaw, hs.hfov, 1500, viewer.stopAutoRotate()) });
  return lookBtn;
}
