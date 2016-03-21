$(document).ready(function(){
 	$(".board").width($(window).height()-10);
	$(".board").height($(window).height()-10);
	$(".board").css('margin-left',($(window).width()-$(window).height()-10)/2+'px');
	$(".back").width(($(window).width()-$(window).height()-10)/2-20+'px');
	$(".back").css('margin-top',$(window).height()/2-50+'px');
	$(window).resize(function() {
 		$(".board").width($(window).height()-10);
 		$(".board").height($(window).height()-10);
 		$(".board").css('margin-left',($(window).width()-$(window).height()-10)/2+'px');
 		$(".back").width(($(window).width()-$(window).height()-10)/2-20+'px');
 		$(".back").css('margin-top',$(window).height()/2-50+'px');
	});
});


Array.prototype.unique = function(){
	var len = this.length;
	var ret = [];
	var obj = {};
	for (var i = 0; i < this.length; i++) {
		if(!obj[this[i]]){
			obj[this[i]] = 1;
			ret.push(this[i]);
		}else{
			//nothing to do here
		}
	};
	return ret;
}