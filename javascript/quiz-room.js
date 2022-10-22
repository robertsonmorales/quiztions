$(document).ready(function(){
    var id = window.location.search.split("=").reverse()[0];
    $.get('data/quizes/'+id+'.json', (res) => {
        let question = res[0]; // shuffle(res)[0];
        let content = "";

        $.each(question.options[0], function(index, value) {
            let newVal = value.charAt(0).toUpperCase() + value.slice(1);
            let i = index;

            content += '<button type="button"\
                class="answer-card answer-card-'+index+' card-'+i.toLowerCase()+'\
                onclick="selectAnswer('+index+')">\
                <div class="answer-letter">\
                    <h3>'+i+'</h3>\
                </div>\
                <div class="answer-desc">\
                    <p>'+newVal+'</p>\
                </div>\
            </button>';
        });

        $('.q').text(question.question);
        $('#your-choices').html(content);
        $('#total-questions').text(res.length);
    });
});

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }

    return arra1;
}

function selectAnswer(index){
    $('.answer-card-'+index);
}