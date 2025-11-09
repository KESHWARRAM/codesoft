var links = document.getElementsByClassName("links");
var content = document.getElementsByClassName("content");

function opentab(tabname, event) {
    for (link of links) {
        link.classList.remove("act");
    }
    for (con of content) {
        con.classList.remove("active");
    }
    event.currentTarget.classList.add("act");
    document.getElementById(tabname).classList.add("active");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwW2IjvxrIDuGdTvD4lAghcLmldn1Mi6vyE-LPBuSx3K-44rXUco_E2gyA-HwvBUxpcxg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
