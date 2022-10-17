$('button').on('click', playButtonSound);

$('a').on('click', playButtonSound);

$('input').on('click', playButtonSound);

function playButtonSound(){
    $('#btn-click')[0].play();
}