// Home page

// header
$(document).ready(function(){
  $('.nav-button').click(function(){
      $('.nav-button').toggleClass('change')
  })
})

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 300 ){
      $('.nav-menu').addClass('custom-navbar')
  }else{
      $('.nav-menu').removeClass('custom-navbar')
  }
})
// end of header

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 1500 ){
        $('.cafe-info-anim').addClass('cafe-info-animation')
    }
  })

$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 1800){
      $('.gallery-anim').addClass('gallery-animation')
  }
})

// end of Home page


// Menu page 
document.querySelector("#floating-btn").addEventListener("click", ()=>{

  if (document.querySelector("#floating-btn").innerHTML == "Show More"){

        document.querySelector("#floating-btn").innerHTML = "Show Less"

  } else if (document.querySelector("#floating-btn").innerHTML == "Show Less"){

        document.querySelector("#floating-btn").innerHTML = "Show More"

  }

});
// End of manu page