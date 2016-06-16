/*
 * 
 * 
 *
 * Copyright (c) 2016 Polar Notion
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.scrollmptious = function (options) {
    'use strict';
    
    var delta = 5, 
        didScroll = false,  
        lastScrollTop = 0, 
        height = $(this).outerHeight(),
        initialOffset = $(this).offset(),
        $this = $(this),
        settings = $.extend({}, $.fn.scrollmptious.defaults, options);

    //code to run when scrolling
    function hasScrolled() {
      //initialize scroll position and find location
      var st;
      st = $(window).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta) {
        //didnt scroll enough, do nothing and break function
        return;
      }
      if (st > lastScrollTop && st > height) {
        //scrolling down
        if (typeof settings.upFunc === 'function' ) {
          settings.upFunc.call($this);
        } else {
          $this.css('top', - height.toString() + 'px');
        }
      } else if (st + $(window).height() < $(document).height()) {
        if (typeof settings.downFunc === 'function' ) {
          settings.downFunc.call($this);
        } else {
          $this.css('top',0);
        }
      }
      //reset scroll position
      lastScrollTop = st;
    };

    //throttled scroll check
    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    $(window).scroll(function() {
      didScroll = true;
    });

    return this;
  };

  // Set up the default options.
  $.fn.scrollmptious.defaults = {
    elementLocation: 'top',
    upFunc:  null,
    downFunc: null
  };

}(jQuery));
