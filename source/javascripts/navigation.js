var experience = { "scenes": [
      {
        "title": "Welcome to Philadelphia!",
        "id": "loadScene_Skyline", 
        "features": [
          { "title": "30th Street Station",
            "id": "lookAt_30th"
          },
          { "title": "Bossone Research Center",
            "id": "lookAt_Bossone"
          }
        ]
      },
      {
        "title": "Welcome to Biomed",
        "id": "loadScene_BiomedLobby", 
        "features": [
          { "title": "Coulter Partnership Award",
            "id": "lookAt_Coulter"
          },
          { "title": "Faculty Directory",
            "id": "lookAt_Faculty"
          },
          { "title": "Ultrasound Feature",
            "id": "lookAt_Ultrasound"
          },
          { "title": "Life Saving Solutions",
            "id": "lookAt_LSS"
          }
        ]
      },
      {
        "title": "Go to Class",
        "id": "loadScene_MainBldg", 
        "features": [
          { "title": "Iconic Ryder Clock",
            "id": "lookAt_Clock"
          },
          { "title": "Drexel Central",
            "id": "lookAt_DrexelCentral"
          },
          { "title": "Main Auditorium",
            "id": "lookAt_Auditorium"
          }
        ]
      },
      {
        "title": "Go to Lab",
        "id": "loadScene_BiomedLabs", 
        "features": []
      },
      {
        "title": "Go on Co-op",
        "id": "loadScene_Chop", 
        "features": []
      },
      {
        "title": "Relax",
        "id": "loadScene_Atrium", 
        "features": []
      }
    ]
  }

var sidebar = document.getElementById("controller");

var ol = document.createElement("ol");

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

  ol.appendChild(li);
}

sidebar.appendChild(ol);


/*
<ol>
  <li>
    <h2>Welcome to Philadelphia!</h2>
    <input type="button" id="loadScene_Skyline" value="Philadelphia Skyline from Drexel Summit" />
    <br>
    <input type="button" id="lookAt_30th" value="30th Street Station" />
    <input type="button" id="lookAt_Bossone" value="Bossone Research Center" />
  </li>
  <li>
    <h2>Drexel Biomed HQ</h2>
    <input type="button" id="loadScene_BiomedLobby" value="Bossone 7th Floor Lobby" />
    <br>
    <input type="button" id="lookAt_Coulter" value="Coulter Award" />
    <input type="button" id="lookAt_LSS" value="Life Saving Solutions Showcase" />
    <input type="button" id="lookAt_Faculty" value="Faculty Directory" />
    <input type="button" id="lookAt_Ultrasound" value="Ultrasound" />
  </li>
  <li>
    <h2>Start Classes</h2>
    <input type="button" id="loadScene_MainBldg" value="Main Building" />
    <br>
    <input type="button" id="lookAt_Clock" value="J. Peterson Ryder Memorial Clock" />
    <input type="button" id="lookAt_DrexelCentral" value="Drexel Central" />
    <input type="button" id="lookAt_Auditorium" value="Main Auditorium" />
  </li>
  <li>
    <h2>STAR Research</h2>
    <input type="button" id="loadScene_BiomedLabs" value="Bossone 6th Floor Labs" />
  </li>
  <li>
    <h2>Go on Co-op</h2>
    <input type="button" id="loadScene_Chop" value="Children's Hospital of Philadelphia" />
  </li>
  <li>
    <h2>Senior Design</h2>
    <input type="button" id="loadScene_Atrium" value="Bossone 3rd Floor Atrium" />
  </li>
</ol>
*/