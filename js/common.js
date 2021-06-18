$(function(){
  /*script 영역 count animation 사용 예*/
  //$(".flex_box .count").attr('title','http://naver.com');
  // $(".flex_box .count").prop('Counter',0);
  // console.log($(".flex_box .count").prop("Counter"))

  $(".flex_box .count").each(function(i){
    // if( i == 0 ){
    //   $(this).prop("Counter",0)
    // }else{
    //   $(this).prop("Counter",1)
    // }
    $(this).prop("Counter",0).animate({Counter: $(this).text()},{
      duration: 4000,
      easing: 'swing',
      step: function(now){
        $(this).text(Math.ceil(now))
      }
    });
  });

  
  //script 입력영역
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function(){
    console.log($(this.hash))
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top)
    $("html,body").stop();
    $("html,body").animate({scrollTop : offsetElem.top},1500);
  });

  //scroll 시 하단 이동버튼 노출/비노출
  $(window).scroll(function(){
    // console.log($(this).scrollTop())
    if( $(this).scrollTop() == 0 ){
      $(".back_to_top").removeClass("on");
    }else{
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 class 추가
  const addTop = 500;

  let wHeight = $(window).innerHeight();
  console.log("window height: "+wHeight)
  $(window).scroll(function(){
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function(){
      let thisOffset = $(this).offset();
      if( thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight ){
        $(this).addClass("active");
      }
    });
  });;

});//document ready
