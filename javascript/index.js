var loc = window.location.search.split("&");

if(loc[0] != ""){
    var quiz_id = loc[0].split("=").reverse()[0]; // * get quiz id
    var code = loc[1].split("=").reverse()[0]; // * get code

    $('#btn-play').text("Join now");
    $('#login').attr('method', "POST").attr('action', "php/join.php?quiz_id="+quiz_id+"&code="+code);

    $('.joining-wrapper').removeClass('d-none');
}else{
    $('.joining-wrapper').addClass('d-none');
}

$('#login').on('submit', function(e){
    if($('#username').val() == ""){
        e.preventDefault();
        $('#invalid-username span').text('Username is required.');
    }
});