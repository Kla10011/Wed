function myFunction() {
    let number = prompt("number : ")
    console.log(number)
    let number_r = Math.floor(Math.random()*100)
    console.log(number_r)
    document.getElementById("number").innerHTML = "Your number: " + number
    document.getElementById("number_r").innerHTML = "Lottery number: " +number_r
    if(number==number_r){
        document.getElementById("result").innerHTML = "You won the lottery."
    }
    else{
        document.getElementById("result").innerHTML = "Better luck next time"
    }

}