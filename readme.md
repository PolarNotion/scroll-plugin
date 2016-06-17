# Scrollmptious

> Scroll plugin that lets you hide elements based on scroll direction

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/PolarNotion/jquery-scrollmptious/master/dist/jquery.scrollmptious.min.js
[max]: https://raw.githubusercontent.com/PolarNotion/jquery-scrollmptious/master/dist/jquery.scrollmptious.js

In your web page:

```html
<nav>
  <span>Select any Element, but its gotta have a fixed position</span>
</nav>
<script src="jquery.js"></script>
<script src="dist/scrollmptious.min.js"></script>
<script>
  $('nav').scrollmptious(); // "awesome"
</script>
```

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100vw;
  transition: top 0.2s ease-in-out;
}
```

By default, this plugin is designed to work with a top navbar, and will hide and display it based on your scroll direction. Pretty neat, huh? Wait, it gets even cooler.

## Optional Settings

Instead of using the default action, (hiding and displaying your top navbar or whatever you put at the top of the screen really) You can hook into the plugins scroll action and run your own custom code on scroll. An example might be if you have a top and bottom navbar you want to hide and display, you could write a couple functions to run on up and down actions.

```javascript 
var scrollUp = function(){ 
  $('body').addClass('hide-navs');
}

var scrollDown = function(){
  $('body').removeClass('hide-navs');
}

$('body').scrollmptious({ upFunction: scrollUp, downFunction: scrollDown });
```
Technically it doesnt matter which element you target with jquery if youre using your own code, but you should try to target a single element and not a collection if youre going that route. 

## License

MIT © Polar Notion
