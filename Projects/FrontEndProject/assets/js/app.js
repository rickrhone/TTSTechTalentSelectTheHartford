/* Ricardo Rhone  */
/* TTS Front End Project  - recreate the wordpress.com homepage */
/* September 16 - 18, 2019  */


$(document).ready(function () {

    // Play and Pause Video
    $(".videoOuterDiv").on({
        click: function () {
            $(".sec4Video").attr("autoplay");
        },

        click: function () {
            $(".sec4Video").toggle("controls");
        }
    })

});


// Playing the Video
var x = document.getElementsByClassName(".sec4Video");

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}



let videoElem = document.getElementsByClassName("sec4Video");
let playButton = document.getElementsByClassName("videoOuterDiv");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
    try {
        await videoElem.play();
        playButton.className = "playing";
    } catch (err) {
        playButton.className = "";
    }
}

function handlePlayButton() {
    if (videoElem.paused) {
        playVideo();
    } else {
        videoElem.pause();
        playButton.className = "";
    }
}