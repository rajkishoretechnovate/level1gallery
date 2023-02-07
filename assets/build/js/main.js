$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})
		// $(body).click(function(e) {		    
		// 	if ($('body').hasClass('offcanvas-menu') ) {
		// 		$('body').removeClass('offcanvas-menu');
		// 	}
	    // });
		$('body').on('click', '.js-menu-toggle', function(e) {
			//var $this = $(this);
			e.preventDefault();
			if($('body').hasClass("offcanvas-menu")){
				console.log(true)
				$('body').removeClass("offcanvas-menu");
			}else{
               console.log(false)
			   $('body').addClass("offcanvas-menu");
			}
		})
		$('body').on('click', '.site-mobile-menu-close', function(){
			if($('body').hasClass("offcanvas-menu")){
				console.log(true)
				$('body').removeClass("offcanvas-menu");
			}else{
               console.log(false)
			   $('body').addClass("offcanvas-menu");
			}
		})

		
	}; 
	siteMenuClone();

});