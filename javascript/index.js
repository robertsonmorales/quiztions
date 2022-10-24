var loc = window.location.search.split("&");
// var quiz_id = loc[0].split("=").reverse()[0]; // * get quiz id
// var code = loc[1].split("=").reverse()[0]; // * get code

console.log()
if(loc[0] != ""){
    $('#btn-play').text("Join now");
    $('#login').attr('method', "POST").attr('action', "php/join.php");
}else{
    alert('play')
}

$('#login').on('submit', function(e){
    if($('#username').val() == ""){
        e.preventDefault();
        $('#invalid-username span').text('Username is required.');
    }
});