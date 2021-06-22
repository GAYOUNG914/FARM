# Farm clone coding
템플릿 사이트를 클론 코딩 해보았습니다. 스크립트를 사용하여 동적인 부분을 추가했습니다.

## Link
* https://gayoung914.github.io/FARM/
  - subpage<br>
  https://gayoung914.github.io/FARM/index_Products.html<br>
  https://gayoung914.github.io/FARM/index_Ourstory.html<br>
  https://gayoung914.github.io/FARM/index_Aboutus.html<br>
  https://gayoung914.github.io/FARM/index_contact.html

## Tool
* HTML5
* CSS3
* Jquery

## Skill
* Main contents in Products & Aboutus page
  - **정해진 숫자를 동적으로 보여주는 스크립트**<br>
    👉 .count class가 여러개이기 때문에 each function 을 사용하여 요소 각각을 검사해줍니다. animate function을 사용하여 count class에 html로 부여해준 숫자에 도달하는 과정을 나타냅니다.
```
$(".flex_box .count").each(function (i) {
    $(this)
      .prop("Counter", 0)
      .animate(
        { Counter: $(this).text() },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
```
* Main contents
  - **scroll 시 우측 하단 이동버튼 노출/비노출**<br>
    👉 scroll function을 이용하여 화면의 scrollTop이 0일 경우 opacity값을 1로 변경해주는 class인 on을 제거하여 가리고, scrollTop이 0이 아닐 경우 class on을 부여하여 화면에 나타나게합니다.
```
  $(window).scroll(function () {
    // console.log($(this).scrollTop())
    if ($(this).scrollTop() == 0) {
      $(".back_to_top").removeClass("on");
    } else {
      $(".back_to_top").addClass("on");
    }
  });
```

## License
© 2021 BeFarm 2 - Betheme. All Rights Reserved. Muffin group

