$('#allbtn').on('click', function (e) { showAll() });
$('#currbtn').on('click', function (e) { showOne("current"); });
$('#codebtn').on('click', function (e) { showOne("computer"); });
$('#musbtn').on('click', function (e) { showOne("musical"); });

function showAll(){
    $(".post").show();
}

function showOne(classname){
    showAll();
    $(".post").not("."+classname).hide();
}