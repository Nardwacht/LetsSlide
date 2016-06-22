#Let's Slide!

A small and simple framework to make your DOM elements animate into your web page!
----------------------------------------------------------------------------------
Installation
------------

First of all, make sure you have jQuery included in your project.

To activate the framework function, simply add a class '.left' or '.right' to your existing div that you want to animate.
In your $(document).ready function, add a jQuery Selector with the letsSlide() function, with the possible options and the direction the object has to move to as a string.

The available options are direction, offSet and correction.

The direction variable can be top, bottom, left and right.

This will look as follows:

$('.right').letsSlide({}, 'right', 1000, 50);

It will animate the divs with a bouncy effect, woohoo! 

If you don't want the bounciness, just leave the correction option blank.

Have fun!
