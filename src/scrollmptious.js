/*
 * 
 * 
 *
 * Copyright (c) 2016 Polar Notion
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.scrollmptious = function () {
    return this.each(function () {
      'use strict';

      $('body').append(
        "<style> .scrollmptious-element { position: relative; } </style>"
      );

      $(this).addClass('scrollmptious-element');

      var delta= 5, 
          didScroll = false,  
          lastScrollTop = 0, 
          height = $(this).outerHeight(),
          initialOffset = $(this).offset();

      //code to run when scrolling
      var hasScrolled = function() {
        //initialize scroll position and find location
        var st;
        st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
          //didnt scroll enough, do nothing and break function
          return;
        }
        if (st > lastScrollTop && st > height) {
          //scrolling down
          $(this).css('top', -height);
        } else {
          if (st + $(window).height() < $(document).height()) {
            //scrollin back up
            $(this).css('top', initialOffset.top);
          }
        }
        //reset scroll position
        lastScrollTop = st;
      };

      //throttled scroll check
      setInterval( function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 200);

      $(window).scroll(function() {
        didScroll = true;
      });

      return $;
    });
  };
}(jQuery));
