$('button').on('click', playButtonSound);

$('a').on('click', playButtonSound);

$('input').on('click', playButtonSound);

function playButtonSound(){
    $('#btn-click')[0].play();
}

$('#btn-join').on('click', function(){
    $('.modal').css('display', 'flex');
});
/**
 * Modal 
 */

$('#btn-close').on('click', function(){
    $('.modal').hide(150);
});

$('.card').on('click', function(){
    window.location.href = 'subject-preview.html';
});