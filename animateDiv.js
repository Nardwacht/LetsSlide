'use strict';

(function($){
	$.fn.letsSlide = function(options, direction, offSet, correction, posNeg)
	{
		var settings = $.extend({
			position : 'relative',
			left : '1000px'
		}, options);
		
		//var wacht = setTimeout(function(){
			if(document.documentElement.clientWidth > 1000)
			{
					this.css(direction, '-' + offSet + 'px');

					var animateObject;
					animateObject = '+=' + (posNeg + (offSet + correction)) + 'px';
					this.animate(animateObject, 400);

					animateObject = '-=' + (posNeg + correction) + 'px';
					this.animate(animateObject, 200);
			}
		//}, 500);
		return this.css({
			position : settings.position
		});
	}
}(jQuery));