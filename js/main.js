
$('.generalNavContent').hide();
$('.ITLLContent').hide();
$('.TeachingAndLearningContent').hide();
$('.ResourcesContent').hide();
// $('.moduleMove').hide();

//////////////RIGHTSIDENAV/////////////////
var currentState = 0;
function slideRight(x){
  switch(x){
    case 1:
      if(currentState == 1){
        currentState = 0;
        $('.slideRight1').css("width","0px");
        console.log('right1');
      }
      else{
        currentState = 1;
        $('.slideRight1').css("width","350px");
        $('.slideRight2').css("width","0px");
        $('.slideRight3').css("width","0px");
      }
      break;
    case 2:
      if(currentState == 2){
        currentState = 0;
        $('.slideRight2').css("width","0px");
      }
      else{
        currentState = 2;
        $('.slideRight2').css("width","350px");
        $('.slideRight1').css("width","0px");
        $('.slideRight3').css("width","0px");

      }
      break;
    case 3:
      if(currentState == 3){
        currentState = 0;
        $('.slideRight3').css("width","0px");
      }
      else{
        currentState = 3;
        $('.slideRight3').css("width","350px");
        $('.slideRight1').css("width","0px");
        $('.slideRight2').css("width","0px");
      }
      break;
  }
}
///////////////////////////////////////////

  function navChange(){
    console.log("togglechange");
    document.getElementById("fillerNav").classList.toggle("change");
    //document.getElementById("Resources").classList.toggle("change");
  //  document.getElementsByClassName("fillerNavContainer").css({"border-radius": "0px"});
  }

/////////////footer//////////////////////
  // $('.showFooter').on('click',function(){
  //   $('.lowerMainContent').toggleClass('FooterActive');
  //   $('.showFooter').toggleClass('FooterArrowActive');
  // })
////////////////////////////////////////
  function scrollPage(x){
    if(x == 0){
      window.scrollBy({top: -1000, behavior:'smooth'});
    }
    else{
      window.scrollBy({top: 1000, behavior:'smooth'});
    }
  }

  function NavDropdown(){
    $('.AZNav').slideToggle('AZDropdown');
    $('.Search').toggleClass('SearchActive');
  }

  function boxGrow(){
    console.log("boxgrow");
    $('.module3OuterBox').toggleClass('module3Active');
  }

//SearchBox Scroll to specific alphetibetical div
  $('#O').on('click',function(){
    $('.SearchBox').animate({
        scrollTop: $("#Sub-O").offset().top
    }, 1000);
  })


// //Inverts body scrolling, also parallax
//   $.jInvertScroll(['.page']);
//
// //Body scrollBar
//   $('body').niceScroll({
//     cursorcolor:"#A2A4A3",
//     cursorwidth:"10px",
//     cursorborder:"none",
//     cursorborderradius:5
//   });
