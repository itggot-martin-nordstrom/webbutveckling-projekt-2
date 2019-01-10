function SidebarToggle(event){
    let sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("SidebarToggle")
    
    let sidebarfade = document.querySelector(".sidebar-fade")
    sidebarfade.classList.toggle("SidebarFadeToggle")
}