function getQuizQuestions(qid){
    var id = window.location.search.split("=").reverse()[0];

    $.get('data/quizes/'+id+'.json', (res) => {
        let question = res[qid]; // shuffle(res)[index];
        let content = "";

        $.each(question.options, function(index, value) {
            let newVal = value.charAt(0).toUpperCase() + value.slice(1);
            let key = index.toString();
            let lowerKey = key.toLowerCase();

            content += '<button type="button"\
                class="answer-card card-'+lowerKey+'"\
                onclick="chooseAndValidateAnswer('+id+', `' + res[qid].id + '|' + key + '`)">\
                <div class="answer-letter">\
                    <h3>'+key+'</h3>\
                </div>\
                <div class="answer-desc">\
                    <p>'+newVal+'</p>\
                </div>\
            </button>';
        });

        $('.q').text(question.question);
        $('#your-choices').html(content);
        $('#current-question').text(qid + 1);
        $('#total-questions').text(res.length);
    });
}

/**
 * Validate answer
 * 
 * @param String id 
 * @param String answer 
 */
function chooseAndValidateAnswer(id, answer){
    let extract = answer.split('|');
    let question_id = parseInt(extract[0]);
    let option = extract[1];
    let lowerOption = option.toLowerCase();
    let q = parseInt(question_id);

    $('.answer-card').prop('disabled', true);

    $.get('data/quizes/'+id+'.json', (res) => {
        $.each(res, (index, value) => {
            if(value.id == question_id){ // * find question id
                if(value.answer == option){ // * if answer is correct
                    addPoints(); // * Add 100 points

                    $('.answer-card.card-'+lowerOption).addClass('card-success');

                    playSoundOfAnswer(true);
                }else{ // * else wrong answer
                    $('.answer-card.card-'+lowerOption).addClass('card-error');
                    $('.answer-card.card-'+value.answer.toLowerCase()).addClass('card-success');
                    
                    playSoundOfAnswer(false);
                }

                showAnswer(lowerOption, value.answer.toLowerCase());
            }
        });

        setTimeout(() => {
            if(res.length != question_id){
                getQuizQuestions(question_id++);
            }else{
                $('.scoreboard').show(50);
                $('.total-points').text($('#your-score').text());
            }
        }, 4000);
    });
}

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

/**
 * Add points if the answer is correct
 */
function addPoints(){
    let currentScore = $('#your-score').text();
    $('#your-score').text(parseInt(currentScore) + 100);
}

/**
 * Show and hightlight chosen option and correct answer
 * 
 * @param String option 
 * @param String answer 
 */
function showAnswer(option, answer){
    $('.answer-card.card-'+ option +' .answer-letter h3').text('×');
    $('.answer-card.card-'+ answer +' .answer-letter h3').text('✓');
    $('.answer-card.card-'+ answer).css('transform', 'translateY(-15px)');
}

/**
 * Play the sound base on the answer
 * 
 * @param Boolean isTrue 
 */
function playSoundOfAnswer(isTrue){
    if(isTrue){
        $('#answer').attr("src", "sounds/correct.mp3")[0].play();
    }else{
        $('#answer').attr("src", "sounds/mistake.mp3")[0].play();
    }
}

getQuizQuestions(0);