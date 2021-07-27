
  
  
  
  
  // Get a handle to the player2
var player2       = document.getElementById('gossVideo2');
var btnPlayPause = document.getElementById('btnPlayPause');
var btnMute      = document.getElementById('btnMute');
var progressBar2  = document.getElementById('progress-bar2');
var canvas2 = document.getElementById('canvasId2');

// var videoPercentage3 = sessionStorage.getItem("Video3WatchPercentage");
// console.log(videoPercentage3);

document.getElementById('btnFullScreen2').enabled = true;
player2.addEventListener('timeupdate', updateprogressBar2, false);
player2.addEventListener('play', function() {
        canvas2.style.display = 'block';
        
        var PlayButton = document.getElementById("PlayButton2");
          PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `;
}, false);

player2.addEventListener('pause', function() {
      canvas2.style.display = 'block';
      draw2(player2, canvas2);
      var PlayButton = document.getElementById("PlayButton2");
      PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
}, false);

player2.addEventListener('ended', function() { 
  var PlayButton = document.getElementById("PlayButton2");
      PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`;
  
  this.pause(); }, false);	

function playPauseVideo2() {
  var element = document.getElementById("PlayButtonIcon2");
if (player2.paused || player2.ended) {
  //debugger;
  var isClassExist = hasClass(element,"fa-play");
  if(isClassExist === true){
    removeClass(element,"fa-play");
    addClass(element,"fa-pause");
    var PlayButton = document.getElementById("PlayButton2");
      PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-pause" aria-hidden="true"></i> Watching `;
    
  }
  player2.play();
  }
  else {
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton2");
      PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
    player2.pause();
  }
}

function updateprogressBar2() {
  var percentage = Math.floor((100 / player2.duration) * player2.currentTime);
  progressBar2.value = percentage;
  progressBar2.innerHTML = percentage + '% played';
}

function pauseVid2() { 
  //debugger;
  var percentage = Math.floor((100 / player2.duration) * player2.currentTime);
  if(percentage > 0 && percentage <100){
    console.log(this)
    var element = document.getElementById("PlayButtonIcon2");
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton2");
      PlayButton.innerHTML = `<i id="PlayButtonIcon2" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
  }
  
  player2.pause(); 
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
function toggleFullScreen2() {
    

    if (player2.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player2.requestFullscreen();
        }
        else if (player2.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player2.msRequestFullscreen();
        }
        else if (player2.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player2.mozRequestFullScreen();
        }
        else if (player2.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player2.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");
        
    }
  }

  function draw2(video, canvas) {
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
  }

updateVideo3TimeWithBar();
function updateVideo3TimeWithBar() {
  var player2 = document.getElementById('gossVideo2');
  progressBar.value = localStorage.getItem("Video3WatchPercentage");
  progressBar.innerHTML = localStorage.getItem("Video3WatchPercentage") + '% played';
  player2.currentTime = parseFloat(localStorage.getItem("Video3EndedTime"));
}

  // updateProgressBarVideo3();
  
  // function updateProgressBarVideo3() {
  //   var progressBarVideo3  = document.getElementById('progress-barVideo3');
  //   progressBarVideo3.value = sessionStorage.getItem("Video3WatchPercentage");
  //   progressBarVideo3.innerHTML = sessionStorage.getItem("Video3WatchPercentage") + '% played';
  // }
  