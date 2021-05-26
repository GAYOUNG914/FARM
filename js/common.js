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

});//document ready
