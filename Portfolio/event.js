var barbtn = document.getElementById('barbtn')
var barpop  = document.getElementById('barpop')
var abtbtn  = document.getElementById("abtbtn")
var skilbtn = document.getElementById("skilbtn")
var projbtn = document.getElementById("projbtn")
var contbtn = document.getElementById("contbtn")

barbtn.addEventListener("click",function(){
	barpop.classList.toggle("act1")
	barbtn.classList.toggle("act2")
})


abtbtn.addEventListener("click",function(){
	barpop.classList.remove("act1")
})

skilbtn.addEventListener("click",function(){
	barpop.classList.remove("act1")
})

projbtn.addEventListener("click",function(){
	barpop.classList.remove("act1")
})

contbtn.addEventListener("click",function(){
	barpop.classList.remove("act1")
})


// auto text
var typed = new Typed(".auto-text",{
	strings :["FullStack Web Developer"],
	typeSpeed : 100,
	backSpeed : 100,
	loop:true,
});

var typed = new Typed(".autotext",{
	strings :["FullStack Web Developer"],
	typeSpeed : 100,
	backSpeed : 100,
	loop:true,
});  