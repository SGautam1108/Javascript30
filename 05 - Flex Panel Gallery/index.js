const panels = document.querySelectorAll(".panel");

const panelOpen = function() {
    this.classList.toggle("open");
}

const panelOpenActive = function(e){
    if(e.propertyName !== "font-size") return;
    this.classList.toggle("open-active");
}

panels.forEach(panel =>{
    panel.addEventListener("click", panelOpen);
    panel.addEventListener("transitionend", panelOpenActive);
})