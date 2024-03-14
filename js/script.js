/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("bottomBar").style.width = "100%";
  document.getElementById("main").style.marginBottom = "400px";
  document.getElementById("bottomBar").style.display = " inline-flex";
  document.getElementById("songBar").style.display = "none";
  document.getElementById("favBar").style.display = "none";

}
function openSongNav() {
  document.getElementById("songBar").style.width = "100%";
  document.getElementById("main").style.marginBottom = "400px";
  document.getElementById("songBar").style.display = " inline-flex";
  document.getElementById("bottomBar").style.display = "none";
  document.getElementById("favBar").style.display = "none";
}
function openFavNav() {
  document.getElementById("favBar").style.width = "100%";
  document.getElementById("main").style.marginBottom = "400px";
  document.getElementById("favBar").style.display = " inline-flex";
  document.getElementById("songBar").style.display = "none";
  document.getElementById("bottomBar").style.display = "none";
}
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("bottomBar").style.display = "none";
  
}
function closeSongNav() {
  document.getElementById("songBar").style.display = "none";
  
}
function closeFavNav() {
  document.getElementById("favBar").style.display = "none";
  
}