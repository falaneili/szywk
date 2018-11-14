//2018

//二级导航
$(function(){
	$('.nav>li').hover(function(){
		var sec_count=$(this).find('.sec a').length;
		var a_height=$(this).find('.sec a').eq(0).height();
		var sec_height=sec_count*a_height;
    $(this).find('.active').css("color", "#F8F8F8");
		$(this).find('.sec').stop().animate({height:sec_height},300);
	},function(){
    $(this).find('.active').css("color","#FFF");
		$(this).find('.sec').stop().animate({height:0},300);
	});
});


/*在线客服*/
$(function () {
  $('#close_im').bind('click', function () {
    $('#main-im').css("height", "0");
    $('#im_main').hide();
    $('#open_im').show();
  });
  $('#open_im').bind('click', function (e) {
    $('#main-im').css("height", "272");
    $('#im_main').show();
    $(this).hide();
  });
  $('.go-top').bind('click', function () {
    $(window).scrollTop(0);
  });
  $(".weixing-container").bind('mouseenter', function () {
    $('.weixing-show').show();
  })
  $(".weixing-container").bind('mouseleave', function () {
    $('.weixing-show').hide();
  });
});



/*加载动画JS*/
    document.onreadystatechange=function(){
      if(document.readyState=="complete"){
        $(".loading").fadeOut();
      }

    }



/*轮播图*/
var swiper = new Swiper('.banner-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*案例*/
var swiper = new Swiper(".anli-swiper", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

/*选项卡JS*/
    $(document).ready(function() {
        $('.ct:gt(0)').hide();
        var hdw = $('#tab_msg a');
        //hdw.hover(function() {
        //    $(this).addClass('current').siblings().removeClass('current');
        //});
        hdw.click(function() {
            $(this).addClass('current').siblings().removeClass();
            var hdw_index = hdw.index(this);
            $('.ct').eq(hdw.index(this)).show().siblings().hide();
        });
    });