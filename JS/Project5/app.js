function myFunction() {  
    let round = prompt("How many rounds will you play")
    for(var i=1;i<=round;i++){
        var your_ans = prompt("Head or Tail: "+i).toLowerCase()
        var random_ans = ""
        if(Math.floor(Math.random()*10)<=4) {
            random_ans = "head"
        }
        else{
            random_ans = "tail"
        }
        if(your_ans == random_ans){
            alert("You win")
        }
        else{
            alert("You lost")
        }
        console.log(your_ans +" "+random_ans)
    }
}
