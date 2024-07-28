$('.burger_button, .burger_close, .burger a, .burger button').click(() => {
    $('.burger').toggleClass('flex');
});
$(window).on( "resize", () => {
    $('.burger').removeClass('flex');
});
