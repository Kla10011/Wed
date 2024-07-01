function myFunction() {
    let number = prompt("number : ")
    console.log(number)
    var number_r = Math.floor(Math.random()*100)
    console.log(number_r)
    document.getElementById("number").innerHTML = number
    document.getElementById("result").innerHTML = number_r
}