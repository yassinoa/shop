var plusb=document.querySelectorAll(".plus")
var minusb=document.querySelectorAll(".minus")
var sup=document.querySelectorAll(".delete")
var love=document.querySelectorAll(".fa-heart")
function inc(e){
  var cible=e.target
  var divv= cible.parentElement
  var p=divv.querySelector("p")
  var quantity= Number(p.innerHTML)
  quantity++
  p.innerHTML=quantity
}
function dec(e){
  var cible=e.target
  var divv=cible.parentElement
  var p=divv.querySelector("p")
  var quantity=Number(p.innerHTML)
  if(quantity>0)
  quantity--
  p.innerHTML=quantity
}
function price(e){
  var cible=e.target
  var divv=cible.parentElement
  var trprice=cible.parentElement.parentElement.parentElement.querySelector(".price")
  var trunitPrice=cible.parentElement.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  var quantity=divv.querySelector("p").innerHTML
  trprice.innerHTML=Number(quantity)*Number(trunitPrice)
 
}
function priceAll(e){
  var cible=e.target
  var price=document.querySelectorAll(".price")
  var sum=0
  for(var j=0;j<price.length;j++){
    sum+=Number(price[j].innerHTML)
  }
  document.querySelector("#total").innerHTML=sum
}

function supp(e){
var cible=e.target
cible.parentElement.parentElement.parentElement.parentElement.remove()


var price=document.querySelectorAll(".price")
  var sum=0
  for(var j=0;j<price.length;j++){
    sum+=Number(price[j].innerHTML)
  }
  document.querySelector("#total").innerHTML=sum
}
function lover (e){
var cible=e.target
if(cible.style.color == 'red'){
  cible.style.color = "";
}else
cible.style.color = 'red';
}

for(var i=0;i<plusb.length;i++){
plusb[i].addEventListener("click",inc)

minusb[i].addEventListener("click",dec)

plusb[i].addEventListener("click",price)
minusb[i].addEventListener("click",price)

plusb[i].addEventListener("click",priceAll)
minusb[i].addEventListener("click",priceAll)

sup[i].addEventListener("click",supp)
love[i].addEventListener("click",lover)

}