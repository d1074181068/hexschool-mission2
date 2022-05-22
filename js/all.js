$(document).ready(function () {
    $('.to_top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    function showBtnCondition() {
        if ($(this).scrollTop() > 700) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);

    $('.pay_to_top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    function showBtnCondition() {
        if ($(this).scrollTop() > 700) {
            $('.pay_to_top').fadeIn();
        } else {
            $('.pay_to_top').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);

    $('.subscriber a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass();
        if ($(this).text() == '>25000位') {
            const regex2 = /\>\d{5}/;
            const match2 = $(this).text().match(regex2);
            $('.user p').text(match2[0]);
            $('.month_basic p').text('200');
            $('.month_pro p').text('1200');
        } else {
            const regex = /\d{5}/;
            const match = $(this).text().match(regex);
            $('.user p').text(match[0]);
            if (match[0] == '10000') {
                $('.month_basic p').text('600');
                $('.month_pro p').text('1600');
            } else if (match[0] == '15000') {
                $('.month_basic p').text('500');
                $('.month_pro p').text('1500');
            } else if (match[0] == '20000') {
                $('.month_basic p').text('400');
                $('.month_pro p').text('1400');
            } else if (match[0] == '25000') {
                $('.month_basic p').text('300');
                $('.month_pro p').text('1300');
            }
        }
    });

    $('.faq>ul>li').click(function () {
        $(this).find('.ans').slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('button').find('.minus').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg");
        } else {
            $(this).find('button').find('.minus').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg");
        }
    });

});