
// 상단 돋보기
$( document ).ready( function() {
	$( '.search-menu' ).click( function() {
	  $( '.shc_layer' ).slideDown();
	} );
  } );
  
  $( document ).ready( function() {
	$( '.close' ).click( function() {
	  $( '.shc_layer' ).fadeOut();
	} );
  } );
  
  // 메뉴탭
  function show () {
	document.querySelector(".background").className = "background show";
	document.querySelector("#wrap").className = "allmenu-pop";
  }
  
  function close () { 
	document.querySelector(".background").className = "background";
	document.querySelector("#wrap").classList.remove("allmenu-pop");
  }
  
  document.querySelector(".menu-btn").addEventListener('click', show);
  document.querySelector(".tsidemenu").addEventListener('click', close);
  
  // footer메뉴
  $(document).ready(function(){
	
	$('.button').off('click').on('click', function(){
	  $(this).next($('.hide')).slideToggle('fast');
	  $('.family-site').toggleClass('active');
	})
  })  
  
  
  
  
  
  const banner=$('.img-box a');
  const button=$('.slick-active > button');
  let cnt=0;
  
  
  timer();
  function timer(){
	  setIntervalId=setInterval(function(){
		  let prev=banner.eq(cnt)
		  let prevBtn=button.eq(cnt)
		  move(prev, 0, '-429px')
		  prevBtn.removeClass('img-active')
		  cnt++;
		  if(cnt == 7) cnt = 0;
		  let next=banner.eq(cnt)
		  move(next, '429px', 0)
		  let nextBtn=button.eq(cnt)
		  nextBtn.addClass('img-active')
		  console.log(cnt)
	  },2000)
  }
  
  //버튼누르면 이미지변경되게
  button.click(function(){
	  let tg=$(this);
	  let i=tg.index();
	  console.log(tg)
  
	   button.removeClass('img-active')
	  tg.addClass('img-active')
  
	  if(cnt>i){
		  let cntEl=banner.eq(cnt);
		  let nextEl=banner.eq(i);
		  cntEl.css('left',0).stop().animate({left:'429px'},500);
		  nextEl.css('left','-429px').stop().animate({left:0},500);
		  cnt=i; //선택한값을 대입
	  }else if(cnt<i){
		  let cntEl=banner.eq(cnt);
		  let nextEl=banner.eq(i);
		  cntEl.css('left',0).stop().animate({left:'-429px'},500);
		  nextEl.css('left','429px').stop().animate({left:0},500);
		  cnt=i;
	  }else if(cnt==i) 
	  return;
  })
  
  
  
  
  
  
  function move(tg, start, end){
	  tg.css('left', start).stop().animate({left: end},500)
  }
  
  
  let a=true;
  let x=0;
  
  $('.control_pause, .control_play').on('click', function(){
	  if(x==0){
		  $('.control_pause').removeClass('active');
		  $('.control_play').addClass('active');
		  x=1;
	  }else{
		  $('.control_pause').addClass('active');
		  $('.control_play').removeClass('active');
		  x=0;
	  }
		  if(a==true){
			  clearInterval(setIntervalId);
			  a=false;
		  }else{
			  timer()
			  a=true;
		  }
  })
  
  
  
  
	  button.click(function() {
		  let tg = $(this);
		  let i = tg.index();
		
		  button.removeClass('img-active');
		  tg.addClass('img-active');
		
		  if (cnt > i) {
			let cntEl = banner.eq(cnt);
			let nextEl = banner.eq(i);
			cntEl.css('left', 0).stop().animate({ left: '429px' }, 500);
			nextEl.css('left', '-429px').stop().animate({ left: 0 }, 500);
			cnt = i; // 선택한 값을 대입
		  } else if (cnt < i) {
			let cntEl = banner.eq(cnt);
			let nextEl = banner.eq(i);
			cntEl.css('left', 0).stop().animate({ left: '-429px' }, 500);
			nextEl.css('left', '429px').stop().animate({ left: 0 }, 500);
			cnt = i;
		  } else if (cnt === i) {
			return;
		  }
		});

    // 모더나이저

    if(Modernizr.svg){
        console.log("svg를 지원합니다.");
    }
        
    if(Modernizr.canvas){
        console.log("canvas를 지원합니다.");
    }
   