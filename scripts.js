document.getElementById('digit_zero').addEventListener('click', digit_0);
document.getElementById('digit_one').addEventListener('click', digit_1);
document.getElementById('digit_two').addEventListener('click', digit_2);
document.getElementById('digit_three').addEventListener('click', digit_3);
document.getElementById('digit_four').addEventListener('click', digit_4);
document.getElementById('digit_five').addEventListener('click', digit_5);
document.getElementById('digit_six').addEventListener('click', digit_6);
document.getElementById('digit_seven').addEventListener('click', digit_7);
document.getElementById('digit_eight').addEventListener('click', digit_8);
document.getElementById('digit_nine').addEventListener('click', digit_9);
document.getElementById('digit_nine').addEventListener('click', digit_9);
document.getElementById('operator_plus').addEventListener('click', plus);
document.getElementById('operator_minus').addEventListener('click', minus);
document.getElementById('operator_multiplication').addEventListener('click', multiplication);
document.getElementById('operator_segmentation').addEventListener('click', segmentation);
document.getElementById('operator_equal').addEventListener('click', equal);
document.getElementById('operator_point').addEventListener('click', point);
document.getElementById('operator_clear_all').addEventListener('click', clear_all);

var button_plus=0;
var button_minus=0;
var button_multiplication=0;
var button_segmentation=0;
var first_numbers=0;
var second_numbers=0;
var result=0;
var history=0;

function clear_all()
{
    document.getElementById("display_result").value="";
    button_plus=0;
    button_minus=0;
    button_multiplication=0;
    button_segmentation=0;
    first_numbers=0;
    second_numbers=0;
    result=0;
    history=0;
    //document.getElementById("history").innerHTML="0";
}
function segmentation()
{
    document.getElementById("display_result").value+="/";
    first_numbers = document.getElementById("display_result").value;
    document.getElementById("history").innerHTML=first_numbers;
    first_numbers = first_numbers.substring(0, first_numbers.length - 1);
    document.getElementById("display_result").value="";
    button_segmentation=1;
}
function multiplication()
{
    document.getElementById("display_result").value+="*";
    first_numbers = document.getElementById("display_result").value;
    document.getElementById("history").innerHTML=first_numbers;
    first_numbers = first_numbers.substring(0, first_numbers.length - 1);
    document.getElementById("display_result").value="";
    button_multiplication=1;
}
function minus()
{
    document.getElementById("display_result").value+="-";
    first_numbers = document.getElementById("display_result").value;
    document.getElementById("history").innerHTML=first_numbers;
    first_numbers = first_numbers.substring(0, first_numbers.length - 1);
    document.getElementById("display_result").value="";
    button_minus=1;
}
function plus()
{
    document.getElementById("display_result").value+="+";
    first_numbers = document.getElementById("display_result").value;
    document.getElementById("history").innerHTML=first_numbers;
    first_numbers = first_numbers.substring(0, first_numbers.length - 1);
    document.getElementById("display_result").value="";
    button_plus=1;
}
function equal()
{
    second_numbers = document.getElementById("display_result").value;
    if (button_plus==1)
        {
        document.getElementById("history").innerHTML=first_numbers+"+"+second_numbers+"=";
        second_numbers = parseFloat(document.getElementById("display_result").value);
        document.getElementById("display_result").value="";
        result=second_numbers+parseFloat(first_numbers);
        document.getElementById("display_result").value+=result;
        button_plus=0;
        button_minus=0;
        button_multiplication=0;
        button_segmentation=0;
        }
    if (button_minus==1)
        {  
        document.getElementById("history").innerHTML=first_numbers+"-"+second_numbers+"=";
        second_numbers = parseFloat(document.getElementById("display_result").value);
        document.getElementById("display_result").value="";
        result=second_numbers-parseFloat(first_numbers);
        document.getElementById("display_result").value+=result*(-1); 
        button_plus=0;
        button_minus=0;
        button_multiplication=0;
        button_segmentation=0;
        }
    if (button_multiplication==1)
        {
        document.getElementById("history").innerHTML=first_numbers+"*"+second_numbers+"=";
        second_numbers = parseFloat(document.getElementById("display_result").value);
        document.getElementById("display_result").value="";
        result=second_numbers*parseFloat(first_numbers);
        document.getElementById("display_result").value+=result; 
        button_plus=0;
        button_minus=0;
        button_multiplication=0;
        button_segmentation=0;
        }
    if (button_segmentation==1)
        {
        document.getElementById("history").innerHTML=first_numbers+"/"+second_numbers+"=";
        second_numbers = parseFloat(document.getElementById("display_result").value);
        document.getElementById("display_result").value="";
        result=parseFloat(first_numbers)/second_numbers;
        document.getElementById("display_result").value+=result; 
        button_plus=0;
        button_minus=0;
        button_multiplication=0;
        button_segmentation=0;
        }
}

