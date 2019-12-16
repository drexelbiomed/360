// Hot spot creation function
function hotspotV1(hotSpotDiv, args) {
  var hotspot = hotSpotDiv;
  var span = document.createElement('span');
  
  hotspot.classList.add('tooltipV1');
  hotspot.addEventListener("click", function(e) {
    span.classList.toggle("show");
  }, false);

  if (isDefined(args.text)) { span.innerHTML += args.text; }
  if (isDefined(args.image)) { span.innerHTML += '<img src="' + args.image + '" />'; }
  if (isDefined(args.video)) { span.innerHTML += iframeVideo(args.video); }
  
  hotSpotDiv.appendChild(span);
  
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

function iframeVideo(embedUrl) {
  var str = '<div class="fitVids">'
  str += '<iframe width="320" height="180" src="'
  str += embedUrl
  str += '?modestbranding=1&cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
  str += '</iframe>'
  str += '</div>'
  return str
}

function isDefined(property) {
  return (!(property === undefined));
}

// console.log(toggle);
// var toggle = document.querySelector(".custom-hotspot");
// var content = document.querySelector(".custom-tooltip");
