let visitorCounterEl = document.getElementById("visitor-count"); //Assigned the contents of visitor count element in the HTML file to the visitorCounterEL

function loadLocal(count) {
  localStorage.setItem("visitorCount", count);
} //created a function that loads visitor count into local storage. This function takes in a parameter for the value

function genMessage(count) {
  let visitorMessage = `Your Visits: ${count}`;
  visitorCounterEl.textContent = visitorMessage;
} //created a function that generates the message via the .textContent method. This function takes in a parameter for the actual count

window.addEventListener("load", function () {
  //created an event listener that initiates whenever the page is loaded and run the function with the actions below
  let visitorCount = JSON.parse(localStorage.getItem("visitorCount")); //Decared a variable called visitorCount with the value of K/VP of the same name in local storage
  visitorCount = visitorCount + 1; //Incremented visitorCount by 1 when the page loads
  loadLocal(visitorCount); //run the localLocal function, which replaces the previous value of the visitorCount key in local storage
  genMessage(visitorCount); //generate the message that will be seen on the frontend of the visitorCount
});
// 1) Create a visitor counter that logs the amount of personal visits ✅
// 2) Figure out a better color scheme and provide enough margin in the desktop version of this website.
// 3) make the website mobile compatible.
// 4) Successfully link to a different page that host a list of all of my essays ✅
// 5) Create a CMS system for all of my essays
