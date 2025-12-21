
let textbox=document.getElementById("mytext")
let result=document.getElementById("result")
let temp
let fahrenheit =document.getElementById("tofahrenheit")
let celsius =document.getElementById("tocelsius")

function convert(){
    if(fahrenheit.checked){
        temp=Number(textbox.value)
        temp=temp*9/5+32
        result.textContent=temp
    }
    else if(celsius.checked){
        temp=Number(textbox.value)
        temp=(temp -32)*5/9
        result.textContent=temp

    }
    else{
       result.textContent="SELECT A UNIT";
    }


}
