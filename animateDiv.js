'use strict';

(function($){
	$.fn.letsSlide = function(options, direction, offSet, correction)
	{
		var settings = $.extend({
			position : 'relative',
		}, options);
		
		//var wacht = setTimeout(function(){
			if(document.documentElement.clientWidth > 1000)
			{
					this.css(direction, '-1000px');

					if(!isNaN(correction) || !isNaN(offSet))
					{
						var animateObject = {};

						var total = correction + offSet;
						toString(total);

						animateObject[direction] = '+=' + total + 'px';
						this.animate(animateObject, 400);

						animateObject[direction] = '-=' + correction + 'px';
						this.animate(animateObject, 200);
					}					
			}
		//}, 500);
		return this.css({
			position : settings.position
		});
	}
}(jQuery));