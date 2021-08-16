$(() => {

    //햄버거 메뉴
    // 하는 중...
    $('.ham').click(function(){
        $('nav').toggleClass('on')
    })

    //드롭메뉴
    $('.gnb').mouseover(function () {
        $('nav').addClass('on')
    })
    $('.gnb').mouseout(function () {
        $('nav').removeClass('on')
    })

    
    // 섹션 1 슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
      });
    

    //섹션3 메뉴소개 호버
    $('.sec3 .inner1 li').mouseover(function () {
        $('.sec3 .inner1 li').removeClass('off')
        $(this).addClass('off')
    })
    $('.sec3 .inner1 li').mouseout(function () {
        $('.sec3 .inner1 li').removeClass('off')
    })
    $('.sec3 .inner2 li').mouseover(function () {
        $('.sec3 .inner2 li').removeClass('off')
        $(this).addClass('off')
    })
    $('.sec3 .inner2 li').mouseout(function () {
        $('.sec3 .inner2 li').removeClass('off')
    })
    
    //섹션3 메뉴 1110px
    // 사이즈 작아졌을 때 호버 효과 없애는 법..?
    // 아래와 같이 추가할 수 있으나 모바일 영역에서 resize 실행 안되면 아래 코드 작동 안됩니다.
    $(window).resize(function () {
        // 생과일쥬스
        if ($(window).width() <= 1110) {
            $('.sec3 .inner1 li').addClass('off')
            $('.sec3 .inner1 li').eq(0).nextAll('li').css({
                'display' : 'none'
            })
            $('.sec3 .inner1 li').eq(0).addClass('on')
            $('.sec3 .inner1 li div img:nth-of-type(2)').css('display' , 'none')

        } else if ($(window).width() > 1110) {
            $('.sec3 .inner1 li').removeClass('off')
            $('.sec3 .inner1 li').eq(0).nextAll('li').css({
                'display' : 'block'
            })
            $('.sec3 .inner1 li').eq(0).removeClass('on')
            // 강사추가
            $('.sec3 .inner1 li div img:nth-of-type(2)').css('display' , 'block')
        }
        // 과일도시락
        if ($(window).width() <= 1110) {
            $('.sec3 .inner2 li').addClass('off')
            $('.sec3 .inner2 li').eq(0).nextAll('li').css({
                'display' : 'none'
            })
            $('.sec3 .inner2 li').eq(0).addClass('on')
            $('.sec3 .inner2 li div img:nth-of-type(2)').css('display' , 'none')
           
        } else if ($(window).width() > 1110) {
            $('.sec3 .inner2 li').removeClass('off')
            $('.sec3 .inner2 li').eq(0).nextAll('li').css({
                'display' : 'block'
            })
            $('.sec3 .inner2 li').eq(0).removeClass('on')
             // 강사추가
            $('.sec3 .inner2 li div img:nth-of-type(2)').css('display' , 'block')
        }
    })

})
