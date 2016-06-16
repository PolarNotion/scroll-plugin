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

    var settings = $.extend({}, $.fn.scrollmptious.defaults, options),
        didScroll = false,  
        lastScrollTop = 0, 
        height = $(this).outerHeight(),
        $this = $(this);

    //code to run when scrolling
    function hasScrolled() {
      //initialize scroll position and find location
      var st;
      st = $(window).scrollTop();
      if (Math.abs(lastScrollTop - st) <= settings.delta) {
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
    }

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
    downFunc: null,
    delta: 5,
  };

}(jQuery));
