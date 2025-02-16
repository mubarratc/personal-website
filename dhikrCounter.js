let visitorCounterEl = document.getElementById("visitor-count");
let visitorCount = 0;
window.addEventListener("load", function () {
  visitorCount += visitorCount + 1;
  console.log(visitorCount);
  loadLocal();
  genMessage();
});

function loadLocal() {
  localStorage.setItem("visitorCount", visitorCount);
}

function getLocal() {
  localStorage.getItem("visitorCount", visitorCount);
}

function genMessage() {
  let visitorMessage = `Your Visits: ${visitorCount}`;
  visitorCounterEl.textContent = visitorMessage;
}
// 1) Create a visitor counter that logs the amount of personal visits
// 2) Figure out a better color scheme and provide enough margin in the desktop version of this website.
// 3) make the website mobile compatible.
// 4) Successfully link to a different page that host a list of all of my essays
// 5) Create a CMS system for all of my essays
