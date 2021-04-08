$(function () {

    const apartmentSlider = $('[data-slider="slick"]');

    $(document).ready(function () {
    });

    /* Filter
    =====================*/
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat === 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat !== cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });


    /* Modal
    =====================*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        $(apartmentSlider).slick('setPosition');
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal").on("click", function () {
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });


    /* Scroll
    =====================*/
    $(function () {
        $('#scroll_bottom').click(function () {
            $('html, body').animate({scrollTop: $('#anchor').offset().top}, 600);
            return false;
        });
    });


    /* Slider: https://kenwheeler.github.io/slick/
    =====================*/
    apartmentSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".order").on("click", function (event) {
        event.preventDefault();
    });

    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find(apartmentSlider);

        currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find(apartmentSlider);

        currentSlider.slick("slickNext");
    });

});

