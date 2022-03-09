$(function(){
	// breadcrumb management
  	if(!$('body').hasClass('no-breadcrumb')){
	 	if($('.mod_breadcrumb+.mod_article.first .heroFW.first:first-child').length)
	    	$('.mod_breadcrumb+.mod_article.first .heroFW.first:first-child').after($('.mod_breadcrumb'));
	  	if($('.mod_breadcrumb+.mod_article.first .sliderFW.first:first-child').length)
	    	$('.mod_breadcrumb+.mod_article.first .sliderFW.first:first-child').after($('.mod_breadcrumb'));
	    if($('.mod_breadcrumb+.mod_article.first .page__title.first:first-child').length)
	    	$('.mod_breadcrumb+.mod_article.first .page__title.first:first-child').after($('.mod_breadcrumb'));
	  	$('.mod_breadcrumb').addClass('active');
  	}
});