function point()
{
    document.getElementById("display_result").value+=".";
}

function digit_0()
{
    document.getElementById("display_result").value+="0";
}
function digit_1()
{
    document.getElementById("display_result").value+="1";
}
function digit_2()
{
    document.getElementById("display_result").value+="2";
}
function digit_3()
{
    document.getElementById("display_result").value+="3";
}
function digit_4()
{
    document.getElementById("display_result").value+="4";
}
function digit_5()
{
    document.getElementById("display_result").value+="5";
}
function digit_6()
{
    document.getElementById("display_result").value+="6";
}
function digit_7()
{
    document.getElementById("display_result").value+="7";
}
function digit_8()
{
    document.getElementById("display_result").value+="8";
}
function digit_9()
{
    document.getElementById("display_result").value+="9";
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 46) {
        document.getElementById("display_result").value="";
        button_plus=0;
        button_minus=0;
        button_multiplication=0;
        button_segmentation=0;
        first_numbers=0;
        second_numbers=0;
        result=0;
    }
    else if(event.keyCode == 48) {
        document.getElementById("display_result").value+="0";
    }
    else if(event.keyCode == 49) {
        document.getElementById("display_result").value+="1";
    }
    else if(event.keyCode == 50) {
        document.getElementById("display_result").value+="2";
    }
    else if(event.keyCode == 51) {
        document.getElementById("display_result").value+="3";
    }
    else if(event.keyCode == 52) {
        document.getElementById("display_result").value+="4";
    }
    else if(event.keyCode == 53) {
        document.getElementById("display_result").value+="5";
    }
    else if(event.keyCode == 54) {
        document.getElementById("display_result").value+="6";
    }
    else if(event.keyCode == 55) {
        document.getElementById("display_result").value+="7";
    }
    else if(event.keyCode == 56) {
        document.getElementById("display_result").value+="8";
    }
    else if(event.keyCode == 57) {
        document.getElementById("display_result").value+="9";
    }
    else if(event.keyCode == 190) {
        document.getElementById("display_result").value+=".";
    }
    else if(event.keyCode == 191) {
        document.getElementById("display_result").value+=".";
    }
    else if(event.keyCode == 96) {
        document.getElementById("display_result").value+="0";
    }
    else if(event.keyCode == 97) {
        document.getElementById("display_result").value+="1";
    }
    else if(event.keyCode == 98) {
        document.getElementById("display_result").value+="2";
    }
    else if(event.keyCode == 99) {
        document.getElementById("display_result").value+="3";
    }
    else if(event.keyCode == 100) {
        document.getElementById("display_result").value+="4";
    }
    else if(event.keyCode == 101) {
        document.getElementById("display_result").value+="5";
    }
    else if(event.keyCode == 102) {
        document.getElementById("display_result").value+="6";
    }
    else if(event.keyCode == 103) {
        document.getElementById("display_result").value+="7";
    }
    else if(event.keyCode = 104) {
        document.getElementById("display_result").value+="8";
    }
    else if(event.keyCode == 105) {
        document.getElementById("display_result").value+="9";
    }
    
});
