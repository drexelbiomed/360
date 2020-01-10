var controllerDiv = document.getElementById("controller");
var controllerOl = document.createElement("ol");
var walkThruDiv = document.createElement("div");
var currentScene = viewer.getScene();
var viewerConfig = viewer.getConfig();
var newline = document.createElement("br");

// --- Populate ---

populateNavDelegate(viewerConfig, controllerDiv);

// controllerDiv.appendChild(controllerOl);
// populateOlNav(currentScene, viewerConfig);

function populateNavDelegate(config, containerDiv) {
  forEachSceneAddBtns(config.scenes, containerDiv);
  containerDiv.appendChild(newline);
  addPrevBtn(config.scenes, containerDiv);
  addNextBtn(config.scenes, containerDiv);
}

function forEachSceneAddBtns(scenes, containerDiv) {
  for (id in scenes) {
    var btn = createSceneBtn("s", id);
    containerDiv.appendChild(btn);

    forEachHotSpotAddBtns(scenes[id].hotSpots, containerDiv);
  }
}

function forEachHotSpotAddBtns(hotspots, containerDiv) {
  for (hs in hotspots) {
    console.log(hotspots[hs].type);
    if (hotspots[hs].type !== "scene") {
      var btn = createFeatureBtn(hotspots[hs]);
      containerDiv.appendChild(btn);
    }
  }
}

function createSceneBtn (sceneLabel, sceneId) {
  var sceneBtn = document.createElement("a");

  sceneBtn.innerHTML = sceneLabel;
  sceneBtn.classList.add("sceneBtn", "btn");
  sceneBtn.setAttribute("href", "#");
  sceneBtn.setAttribute("id", "loadScene_" + sceneId)
  sceneBtn.setAttribute("title", sceneId);
  sceneBtn.addEventListener('click', function(e) { viewer.loadScene(sceneId) });
  return sceneBtn;
}

function createFeatureBtn (hs) {
  var lookBtn = document.createElement("a");
  lookBtn.classList.add("featureBtn", "btn");
  lookBtn.innerHTML = "h"
  lookBtn.setAttribute("href", "#");
  lookBtn.setAttribute("id", "lookAt_" + hs.createTooltipArgs.id);
  lookBtn.setAttribute("title", hs.createTooltipArgs.label);
  lookBtn.addEventListener('click', function(e) { viewer.lookAt(hs.pitch, hs.yaw, hs.hfov, 1500, viewer.stopAutoRotate()) });
  return lookBtn;
}

function addPrevBtn(scenes, containerDiv) {
  var nextBtn = document.createElement("input");
  nextBtn.setAttribute("type", "button");
  nextBtn.setAttribute("id", "prevBtn");
  nextBtn.setAttribute("value", "<< Previous");
  containerDiv.appendChild(nextBtn);
}

function addNextBtn(scenes, containerDiv) {
  var nextBtn = document.createElement("input");
  nextBtn.setAttribute("type", "button");
  nextBtn.setAttribute("id", "nextBtn");
  nextBtn.setAttribute("value", "Next >>");
  containerDiv.appendChild(nextBtn);
}

// function populateOlNav(scene, master) {
//   var current = master.scenes[scene]; // console.log(current);
//   var scenes = master.scenes; // console.log(scenes);
  
//   for (id in scenes) {
//     // var li = createLoadSceneBtn(scenes[id].title, id); // console.log(scenes[id]);
//     var hotSpots = scenes[id].hotSpots; // console.log(hotspots);

//     var nested = document.createElement("div");
//     nested.setAttribute("id", "features_" + id); // i.e. <div id="features_Skyline">
//     nested.setAttribute("class", "features"); // i.e. <div id="features_Skyline">

//     for (hs in hotSpots) {
//       if (hotSpots[hs].type == "lookAt") {
//         // var btn = createLookAtBtn(hotSpots[hs]);
//         // nested.appendChild(btn)
//       }
//     }
//     // li.appendChild(nested);
//     // controllerOl.appendChild(li);
//   }
// }




// function createLoadSceneBtn (sceneTitle, sceneId) {
//   var li = document.createElement("li"),
//       h2 = document.createElement("p"),
//       sceneBtn = document.createElement("input");

//   h2.innerHTML = sceneTitle;
//   sceneBtn.setAttribute("type", "button");
//   sceneBtn.setAttribute("id", "loadScene_" + sceneId)
//   sceneBtn.setAttribute("value", "Go!");
//   sceneBtn.addEventListener('click', function(e) { viewer.loadScene(sceneId) });
//   h2.appendChild(sceneBtn);
//   li.appendChild(h2);
//   li.setAttribute("id", "li_" + sceneId);
//   return li;
// }

// function createLookAtBtn (hs) {
//   var lookBtn = document.createElement("input");
//   lookBtn.setAttribute("type", "button");
//   lookBtn.setAttribute("id", "lookAt_" + hs.createTooltipArgs.id);
//   lookBtn.setAttribute("value", hs.createTooltipArgs.label);
//   lookBtn.addEventListener('click', function(e) { viewer.lookAt(hs.pitch, hs.yaw, hs.hfov, 1500, viewer.stopAutoRotate()) });
//   return lookBtn;
// }

// function updateNav (sceneId) {
//   var visible = controller.querySelector("div.show");
//   // console.log(visible);
//   if (visible) { visible.classList.remove("show"); }

//   var featuresDiv = document.getElementById("features_" + sceneId);
//   featuresDiv.classList.add('show');
// }
