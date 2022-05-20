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
});