var controller = document.getElementById("controller");
var list = document.createElement("ol");

for (s in experience.scenes) {
  var li = document.createElement("li");
  var h2 = document.createElement("h2");
  var sceneBtn = document.createElement("input");

  h2.innerHTML = experience.scenes[s].title

  sceneBtn.setAttribute("type", "button");
  sceneBtn.setAttribute("id", experience.scenes[s].id);
  sceneBtn.setAttribute("value", "Go!");
  
  h2.appendChild(sceneBtn);

  li.appendChild(h2);

  for (f in experience.scenes[s].features ) {
    var lookBtn = document.createElement("input");
    lookBtn.setAttribute("type", "button");
    lookBtn.setAttribute("id", experience.scenes[s].features[f].id);
    lookBtn.setAttribute("value", experience.scenes[s].features[f].title);
    li.appendChild(lookBtn);
    li.appendChild(document.createElement("br"));
  }

  list.appendChild(li);
}

controller.appendChild(list);