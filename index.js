$(document).on("click","button.icon",function (){
    $(this).css("color","red");
    $(this).parent("li").remove();
    
});

$("button").on("click", function () {
    var data=$("#text-filed").val();
    var x = "<li>" + data +  "<button type='submit' class='icon'><i class='fas fa-trash-alt cl '></i></button></li>";
    $("ul").append(x);
    $("#text-filled").val('');
});

