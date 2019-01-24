function SidebarToggle(event){
    let sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("SidebarToggle")
    
    let sidebarfade = document.querySelector(".sidebar-fade")
    sidebarfade.classList.toggle("SidebarFadeToggle")
}

function SaveItems(){
    var start = document.querySelector("#startLocation");
    window.localStorage.setItem("start", start.value);
    var end = document.querySelector("#endLocation");
    window.localStorage.setItem("end", end.value);

    document.querySelector("#get-here-start").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end").innerHTML = window.localStorage.getItem("end");
}

console.log("SCRIPT LOADED")


document.querySelector("#get-here-start").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end").innerHTML = window.localStorage.getItem("end");

