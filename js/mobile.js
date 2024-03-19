


$(function(){
  // jQuery를 사용하여 창 크기에 따라 클래스 변경
    // 초기 실행
    checkWidth();

    // 창 크기 변경 시 실행
    $(window).resize(function() {
      checkWidth();
    });
  });

  // 창 크기를 확인하고 클래스를 변경하는 함수
  function checkWidth() {
    // 창의 현재 크기를 가져오기
    var windowWidth = $(window).width();

    // 만약 창 크기가 576px 이하이면
    if (windowWidth <= 576) {
      // ul 요소의 클래스를 "grid"로 변경
      $(".specialization ul.flex").removeClass("flex").addClass("grid");
    } else {
      // 그렇지 않으면 클래스를 다시 "flex"로 변경
      $("specialization ul.grid").removeClass("grid").addClass("flex");
    }
    
    window.addEventListener('resize', function() {
      var windowWidth = window.innerWidth;
      var flexDiv = document.querySelector('.location > .inner > .flex');
  
      // 창의 크기가 576px 이하이면 .flex 클래스를 제거
      if (windowWidth <= 576) {
          flexDiv.classList.remove('flex');
      } else {
          flexDiv.classList.add('flex');
      }
  });


    function adjustFlexClass() {
      var windowWidth = window.innerWidth;
      var flexDiv = document.querySelector('.location > div.inner.flex');

      if (!flexDiv) {
          console.error('Error: .inner.flex not found');
          return;
      }

      try {
          // 창의 크기가 576px 이하이면 .flex 클래스를 제거
          if (windowWidth <= 576) {
              flexDiv.classList.remove('flex');
          } else {
              flexDiv.classList.add('flex');
          }
      } catch (error) {
          console.error('Error while adjusting .flex class:', error);
      }
  }

  window.addEventListener('resize', adjustFlexClass);
  window.addEventListener('load', adjustFlexClass); };

  window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    var ulElement = document.querySelector('footer > ul');

    // 창의 크기가 576px 이하이면 .flex 클래스를 제거하고 .grid 클래스를 추가
    if (windowWidth <= 576) {
        ulElement.classList.remove('flex');
        ulElement.classList.add('grid');
    } else {
        // 576px 이상이면 .grid 클래스를 제거하고 .flex 클래스를 추가
        ulElement.classList.remove('grid');
        ulElement.classList.add('flex');
    }
});

// 페이지 로드 시 초기 적용
window.addEventListener('load', function() {
    var ulElement = document.querySelector('footer > ul');
    var windowWidth = window.innerWidth;

      //햄버거 메뉴 클릭
$(".gnb>button").click(function (e) {
  e.preventDefault();
  $(".gnb>nav").toggleClass("on");
});
$("nav>button").click(function (e) {
  e.preventDefault();
  $(".gnb>nav").removeClass("on");
});


  //주메뉴 슬라이드
  let Width = 800;
      // 초기에 페이지 로딩 시 submenu 닫기
      $(".submenu").hide();

  $("nav>ul>li").on({
    "mouseenter keyup": function () {
        let screenWidth = $(window).width();
        if (screenWidth < Width) {
            $(this).find(".submenu").stop().slideDown();
        } else {
            $(".submenu").stop().fadeIn(400);
        }
    },
    "mouseleave keydown": function () {
        let screenWidth = $(window).width();
        if (screenWidth < Width) {
            $(this).find(".submenu").stop().slideUp();
        } else {
            $(".submenu").stop().fadeOut(400);
        }
    },
});

});