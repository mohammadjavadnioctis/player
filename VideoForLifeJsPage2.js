
  // Get a handle to the player
var player       = document.getElementById('gossVideo');
var btnPlayPause = document.getElementById('btnPlayPause');
var btnMute      = document.getElementById('btnMute');
var progressBar  = document.getElementById('progress-bar');
//volumeBar    = document.getElementById('volume-bar');
var canvas = document.getElementById('canvasId');
// var videoPercentage1 = sessionStorage.getItem("Video1WatchPercentage");
// console.log(videoPercentage1);


document.getElementById('btnFullScreen').enabled = true;
player.addEventListener('timeupdate', updateProgressBar, false);
player.addEventListener('play', function() {
        canvas.style.display = 'block';
        var PlayButton = document.getElementById("PlayButton");
          PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `;
}, false);

player.addEventListener('pause', function() {
      canvas.style.display = 'block';
      draw(player, canvas);
      var PlayButton = document.getElementById("PlayButton");
      PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
}, false);

player.addEventListener('ended', function() { 
  var PlayButton = document.getElementById("PlayButton");
      PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`;
  
  this.pause(); }, false);	

function playPauseVideo() {
  var element = document.getElementById("PlayButtonIcon");
if (player.paused || player.ended) {
  //debugger;
  var isClassExist = hasClass(element,"fa-play");
  if(isClassExist === true){
    removeClass(element,"fa-play");
    addClass(element,"fa-pause");
    var PlayButton = document.getElementById("PlayButton");
      PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-pause" aria-hidden="true"></i> Watching `;
    
  }
  player.play();
  }
  else {
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton");
      PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
    player.pause();
  }
}

function updateProgressBar() {
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  progressBar.value = percentage;
  progressBar.innerHTML = percentage + '% played';
}

// sessionStorage.getItem("Video1EndedTime")

function pauseVid() { 
  //debugger;
  var percentage = Math.floor((100 / player.duration) * player.currentTime);
  if(percentage > 0 && percentage <100){
    var element = document.getElementById("PlayButtonIcon");
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton");
      PlayButton.innerHTML = `<i id="PlayButtonIcon" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
  }
  
  player.pause(); 
} 
function exitFullScreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.msExitFullscreen) {
document.msExitFullscreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) {
document.webkitExitFullscreen();
}
}

function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
function toggleFullScreen() {
    

    if (player.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player.requestFullscreen();
        }
        else if (player.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player.msRequestFullscreen();
        }
        else if (player.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player.mozRequestFullScreen();
        }
        else if (player.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");
        
    }
  }

  function draw(video, canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  }

  updateVideo1TimeWithBar();
function updateVideo1TimeWithBar() {
  var player = document.getElementById('gossVideo');
  progressBar.value = localStorage.getItem("Video1WatchPercentage");
  progressBar.innerHTML = localStorage.getItem("Video1WatchPercentage") + '% played';
  player.currentTime = parseFloat(localStorage.getItem("Video1EndedTime"));
}

  // // Previous page Percentage Bar
  //  updateProgressBarVideo1();
  
  // function updateProgressBarVideo1() {
  //   var progressBarVideo1  = document.getElementById('progress-barVideo1');
  //   progressBarVideo1.value = sessionStorage.getItem("Video1WatchPercentage");
  //   progressBarVideo1.innerHTML = sessionStorage.getItem("Video1WatchPercentage") + '% played';
  // }


  