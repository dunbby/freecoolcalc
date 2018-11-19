$(document).ready(function(){
    $("#operator_clear_all").click(function(){
        $("#history").fadeOut(0);
        $("#history").text("0");
        $("#history").fadeIn(300);
    });
});