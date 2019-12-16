// Hotspot Detection

var allHotspots = ["30th-marker", "bossone-marker", "co-op-video", "star-video", "auditorium-marker", "clock-marker"];
var seenHotspots = [];
var videoHotspots = ["co-op-video", "star-video"];

function recordHotspot (hotspotId) {
  addToSeen(hotspotId);
}

function addToSeen(id) {
  if (seenHotspots.indexOf(id) === -1) {
    seenHotspots.push(id);
  }
}