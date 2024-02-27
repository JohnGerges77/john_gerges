



let color_switch = document.querySelector('.color-switch');
color_switch.addEventListener("click",()=>{
document.querySelector(".style").classList.toggle("open")

})

let home = document.querySelector('.home');
home.addEventListener("click",()=>{
document.querySelector(".style").classList.remove("open")

})
let about = document.querySelector('.about');
about.addEventListener("click",()=>{
document.querySelector(".style").classList.remove("open")

})
let services = document.querySelector('.services');
services.addEventListener("click",()=>{
document.querySelector(".style").classList.remove("open")

})
let portfolio = document.querySelector('.portfolio');
portfolio.addEventListener("click",()=>{
document.querySelector(".style").classList.remove("open")

})
let contact = document.querySelector('.contact');
contact.addEventListener("click",()=>{
document.querySelector(".style").classList.remove("open")

})



/*light mood*/
const light = document.querySelector(".dark")
light.addEventListener("click",()=>{
light.querySelector("i").classList.toggle("fa-sun")
light.querySelector("i").classList.toggle("fa-moon")
document.body.classList.toggle("Lmood")
})

window.addEventListener("load",()=>{
if(document.body.classList.contains("Lmood"))
{
    light.querySelector("i").classList.add("fa-moon")
    
}
else
light.querySelector("i").classList.add("fa-sun")
    
})

/*colors*/

let spans =document.querySelectorAll(".colors span")
let color1= document.querySelector(".color1")
color1.addEventListener("click",()=>{

    document.body.classList.add("orange")
    document.body.classList.remove("red","blue","green","pink")
})

let color2= document.querySelector(".color2")
color2.addEventListener("click",()=>{
   
    document.body.classList.add("red")
    document.body.classList.remove("blue","green","pink","orange")
})

let color3= document.querySelector(".color3")
color3.addEventListener("click",()=>{
    document.body.classList.add("green")
    document.body.classList.remove("blue","pink","orange","red")
})
let color4= document.querySelector(".color4")
color4.addEventListener("click",()=>{
    document.body.classList.add("blue")
    document.body.classList.remove("pink","orange","red","green")
    localStorage.setItem("b","blue")
   
})
let color5= document.querySelector(".color5")
color5.addEventListener("click",()=>{
    
    document.body.classList.add("pink")
    document.body.classList.remove("orenge","red","blue","green")
    localStorage.setItem("p","pink")

})


/*aside*/
let section = document.querySelectorAll(".section")
let allsections= section.length
let nav = document.querySelector(".nav"),
navlist= nav.querySelectorAll("li"),
numnavlist= navlist.length;
for(let i=0;i<numnavlist;i++){
    let a =navlist[i].querySelector("a")
    a.addEventListener("click",function(){
        for(let i=0 ;i<allsections;i++){
            section[i].classList.remove("back") 
        }
        for(let j=0;j<numnavlist;j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                section[j].classList.add("back")
            }
            navlist[j].querySelector("a").classList.remove("active")
            navlist[j].querySelector("i").classList.remove("active")
        }
       this.classList.add("active")
       this.querySelector("i").classList.add("active")
       showsec(this);
})
}

function showsec(element){
for(let i=0 ;i<allsections;i++){
    section[i].classList.remove("active")
   
}
let target =element.getAttribute("href").split("#")[1];
document.querySelector("#"+target).classList.toggle("active")


}
let homea=document.querySelector(".home-a")
let homei=document.querySelector(".home-i")
let abouta=document.querySelector(".about-a")
let abouti=document.querySelector(".about-i")
let btn = document.querySelector(".btn")
btn.addEventListener("click",function(){
about.classList.add("active")
abouta.classList.add("active")
abouti.classList.add("active")
homea.classList.remove("active")
homei.classList.remove("active")

})
let btn2 = document.querySelector(".btn2")
let contacta=document.querySelector(".contact-a")
let contacti=document.querySelector(".contact-i")
btn2.addEventListener("click",function(){
    contact.classList.add("active")
    abouta.classList.remove("active")
    abouti.classList.remove("active")
    contacta.classList.add("active")
    contacti.classList.add("active")
    
    })
    var typed = new Typed(".type",{
        strings:["","Web Developer","Front-End Developer","Web Designer"],
        typeSpeed:65,
        backSpeed:45,
      loop:true
            })