function myFunction() {  
    let score = prompt("Your score")
    if(score>=80){
        document.getElementById("result").innerHTML = "You got grade A "
    }
    else if(score>=70){
        document.getElementById("result").innerHTML = "You got grade B "
    }
    else if(score>=60){
        document.getElementById("result").innerHTML = "You got grade C "
    }
    else if(score>=50){
        document.getElementById("result").innerHTML = "You got grade D "
    }
    else{
        document.getElementById("result").innerHTML = "You got grade F "
    }
}