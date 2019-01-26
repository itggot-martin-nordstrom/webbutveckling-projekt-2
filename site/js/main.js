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

    // för att kunna lägga in värdena på start och end flera gånger
    document.querySelector("#get-here-start").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start1").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end1").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start2").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end2").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start3").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end3").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start4").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end4").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start5").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end5").innerHTML = window.localStorage.getItem("end");
    document.querySelector("#get-here-start6").innerHTML = window.localStorage.getItem("start");
    document.querySelector("#get-here-end6").innerHTML = window.localStorage.getItem("end");
}

console.log("SCRIPT LOADED")

// för att kunna lägga in värdena på start och end flera gånger
document.querySelector("#get-here-start").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start1").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end1").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start2").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end2").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start3").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end3").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start4").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end4").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-end4").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start5").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end5").innerHTML = window.localStorage.getItem("end");
document.querySelector("#get-here-start6").innerHTML = window.localStorage.getItem("start");
document.querySelector("#get-here-end6").innerHTML = window.localStorage.getItem("end");

