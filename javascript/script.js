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

$('.btn-close-board').on('click', function(){
    window.location.href = '/';
});

$('.btn-single-player').on('click', function(){
    window.location.href = "sp.html";
});

$('.btn-pvp').on('click', function(){
    window.location.href = "pvp.html";
});