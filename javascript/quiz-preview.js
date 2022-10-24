var extractLoc = window.location.search.split("&");
var id = extractLoc.reverse()[0].split('=').reverse()[0];

var loc = window.location.search.split("&");
var mode = loc[0].split("=").reverse()[0]; // * pvp or sp
var newCode = "";
if(loc[1] != undefined){
    if(loc[1].split("=").reverse()[1] == "code"){
        newCode = loc[1].split("=").reverse()[0]; // * get code
    }
}else{
    newCode = "";
}

if(mode == "pvp"){
    $('#btn-join-code').show();
}else{
    $('#btn-join-code').hide();
}

$.get("data/quizes.json", (res) => {
    let matchRecord = null;

    res.map((val) => {
        if(val.id == id){
            matchRecord = val;
        }
    });

    $('#selected-quiz .card-img img').attr('src', matchRecord.img).attr('alt', matchRecord.title);
    $('#selected-quiz .card-body .title').text(matchRecord.title);
    $('#selected-quiz .card-body .question').text(matchRecord.questions);

    let co = newCode == "" ? "" : "&code=" + newCode;
    let params2 = 'mode=' + mode + co + '&id='+matchRecord.id;

    $('#btn-start').data('data-url', 'quiz-room.html?'+params2);
});

$('#btn-start').on('click', function(){
    window.location.href = $(this).data('data-url');
});

$('#btn-join-code').on('click', function(){
    $('#btn-join-code span').text('Copied Successfully');

    setTimeout(() => {
        $('#btn-join-code span').text('Copy Join Code');    
    }, 2000);

    // navigator.clipboard.writeText(window.location.href);
    navigator.clipboard.writeText(window.location.origin+"/index.html?quiz_id="+id+"&code="+newCode);
});