
  // Get a handle to the player1
var player1       = document.getElementById('gossVideo1');
var btnPlayPause = document.getElementById('btnPlayPause');
var btnMute      = document.getElementById('btnMute');
var progressBar1  = document.getElementById('progress-bar1');
//volumeBar    = document.getElementById('volume-bar');
var canvas1 = document.getElementById('canvasId1');

// var videoPercentage2 = sessionStorage.getItem("Video2WatchPercentage");
// console.log(videoPercentage2);

document.getElementById('btnFullScreen1').enabled = true;
player1.addEventListener('timeupdate', updateprogressBar1, false);
player1.addEventListener('play', function() {
        canvas1.style.display = 'block';
        var PlayButton = document.getElementById("PlayButton1");
          PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-pause" aria-hidden="true"></i> &nbsp; Keep Watching `;
}, false);

player1.addEventListener('pause', function() {
      canvas1.style.display = 'block';
      draw1(player1, canvas1);
      var PlayButton = document.getElementById("PlayButton1");
      PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
}, false);

player1.addEventListener('ended', function() { 
  var PlayButton = document.getElementById("PlayButton1");
      PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-redo-alt" aria-hidden="true"></i> &nbsp; Watch Again`;
  
  this.pause(); }, false);	

function playPauseVideo1() {
  var element = document.getElementById("PlayButtonIcon1");
if (player1.paused || player1.ended) {
  //debugger;
  var isClassExist = hasClass(element,"fa-play");
  if(isClassExist === true){
    removeClass(element,"fa-play");
    addClass(element,"fa-pause");
    var PlayButton = document.getElementById("PlayButton1");
      PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-pause" aria-hidden="true"></i> Watching `;
    
  }
  player1.play();
  }
  else {
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton1");
      PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
    player1.pause();
  }
}

function updateprogressBar1() {
  var percentage = Math.floor((100 / player1.duration) * player1.currentTime);
  progressBar1.value = percentage;
  progressBar1.innerHTML = percentage + '% played';
}

function pauseVid1() { 
  //debugger;
  var percentage = Math.floor((100 / player1.duration) * player1.currentTime);
  if(percentage > 0 && percentage <100){
    console.log(this)
    var element = document.getElementById("PlayButtonIcon1");
    var isClassExist = hasClass(element,"fa-pause");
    if(isClassExist === true){
      removeClass(element,"fa-pause");
      addClass(element,"fa-play");
      var PlayButton = document.getElementById("PlayButton1");
      PlayButton.innerHTML = `<i id="PlayButtonIcon1" class="fas fa-play" aria-hidden="true"></i> Continue Watching `;
    }
  }
  
  player1.pause(); 
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
function toggleFullScreen1() {
    

    if (player1.requestFullscreen)
        if (document.fullScreenElement) {
            document.cancelFullScreen();
        } else {
            player1.requestFullscreen();
        }
        else if (player1.msRequestFullscreen)
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            player1.msRequestFullscreen();
        }
        else if (player1.mozRequestFullScreen)
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            player1.mozRequestFullScreen();
        }
        else if (player1.webkitRequestFullscreen)
        if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen();
        } else {
            player1.webkitRequestFullscreen();
        }
    else {
        alert("Fullscreen API is not supported");
        
    }
  }

  function draw1(video, canvas) {
    console.log('this is coming from VideoForLofeJs1 page2',video)
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  }

  updateVideo2TimeWithBar();
function updateVideo2TimeWithBar() {
  var player1 = document.getElementById('gossVideo1');
  progressBar.value = localStorage.getItem("Video2WatchPercentage");
  progressBar.innerHTML = localStorage.getItem("Video2WatchPercentage") + '% played';
  player1.currentTime = parseFloat(localStorage.getItem("Video2EndedTime"));
}
 

  // updateProgressBarVideo2();
  
  // function updateProgressBarVideo2() {
  //   debugger;
  //   var progressBarVideo2  = document.getElementById('progress-barVideo2');
  //   progressBarVideo2.value = sessionStorage.getItem("Video2WatchPercentage");
  //   progressBarVideo2.innerHTML = sessionStorage.getItem("Video2WatchPercentage") + '% played';
  // }



  
  