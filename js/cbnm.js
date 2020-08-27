

jQuery(function($){

    $( document ).ready( function() {
    
    /*  Fixed Top Menubar
    /* ----------------------------------------------------------- */

    // For fixed top bar
    $(window).scroll( function(){
        if($(window).scrollTop() > 100 /*or $(window).height()*/){
            $(".navbar-fixed-top").addClass('past-main');   
        }
        else{    	
            $(".navbar-fixed-top").removeClass('past-main');
        }
    });



    /*  Google Map
    /* ----------------------------------------------------------- */
    
    
    /*  MENU SCROLL 
    /* ----------------------------------------------------------- */

    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

    // Cache selectors
    var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+13,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
    var wow;
    
    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 900);
      
      $('#navbar').collapse('hide');
      
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        
        /*  Wow smooth animation
        /* ----------------------------------------------------------- */
        if ( wow === undefined || wow === null ) {
            wow = new WOW(
                {
                    animateClass: 'animated',
                    offset:       100,
                    live: true
                }
            );
            wow.init();
        }
        
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;

       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";

       if ( id === "" ) return;

       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=\"#"+id+"\"]").parent().addClass("active");
       }           
    });
    
    
    $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: true,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });
    });
});


