(function ($) {
    $(function () {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                /**
                 *  These parameters control the functionality of jCarousel
                 */
                if (width >= 600) {
                    width = width / 5;
                } else if (width >= 480) {
                    //width = width / 2;
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .on('click', function (e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function (page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });


        var jcarousel_image_height = $('.jcarousel ul li img').height();

        //console.log('height: ' + jcarousel_image_height);

        $('.jcarousel-arrow-wrap a i').css({'line-height':jcarousel_image_height + 'px'})
    });

    /**
     *  Change line height of navigation arrows
     */

    //var jcarousel_image_height = $('.jcarousel ul li img').height();
    //
    //console.log('height: ' + jcarousel_image_height);
    //
    //$('.jcarousel-arrow-wrap a i').css({'line-height':jcarousel_image_height + 'px'})


})(jQuery);