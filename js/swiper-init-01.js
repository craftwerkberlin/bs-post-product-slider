jQuery(document).ready(function ($) {

    // Check Screen Sizes
    $(document).ready(function (e) {
        checkDesktop = window.matchMedia('(min-width: 992px)');
        checkTablet = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
        checkMobile = window.matchMedia('(max-width: 767px)');

    });

    $(document).ready(function (e) {

        if (checkMobile.matches) {
            $(window).trigger('mobile');
        } else if (checkTablet.matches) {
            $(window).trigger('tablet');
        } else {
            console.log('init desk');
            $(window).trigger('desktop');
        }

    });

    $(document).ready(function (e) {

        checkDesktop.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('desktop');
            }
        });
        checkTablet.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('tablet');
            }
        });
        checkMobile.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('mobile');
            }
        });
    });
    // Check Screen Sizes End
    

    // Init Swiper
    $(window).on('mobile', function (e) {
        if ($('.swiper-container').length > 0) { //some-slider-wrap-in
            let swiperInstances = [];
            $(".swiper-container").each(function (index, element) { //some-slider-wrap-in
                const $this = $(this);
                $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
                $this.parent().find(".swiper-pagination").addClass("pagination-" + index);
                $this.parent().find(".swiper-button-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
                $this.parent().find(".swiper-button-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
                swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)

                    // your settings ...
                    slidesPerView: '1', //'auto'
                    spaceBetween: 30,
                    navigation: {
                        prevEl: ".prev-" + index, //prev must be unique (ex: some-slider-prev)
                        nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
                    },
                    pagination: {
                        el: '.pagination-' + index,
                        type: 'bullets',
                        clickable: true
                    },

                });
            });


            swiperInstances[3].update();

            setTimeout(function () {
                for (const slider of swiperInstances) {
                    slider.update();
                }
            }, 50);
        }
    });


    $(window).on('tablet', function (e) {
        if ($('.swiper-container').length > 0) { //some-slider-wrap-in
            let swiperInstances = [];
            $(".swiper-container").each(function (index, element) { //some-slider-wrap-in
                const $this = $(this);
                $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
                $this.parent().find(".swiper-pagination").addClass("pagination-" + index);
                $this.parent().find(".swiper-button-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
                $this.parent().find(".swiper-button-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
                swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)

                    // your settings ...
                    slidesPerView: '2', //'auto'
                    spaceBetween: 30,
                    navigation: {
                        prevEl: ".prev-" + index, //prev must be unique (ex: some-slider-prev)
                        nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
                    },
                    pagination: {
                        el: '.pagination-' + index,
                        type: 'bullets',
                        clickable: true
                    },

                });
            });


            swiperInstances[3].update();

            setTimeout(function () {
                for (const slider of swiperInstances) {
                    slider.update();
                }
            }, 50);
        }
    });


    $(window).on('desktop', function (e) {
        if ($('.swiper-container').length > 0) { //some-slider-wrap-in
            let swiperInstances = [];
            $(".swiper-container").each(function (index, element) { //some-slider-wrap-in
                const $this = $(this);
                $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
                $this.parent().find(".swiper-pagination").addClass("pagination-" + index);
                $this.parent().find(".swiper-button-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
                $this.parent().find(".swiper-button-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
                swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)

                    // your settings ...
                    slidesPerView: '3', //'auto'
                    spaceBetween: 30,
                    navigation: {
                        prevEl: ".prev-" + index, //prev must be unique (ex: some-slider-prev)
                        nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
                    },
                    pagination: {
                        el: '.pagination-' + index,
                        type: 'bullets',
                        clickable: true
                    },

                });
            });


            swiperInstances[3].update();

            setTimeout(function () {
                for (const slider of swiperInstances) {
                    slider.update();
                }
            }, 50);
        }
    });
    // Init Swiper End

});
