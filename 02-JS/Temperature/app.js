function tocelsius(fahrenheit) {  
    let value = (fahrenheit-32) *5 / 9
    return value.toFixed(2)+"℃"
}
function tofahrenheit(celsius) {  
    let value = (celsius*9) /5 +32
    return value.toFixed(2)+"℉"
}
// function display(elementId,value)
// {
//     document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
// }
function tocelsiusprogram(value){
    alert(tocelsius(value))
}
function tofahrenheitprogram(value){
    alert(tofahrenheit(value))
}
