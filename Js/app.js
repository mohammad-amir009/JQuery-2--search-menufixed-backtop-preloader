$(function(){
      
    let searchIcon = $(`.searchIcon`)
    let search = $(`.search`)
    
     searchIcon.click( function(){
        search.toggleClass(`show`)


     if(search.hasClass(`show`) == true){
        searchIcon.html(`<i class="fa-solid fa-xmark"></a>`)
     }   else{
      searchIcon.html(`<i class="fa-solid fa-magnifying-glass"></i>`)
     }
     })

// menu fixed
         

        let navBar = $(`.navBar`);
        let backTop = $(`.backToTop`)
        $(window).scroll(function(){
         let scrollValue = ($(window).scrollTop()); 
      

       if(scrollValue > 700){
         navBar.addClass(`menuFixed`)
         backTop.addClass(`show`)
       }else{
         navBar.removeClass(`menuFixed`)
         backTop.removeClass(`show`)
       }


      })


     


// menu fixed ends..


// back to top


let button = $(`.backToTop button`)



  button.click(function(){
    $(`html,body`).animate({
      scrollTop:0
    }, 500)
  })

  // $(window).scroll(function(){
  //      if(scrollValue > 900){
          
  //      }else{
        
  //      }
  // });


  //  preloader starts
   $(window).on(`load`,function(){
      $(`.preloader`).fadeOut()
   })


});