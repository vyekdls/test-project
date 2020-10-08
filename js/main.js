// main.js
/*
1. 메인 페이지 슬라이더 뷰
2. 서브 페이지 갤러리 뷰
3. 2단계 메뉴(CSS)
*/ 

$(function(){

  // el(요소명) | top(시작위치) | duration(재생시간) | interval_time(인터벌 시간-5초 권장)
  function mySlider(el, top, duration, interval_time) {
    $(el).css({marginTop: top}); 

    setInterval(function(){
      // 조건: -500(마지막) 위치 이면 0으로 돌아감
      if(top <= -500) {
        top = 0;  // 초기값
      } else {
        top = top - 500;  // 다음 이미지 위치
      }
     
      $(el)
        .animate({marginTop: top}, duration);
    }, interval_time);
  
  }

  // 왼쪽 슬라이더
  mySlider('.left.slider', 0, 500, 5000);

  // 오른쪽 슬라이더
  mySlider('.right.slider', -500, 500, 5000);

})


// 서브페이지 갤러리
$(function(){
  $('.img_list > li').click(function(){
    // 클릭한 이미지의 src값을 읽음
    var src = $(this).find('img').attr('src');
    console.log(src);

    // 대표이미지에 클릭한 이미지 표시
    $('figure > img').attr('src', src);
  })
})

