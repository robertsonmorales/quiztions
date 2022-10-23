$(document).ready(function(){
    $.get("data/subjects.json", (res) => {
        let id = window.location.search.split("=").reverse()[0];
        let content = '';
        let subj = res;
    
        $.each(subj, function(index, value){
            let isActive = (index == id - 1) ? "active" : "";
            content += '<li class="nav-item">\
                <a class="nav-link ' + isActive + '" href="sp.html?subject_id='+value.id+'">'+value.name+'</a>\
            </li>';
        });
    
        $('#subjects').html(content);

        $.get("data/quizes.json", function(resp) {
            let content1 = '';
            let quizes = resp;
            let quizNull = [];

            $.each(quizes, function(index, value){
                if(value.subject_id == id){
                    quizNull.push(0);
                    content1 += '<a href="quiz-preview.html?id='+value.id+'" class="card">\
                        <div class="card-img">\
                            <img src="'+value.img+'" \
                                alt="'+value.title+'"\
                                width="100">\
                        </div>\
                        <div class="card-body">\
                            <h3>'+value.title+'</h3>\
                            <div class="badge">\
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                    <path d="M11.9999 3C10.7999 3 9.5999 3.6 8.9999 4.7C8.40111 4.54669 7.77292 4.55015 7.17585 4.71003C6.57878 4.86991 6.03292 5.18082 5.59086 5.61284C5.1488 6.04486 4.82541 6.58342 4.65185 7.17666C4.47829 7.7699 4.4604 8.39784 4.5999 9C3.5999 9.6 2.8999 10.8 2.8999 12C2.8999 13.2 3.5999 14.4 4.5999 15C4.2999 16.2 4.5999 17.5 5.5999 18.4C6.3999 19.2 7.6999 19.6 8.8999 19.4C9.4999 20.4 10.6999 21 11.8999 21C13.0999 21 14.2999 20.4 14.8999 19.3C16.0999 19.6 17.3999 19.3 18.2999 18.3C19.0999 17.5 19.4999 16.3 19.2999 15C20.2999 14.4 20.8999 13.2 20.8999 12C20.8999 10.8 20.2999 9.6 19.1999 9C19.4999 7.8 19.1999 6.5 18.1999 5.6C17.7724 5.17793 17.2485 4.86631 16.6735 4.69208C16.0986 4.51785 15.4898 4.48624 14.8999 4.6C14.2999 3.6 13.0999 3 11.8999 3H11.9999Z" fill="#34D49D"/>\
                                    <path d="M9 12L11 14L15 10" stroke="#F4F5FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
                                </svg>\
                                <span>'+value.questions+' questions</span>\
                            </div>\
                        </div>\
                    </a>';
                }else{
                    quizNull.push(1);
                }
            });

            let isEmpty = quizNull.every(q => q == 1);
            if(isEmpty){
                content1 = '<div class="text-muted">\
                    <p class="margin-l-2">No quiz here yet.</p>\
                </div>';
            }
        
            $('#quizes').html(content1);
        });
    });
});