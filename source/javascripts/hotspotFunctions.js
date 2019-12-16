// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-tooltip');
  var toggle = hotSpotDiv;
  var span = document.createElement('span');
  toggle.addEventListener("click", function(e) {
    span.classList.toggle("show");
  }, false);
  span.innerHTML = "<input id='btn' type='button' value='" + args.text + "' />";
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  
  var el = document.getElementById("btn").addEventListener('click', function(e) {
    viewer.loadScene("BiomedLabs");
  });
}



// console.log(toggle);
// var toggle = document.querySelector(".custom-hotspot");
// var content = document.querySelector(".custom-tooltip");
