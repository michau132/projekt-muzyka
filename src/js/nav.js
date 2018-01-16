function nav() {
    $('.main-hero__main-header__main-nav-list a').on('click', function (e) {
        e.preventDefault();
        const $self = $(this);
        const link = $self.attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1500)
    })

    const $header = $('.main-hero__main-header');
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 100) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    })


}

export {nav}