var styles = `
    .ytd-reel-shelf-renderer,
    .ytd-compact-video-renderer,
    .ytp-videowall-still,
    .ytd-compact-playlist-renderer {
        display:none;
    }

    .ytp-chrome-bottom .ytd-compact-video-renderer {
        display: null;
    }
`
var firstExecution = true;
const setStyles = () => {
  firstExecution ? firstExecution = false : document.head.lastChild.remove();
  var styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

setStyles();
setInterval(setStyles, 1000);
