$.get("data/quizes.json", (res) => {
    let extractLoc = window.location.search.split("&");
    let id = extractLoc[0].split('=').reverse()[0];
    let matchRecord = null;


    res.map((val) => {
        if(val.id == id){
            matchRecord = val;
        }
    });

    $('#selected-quiz .card-img img').attr('src', matchRecord.img).attr('alt', matchRecord.title);
    $('#selected-quiz .card-body .title').text(matchRecord.title);
    $('#selected-quiz .card-body .question').text(matchRecord.questions);

    $('#btn-start').attr('href', 'quiz-room.html?id='+matchRecord.id);
});