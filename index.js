var button=document.querySelectorAll(".rate")
var submit=document.querySelector(".btn")
var card1=document.querySelector("#main")
var card2=document.querySelector(".second")
var rating=document.querySelector(".num");
var ele
submit.addEventListener("click",function (){
  card1.classList.add("hide")
  card2.classList.remove("hide")

  rating.innerHTML=ele;

})

for (var i=0;i<6;i++){

  button[i].addEventListener("click",color_change);

}

function color_change(event){
  event.target.style.backgroundColor="grey";
  event.target.color="white";
 ele=event.target.innerHTML;
}
