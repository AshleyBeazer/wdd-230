document.addEventListener("DOMContentLoaded", function() { 
    const yrSpan = document.querySelector('#year');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
  });
  let lastVisit = document.lastModified;
  document.getElementById("updated").textContent = "Last Updated:" + lastVisit;
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