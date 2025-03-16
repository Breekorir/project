
const openMenuButton=document.querySelector("#inc");
//openMenuButton.style.backgroundColor = "orange"
openMenuButton.addEventListener("click", ()=>{
    console.log("Opening Menu!!!");
    document.querySelector("#mobile-menu").style.display="flex"
    //document.querySelector("#mobile-menu").classList.add("opened-nav")

})

const closeMenuButton=document.querySelector("#ind");
closeMenuButton.addEventListener("click", ()=>{
    console.log("Closing Menu!!!");
   document.querySelector("#mobile-menu").style.display="none"
   //document.querySelector("#mobile-menu").classList.remove("opened-nav")

})

