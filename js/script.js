
var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var addprice = document.querySelector("#addprice")
var nameProduct = document.querySelector("name")
var totalPrice =  0 ;

allProducts.forEach(function (item){
     item.onclick = function (){
        
        totalPrice +=  parseInt(item.getAttribute("price"))  
        content.innerHTML += item.textContent + "/ " ;
        
        if (content.innerHTML !=""){
            btn.style.display = "block";
         }
     }
})
var a = btn.onclick = function(){
    parseInt (addprice.innerHTML += (totalPrice))
    if (a!=0){
        addprice.innerHTML = totalPrice
    }
}

