window.onload = function () {

    $(document).ready(function() {
        var $backToTop = $(".back_to_top");
    
        // 페이지 로드 시에 숨김
        $backToTop.hide();
    
        // 스크롤 이벤트 핸들러
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100) {
                $backToTop.fadeIn();
            } else {
                $backToTop.fadeOut();
            }
        });
    
        // Back to Top 버튼 클릭 시 상단으로 스크롤
        $backToTop.on("click", function(e) {
            e.preventDefault(); // 기본 동작(링크 이동) 방지
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });
    });

}