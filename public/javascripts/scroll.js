var header = $('#header');

var pre = 0;
$(window).scroll( function() {
    var idx = getIndex($(window).scrollTop());
    var point = $('.pos-point');
    if(pre != idx) {
        point.eq(pre).toggleClass('selected');
        point.eq(idx).toggleClass('selected');
        if(idx == 0) {
            header.removeClass('small');
        } else {
            header.addClass('small');
        }
        pre = idx;
    }
});

$(window).on('mousewheel DOMMouseScroll', function(e){
    var event = e.originalEvent; // 마우스 스크롤 정보를 받아옴
    var idx = getIndex($(window).scrollTop());
    var content = $('.content-box');
    if(event.detail) { // 파이어 폭스에서만 실행
        if(event.detail > 0) { idx--; }
        else { idx++; }
    } else { // 그 외의 브라우저
        if(event.wheelDelta < 0) { idx++; }
        else { idx--; }
    }
    if(idx < 0) idx = 0;
    else if(idx > content.length - 1) idx = content.length - 1;
    moveIndex(idx);
})

function getIndex(scroll) {
    var content = $('.content-box');
    for(var i = content.length - 1; i >= 0; i--) {
        if(content.eq(i).offset().top - 5 <= scroll)
            return i;
    }
}

function moveIndex(index) {
    var content = $('.content-box').eq(index);
    $('html').stop().animate({
        scrollTop: content.offset().top
    }, 500);
}