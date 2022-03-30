const sidebarBtn = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".sidebar");

const sidebarView = ()=>{
    sidebarBtn.addEventListener("click", ()=>{
       sideBar.style.left = 0;
    })
}
sidebarView();