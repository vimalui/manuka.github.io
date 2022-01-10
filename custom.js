AOS.init();

          $(document).ready (function(){
            $('#NGvideoModal,#MHvideomodal').on('hidden.bs.modal', function() {
                var $this = $(this).find('iframe'),
                tempSrc = $this.attr('src');
                $this.attr('src', "");
                $this.attr('src', tempSrc);
            });
          });
          $('.testimonials-slider').slick({
            dots: true,
            arrows:false,
            infinite: false,
            speed: 300,
            autoplay:true,
            autoSpeed:1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows:true,
                        dots: false
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                        arrows:false
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows:false
                    }
                }
            ]
        });
