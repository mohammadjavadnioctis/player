
let video = document.getElementById('gossVideo1');
var thecanvas = document.getElementById('canvasId1');



video.addEventListener('loadeddata', function () {
 console.log('video is loaded')
  let i = Math.floor((100 / player1.duration) * player1.currentTime)
  console.log('this is i',i)
  this.currentTime = i;

function generateThumbnail(i) {     
  //generate thumbnail URL data
  var context = thecanvas.getContext('2d');
  context.drawImage(video, 0, 0, 220, 150);
   var dataURL = thecanvas.toDataURL();

  //create img
  var img = document.createElement('img');
  img.setAttribute('src', dataURL);

  //append img in container div
  document.getElementById('thumbnailContainer').appendChild(img);
}
video.addEventListener('seeked', function() {

    // now video has seeked and current frames will show
    // at the time as we expect
    generateThumbnail(i);
  
    // when frame is captured, increase here by 5 seconds
    i += 5;
  
    // if we are not past end, seek to next interval
    if (i <= this.duration) {
      // this will trigger another seeked event
      this.currentTime = i;
    }
    else {
      // Done!, next action
    }
  });




});


// video.addEventListener('loadeddata', function() {
//     var duration = video.duration;
//     var i = 0;

//     var interval = setInterval(function() {
//         video.currentTime = i;
//         generateThumbnail(i);
//         i = i+5;
//         if (i > duration) clearInterval(interval);
//     }, 300);
// });

// function generateThumbnail(i) {     
//     //generate thumbnail URL data
//     var context = thecanvas.getContext('2d');
//     context.drawImage(video, 0, 0, 220, 150);
//      var dataURL = thecanvas.toDataURL();

//     //create img
//     var img = document.createElement('img');
//     img.setAttribute('src', dataURL);

//     //append img in container div
//     document.getElementById('thumbnailContainer').appendChild(img);
// }


// var video = document.getElementById("video"); // added for clarity: this is needed
// var i = 20;
// let i = Math.floor((100 / player1.duration) * player1.currentTime)
// video.addEventListener('loadeddata', function() {
//     this.currentTime = i;
// });


// video.addEventListener('seeked', function() {

//     // now video has seeked and current frames will show
//     // at the time as we expect
//     generateThumbnail(i);
  
//     // when frame is captured, increase here by 5 seconds
//     i += 5;
  
//     // if we are not past end, seek to next interval
//     if (i <= this.duration) {
//       // this will trigger another seeked event
//       this.currentTime = i;
//     }
//     else {
//       // Done!, next action
//     }
//   });