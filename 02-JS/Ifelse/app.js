function myFunction(){
    let age = prompt("Your age")
    if(age>=13){
        // console.log("hello")
        document.getElementById("Age>13").innerHTML = "Hey Bro!"
    }
    else{
        // console.log("You are chlid")
        // document.getElementById("Age>13").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-sRuLfr22BE?si=FzS0yOihGCvQPFVD\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
        document.getElementById("Age>13").innerHTML = "You are chlid<br>" + "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/-sRuLfr22BE?si=FzS0yOihGCvQPFVD\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    }
}
