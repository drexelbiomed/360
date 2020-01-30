// Hot spot creation function
function hotspotV1(hotSpotDiv, args) {
  var span = document.createElement('span');
  
  hotSpotDiv.setAttribute("id", args.id)
  hotSpotDiv.classList.add('tooltipV1');
  hotSpotDiv.addEventListener("click", function(e) {
    fixSpan(span);
    span.classList.toggle("show");
    // recordHotspot(args.id);
  });
  let pattern = /(\[video:)(.{11})(\])/
  let regex = new RegExp(pattern, "g")

  if (isDefined(args.text)) { 
    let text = args.text;
    if (text.includes("[video:")) {
      console.log('got here');
      text = text.replace(regex, iframeVideo('$2'));
    }
    span.innerHTML += text; 
  }

  if (isDefined(args.image)) { span.innerHTML += '<img src="' + args.image + '" />'; }
  
  hotSpotDiv.appendChild(span);
  
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

function fixSpan(span) {
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
  // console.log(span.style.marginTop);
}

function iframeVideo(embedUrl) {
  var str = '<div class="fitVids">'
  str += '<iframe width="320" height="180" src="'
  str += 'https://www.youtube-nocookie.com/embed/'
  str += embedUrl
  // str += '?modestbranding=1&cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
  str += '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
  str += '</iframe>'
  str += '</div>'
  return str
}

function isDefined(property) {
  return (!(property === undefined));
}