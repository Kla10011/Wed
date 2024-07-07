function myFunction() {  
    let Qrt = prompt("Quantity of products")
    let Sum = 0
    for(var i=1;i<=Qrt;i++){
        let item_price = prompt("item: "+i)
        Sum += parseInt(item_price)
        document.getElementById("Price-list").innerHTML += "Item "+ i +": "+ item_price+" bath<br>"
    }
    document.getElementById("Total-price").innerHTML = "Total-price: "+Sum +"bath"
}