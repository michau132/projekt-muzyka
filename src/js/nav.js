function nav() {
    $('.main-hero__main-header__main-nav-list a').on('click', function (e) {
        e.preventDefault();
        const $self = $(this);
        const link = $self.attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1500)
    })

    const $hamburger = $('.menu');
    const $header = $('.main-hero__main-header');

    $(window).on('scroll', function () {
        if($(this).scrollTop() > 100) {
            $header.addClass('sticky');
            $hamburger.css('background-color', '#000')
        } else {
            $header.removeClass('sticky');
            $hamburger.css('background-color', 'rgba(0, 0, 0, 0)')
        }
    })


    $hamburger.on('click', function () {
        if($(this).css('background-color') == 'rgba(0, 0, 0, 0)') {
            $(this).css('background-color', '#000')
        } else {
            $(this).css('background-color', 'rgba(0, 0, 0, 0)')
        }
    })
}

export {nav}