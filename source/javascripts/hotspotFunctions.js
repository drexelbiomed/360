// Hot spot creation function
function hotspotV1(hotSpotDiv, args) {
  // 1. create empty span element
  var span = document.createElement('span');
  var player;

  // 2. setup span element with id, class, 
  //    and event listener show/hide toggle
  hotSpotDiv.setAttribute("id", args.id)
  hotSpotDiv.classList.add('tooltipV1');
  hotSpotDiv.addEventListener("click", function(e) {
    fixSpan(span);
    span.classList.toggle("show");
    togglePlayer(player);
  });

  // 3. setup example video pattern: [video:_UvcF1Rp0LM]
  let pattern = /(\[video:)(.{11})(\])/
  let regex = new RegExp(pattern, "g")
  let ytId;

  // 4. detect text & video content
  if (isDefined(args.text)) { 
    let text = args.text;

    if (text.includes("[video:")) {
      ytId = text.match(pattern)[2];
      text = text.replace(regex, iframeVideo('$2')); // 4.1 add video using html string replace
    }
    span.innerHTML += text; 
  }

  // 5. detect image content
  if (isDefined(args.image)) { span.innerHTML += '<img src="' + args.image + '" />'; }

  // 6. add span to div container
  hotSpotDiv.appendChild(span);
  
  // ! Test ! YouTube Api
  if (args.text.includes("[video:")) {
    player = new YT.Player(document.getElementById(ytId));
  }

  // 7. configure positioning
  span.style.width = span.scrollWidth - 20 + 'px';
  span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

function fixSpan(span) {
  span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

function iframeVideo(embedUrl) {
  // construct html string
  var str = '<div class="fitVids">'
  str += '<iframe width="320" height="180" id="' + embedUrl + '" ';
  str += 'src="https://www.youtube-nocookie.com/embed/' + embedUrl + '?rel=0&amp;enablejsapi=1' + '" ';
  // str += '?modestbranding=1&cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>'
  str += 'frameborder="0" enablejsapi="true" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>';
  str += '</iframe>';
  str += '</div>';
  return str
}

function togglePlayer(p) {
  if (isDefined(p)) {
    if (p.getPlayerState() == 1 ) { // playing
      p.pauseVideo();
    }
    if (p.getPlayerState() == 2) { // paused
      // p.playVideo();
    } 
    if (p.getPlayerState() == 3 ) { // buffering
      p.pauseVideo();
    }
    if (p.getPlayerState() == 5) { // cued
      p.playVideo();
    } 
  }
    //   if (p)
    //   p.playVideo();
    // }
}


function isDefined(property) {
  return (!(property === undefined));
}