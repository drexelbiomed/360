// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var span = document.createElement('span');
  span.innerHTML = "<input id='btn' type='button' value='" + args.text + "' />";
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  
  var el = document.getElementById("btn").addEventListener('click', function(e) {
    viewer.loadScene("BiomedLabs");
  });
}
