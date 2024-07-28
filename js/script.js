$('.burger_button, .burger_close, .burger a, .burger button').click(() => {
    $('.burger').toggleClass('flex');
});
$(window).on( "resize", () => {
    $('.burger').removeClass('flex');
});

$(document).on('scroll DOMContentLoaded', function() {
    if($(this).scrollTop() + window.innerHeight >= $('.counters_items').offset().top) {
        $('.counters_item span').each(function() {
            let i = 1,
                num = $(this).data('num'),
                that = $(this),
                int = setInterval(function() {
                    if (i <= num && i > that.html()) {
                        that.html(i);
                    } else if (i > num) {
                        that.html(num);
                    } else {
                        clearInterval(int);
                    }
                    num > 2000 ? i = i + 3 : i++;
                }, 5000 / num);
        });
    }
});
