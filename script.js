//toggle green heart
function toggleHeart(x) {
 x.classList.toggle("fa-heart-broken");
}
var y = document.getElementById("audio");

function playAudio() {
 y.play();
}
function pauseAudio() {
 y.pause();
}