feather.replace();

$('button').on('click', playButtonSound);
$('a').on('click', playButtonSound);
$('input').on('click', playButtonSound);

function playButtonSound(){
    $('#btn-click')[0].play();
}

$('#btn-join').on('click', function(){
    $('.modal').css('display', 'flex');
});

$('#btn-close').on('click', function(){
    $('.modal').hide(150);
});

$('.btn-single-player').on('click', function(){
    window.location.href = "selection.html?mode=sp";
});

var code = randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
$('.btn-pvp').on('click', function(){
    window.location.href = "selection.html?mode=pvp&code="+code;
});

var username = window.location.search.split("=").reverse()[0];
$('#username').text(username);

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}