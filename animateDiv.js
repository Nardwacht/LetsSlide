//done this to make sure the javascript is correct.
'use strict';

//added my function to jQuery functions, now only the $() selector is neccesary. 
(function($){
	$.fn.letsSlide = function(options, direction, offSet, correction)
	{
		//here we set the options of the div to a relative position, this allows us to move the divs. woohoo!
		var settings = $.extend({
			position : 'relative',
		}, options);
		
		//if the user is on a tablet or an even smaller screen, it won't work. change the number 1000 to a value to your liking.
			if(document.documentElement.clientWidth > 1000)
			{
					//the initial position of the div, so that it will be well out of screen bounds.
					this.css(direction, '-' + offSet + 'px');

					//here we check if the two options are valid numbers.
					if(!isNaN(correction) || !isNaN(offSet))
					{
						//initialisation of the animateObject, well you guessed it, object. This allow us to easily change the animate() function.
						var animateObject = {};

						var total = correction + offSet;

						//here we set the direction property of the animate() function to the distance the div has to travel and activate the fuction.
						animateObject[direction] = '+=' + total + 'px';
						this.animate(animateObject, 400);

						//here the correction will be applied, so that your div will be at the position you want it to be.
						animateObject[direction] = '-=' + correction + 'px';
						this.animate(animateObject, 200);
					}					
			}
		
		//Here we set the CSS to that of the settings variable
		return this.css({
			position : settings.position
		});
	}
}(jQuery));