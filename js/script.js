/******* particles.js config *******/
// particlesJS("particles-js",{particles:{number:{value:150,density:{enable:!0,value_area:1e3}},color:{value:"#424242"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1.218119527978683,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:50,color:"#424242",opacity:.9,width:1.5},move:{enable:!0,speed:2,direction:"top-right",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:1e4,rotateY:1e4}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:194.89912447658924,size:8.12079685319122,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.1},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});

window.onload = function() {
  window.loading_screen.finish();

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  $('#fullpage').fullpage({
    sectionsColor: ['transparent'],
    // anchors: [
    //   'Home',
    //   'About',
    //   'Workflow',
    //   'Portfolio',
    //   // 'Materials',
    //   'Contact'
    // ],
    menu: '#menu',
    scrollOverflow: false,
    scrollingSpeed: 1400,
    keyboardScrolling: true,
    // scrollBar: true,
    //touchSensitivity: 400,
    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);

        //after leaving section 2
        if(index == 1 && direction =='down'){
          AboutAnimation.play();
        }

        if(index == 2 && direction == 'down'){
          WorkflowAnimation.play();
        }

        // if(index == 3 && direction == 'down'){
        //   PortfolioItemIn.play();
        // }
    }
  });

  if (w < 500) {
    console.log("ancho: "+ w + " y alto: "+ h);
    // $('#fullpage').fullpage({
    //   autoScrolling: false
    // });
  }
};

/******* Logo animation *******/
var logoIntro = new TimelineMax({
  repeat: 0,
  paused:true,
  delay:2.5,
  ease: Power4.easeInOut});

var textAnimation = new TimelineMax({
  repeat: -1,
  paused:true,
  delay:0,
  ease: Power4.easeInOut});

var garraAmimation = new TimelineMax({
  repeat: -1,
  paused:true,
  delay:3,
  repeatDelay:3,
  ease: Power4.easeInOut});

TweenMax.set('.l_blue', {
  fill:             "transparent",
  stroke:           "#32A0D2",
  strokeWidth:      "5",
  strokeDasharray:  "1500",
  strokeDashoffset: "1500",
  strokeLinecap:    "round"
})

TweenMax.set('.l_blue_max', {
  fill:             "transparent",
  stroke:           "#32A0D2",
  strokeWidth:      "10",
  strokeDasharray:  "1000",
  strokeDashoffset: "1000",
  strokeLinecap:    "round"
})

TweenMax.set('.l_gray', {
  fill:             "transparent",
  stroke:           "#818081",
  strokeWidth:      "5",
  strokeDasharray:  "1000",
  strokeDashoffset: "1000",
  strokeLinecap:    "round"
})

TweenMax.set('.t1 , .t2, .t3', {
  opacity: "0"
})
TweenMax.set('#extra, .mouse, .social_animate', {
  opacity: "0"
})

logoIntro.staggerTo('.l_blue', 2.5, {strokeDashoffset:"0"},0.3)
  .staggerTo('.l_blue_max', 1.5, {strokeDashoffset:"0"},0.3,"-=2")
  .staggerTo('.l_gray', 2, {strokeDashoffset:"0"},0.3,"-=3")
  .staggerTo('.l_blue , .l_blue_max', 2, {fill:"#32A0D2", stroke:"transparent"},0.1,"-=2")
  .staggerTo('.l_gray', 1.2, {fill:"#818081", stroke:"transparent",onComplete: starAnimations},0.1,"-=3" )
  .staggerTo('#extra, .social_animate', 1.5, {opacity:"1"},0.2,"-=1.5")
  .to('.mouse', 1.5, {opacity:"1"},"-=0.8");

garraAmimation.to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: -35},"-=1")
              .to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: -5})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: 5},"-=1")

              .to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: -35},"-=1")
              .to('#G1', 1.5 ,{transformOrigin:"105% -9%",rotation: -5})
              .to('#G2', 1.5 ,{transformOrigin:"80% 133%",rotation: 5},"-=1.5")

              .to('#G1', 0.5 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 0.5 ,{transformOrigin:"80% 133%",rotation: 35},"-=0.5")
              .to('#G1', 0.5 ,{transformOrigin:"105% -9%",rotation: 5})
              .to('#G2', 0.5 ,{transformOrigin:"80% 133%",rotation: 5},"-=0.5")

