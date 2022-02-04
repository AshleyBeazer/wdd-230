document.addEventListener("DOMContentLoaded", function() { 
    const yrSpan = document.querySelector('#year');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
  });
  let lastVisit = document.lastModified;
  const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
window.onload = function() {
    function toggleMenu() {
        document.getElementById('Nav').classList.toggle('open');
        document.getElementById('hamburgerMenu').classList.toggle('open');
    }
    const x = document.getElementById('hamburgerMenu');
    x.onclick = toggleMenu;
}
let date=new Date();
let day=date.getDay();
let displayDate = new Array(7);
displayDate[0] = "Sunday";
displayDate[1] = "Monday";
displayDate[2] = "Tuesday";
dispalyDate[3] = "Wednesday";
displayDate[4] = "Thursday";
displayDate[5] = "Friday";
displayDate[6] = "Saturday";
if (displayDate[day.getDay()]==="Monday" || (displayDate[day.getDay()]==="Tuesday")){
    document.getElementsByClassName('my_banner').style.display = "block";
}
else {document.getElementsByClassName('my_banner').style.display = "none";}