$('.burger_button, .burger_close, .burger a, .burger button').click(() => {
    $('.burger').toggleClass('flex');
});
$(window).on( "resize", () => {
    $('.burger').removeClass('flex');
});

$('input[name="phone"]').mask("+375 (99) 999-99-99");

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

if (document.querySelector('.consult') != null) {
    modal('[data-modal]', 'data-close', '.consult');
    modal('[data-thanks]', 'data-close', '.thanks');
}
if (document.querySelector('.callback') != null) {
    modal('[data-callback]', 'data-close', '.callback');
}

$("form").submit(function (event) {
    event.preventDefault();
    let name = event.target.classList.value.slice(0, -5);
    let formData = new FormData(document.querySelector(`.${name}_form`));
    sendPhp(name, formData);
});

function sendPhp(name, data) {
    $.ajax({
        url: `./php/send.php`,
        type: 'POST',
        cache: false,
        data: data,
        dataType: 'html',
        processData: false,
        contentType: false,
        success: function (data) {
            $(`.${name}_form`).trigger('reset');
            if (name != 'contacts') {
                closeModal(`.${name}`)
            }
            openModal('.thanks');
            setTimeout(function(){
                closeModal('.thanks');
            }, 6000)
        }
    });
}