textAnimation.set('.t1, .t2, .t3',{ opacity:"0", transformOrigin:"0 0",transform:"translateX(-230px)"})
             .to('.t1', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t1', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})
             .to('.t2', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t2', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})
             .to('.t3', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t3', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})

function starAnimations() {
  textAnimation.play();
  garraAmimation.play();
}

$( document ).ready(function() {
    logoIntro.play();
});

/******* Mouse animation *******/
// var MouseAnimation = new TimelineMax({
//   repeat: -1,
//   ease: Power4.easeInOut});
//
//   MouseAnimation.set('.wm',{ opacity:"0"})
//                 .staggerTo('.wm', 0.5, {opacity:"1", transformOrigin:"0 0", transform:"translateY(10px)"})
//                 .staggerTo('.wm', 0.5, {opacity:"0", transformOrigin:"0 0", transform:"translateY(20px)" });
$('#moveSectionDown').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionDown();
			});

$('.moveSectionIndex').click(function(j){
  //console.log($(this).data("index"));
  $.fn.fullpage.moveTo($(this).data("index"));
  location.href = '#/'
});


/******* Menu animation *******/

  var MenuAnimation = new TimelineMax({
      repeat: 0,
      paused:true,
      ease: Power4.easeInOut});
  var open = false;

  var menuBtn = document.getElementById( 'btn-menu' );
  var menu = document.querySelector( 'div#menu' );
  var menuItems = document.querySelector( 'ul#items' );

  TweenMax.set(menu, {
    opacity: "0",
    visibility: "hidden"
  })
  TweenMax.set('.menu-item', {
    transformOrigin:"0 0",
    transform:"translateX(-200px)",
    opacity: "0"
  })

  MenuAnimation.to(menu, 1 ,{opacity: "1", visibility: "visible"})
               .to('#L1', 0.5 ,{transformOrigin:"0 0", transform:"translateY(13px)"},"-=1")
               .to('#L3', 0.5 ,{transformOrigin:"0 0", transform:"translateY(-12px)"},"-=1")
               .to('#L2', 0.5 ,{opacity: 0},"-=1")
               .to('#L1', 0.5 ,{transformOrigin:"center", rotation: 45},"-=0.5")
               .to('#L3', 0.5 ,{transformOrigin:"center", rotation: 135},"-=0.5")
               .to('#bg-menu', 0.5 ,{transformOrigin:"center", rotation: 120, fill:"#f7484e"},"-=0.5")
               .staggerTo('.menu-item', 0.2, {transformOrigin:"0 0", transform:"translateX(0)", opacity: 1},0.1,"-=0.7");


  function toggleMenu() {
    if(open == false){
      MenuAnimation.play();
      open = true;
      // console.log(open);
    } else {
      MenuAnimation.reverse();
      open = false;
      // console.log(open);
    }
  }

  menuBtn.addEventListener( 'click', toggleMenu );
  menuItems.addEventListener( 'click', toggleMenu );

    // menuBtn.addEventListener(interactionOver, function(){
    //   tl.play();
    // })
    // menuBtn.addEventListener(interactionOut, function(e){
    //   tl.reverse();
    // })
  //}

  /******* About animation *******/

  var AboutAnimation = new TimelineMax({
      repeat: 0,
      paused:true,
      delay: 1,
      ease: Power4.easeInOut});

  TweenMax.set('.about_svg', {
    fill:             "transparent",
    stroke:           "#32A0D2",
    strokeWidth:      "2",
    strokeDasharray:  "1000",
    strokeDashoffset: "1000",
    strokeLinecap:    "round"
  })
  TweenMax.set('.div_about', {
    background: "transparent"
  })
  TweenMax.set('.bg_about', {
    fill: "transparent"
  })
  TweenMax.set('.about_p', {
    opacity:"0",
    transformOrigin:"0 0",
    transform:"translateY(-100px)"
  })
  AboutAnimation.staggerTo('.about_svg', 3, {strokeDashoffset:"0"},0.2)
                .to('.bg_about', 1, {scale:15, transformOrigin:"50% 50%", fill: "#424242"},"-=3")
                .staggerTo('.about_svg', 1.5, {fill:"#32A0D2", stroke:"transparent"},0.2,"-=2.5")
                .to('.bg_about', 1.5, {fill: "transparent"},"-=0.5")
                .set('.div_about', {background:"url(../imgs/me.png)"},"-=3")
                .staggerTo('.about_p',1,{opacity:"1",transformOrigin:"0 0", transform:"translateX(0)"},0.3,"-=2");


/******* Workflow animation *******/

var WorkflowAnimation = new TimelineMax({
    repeat: 0,
    paused:true,
    delay: 1,
    ease: Power4.easeInOut});

TweenMax.set('.wf_w', {
  fill:             "transparent",
  stroke:           "#424242",
  strokeWidth:      "1",
  strokeDasharray:  "1000",
  strokeDashoffset: "1000",
  strokeLinecap:    "round",
  transformOrigin:"0 0",
  transform:"translateX(50px)"
});

WorkflowAnimation.staggerTo('.wf_w', 3, {strokeDashoffset:"0"},0.2)
                 .staggerTo('.wf_w', 1.5, {fill:"#32A0D2", stroke:"transparent"},0.2,"-=3")
                 .to('.wf_w',1,{transformOrigin:"0 0", transform:"translateX(0px)"},"-=1")
                 .from('.wf_f',1,{opacity:"0",transformOrigin:"0 0", transform:"translateX(-50px)"},"-=1");

// var PortfolioItemIn = new TimelineMax({
//    repeat: -1,
//    paused: true,
//    delay:0,
//    ease: Power4.easeInOut});
//
// PortfolioItemIn.set('.card',{ opacity:"0", transformOrigin:"0 0",transform:"translateX(-230px)"})
//                .staggerTo('.card',1,{opacity:"1", transform:"translateX(0)"},0.3);
