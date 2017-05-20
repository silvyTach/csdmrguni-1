// JavaScript Document
$(document).ready(function(){
	"use strict";
	// toggling the menu in mobile mode --------------------------------------------------------
    $("#menuIcon").live("click", function(){
		if ($(window).width() <= 767) {
        $("#nav").show();
		$("#logos").hide();
		$("#menuExit").show();
		}
    });
	    $("#menuExit").live("click", function(){
		if ($(window).width() <= 767) {
        $("#nav").hide();
		$("#logos").show();
		$("#menuExit").hide();
		}
    });
		$(window).resize(function() {
        if($(window).width() > 767) {
			$("#nav").show();
			//$("#searchBox").show();
			$("#logos").show();
			$("#menuExit").hide();
		}
		else {
			$("#nav").hide();
			$("#logos").show();
			$("#menuExit").hide();
		}
    });
	//------------------------------------------------------------------------------------------
	
	//index page animated image caption --------------------------------------------------------
	$( "#news1 .caption" ).hover(
  function() {
    $( "#firstParagraph" ).fadeIn();
	$("#news1 .title, #news1 .author").hide();
  }, function() {
        $( "#firstParagraph" ).hide();
	$("#news1 .title, #news1 .author").fadeIn();
  }
);
	    $("#fbPlugin").live("click", function(){
			$(this).attr('src','fbPluginActive.jpg');
			$(this).width('15%');
			$("#twitterPlugin").attr('src', 'twitterPluginUnactive.jpg');
			$("#twitterPlugin").width('10%');
			$("#instaPlugin").attr('src', 'instaPluginUnactive.jpg');
			$("#instaPlugin").width('10%');
		});
		$("#twitterPlugin").live("click", function(){
			$(this).attr('src','twitterPluginActive.jpg');
			$(this).width('15%');
			$("#fbPlugin").attr('src', 'fbPluginUnactive.jpg');
			$("#fbPlugin").width('10%');
			$("#instaPlugin").attr('src', 'instaPluginUnactive.jpg');
			$("#instaPlugin").width('10%');
		});
		$("#instaPlugin").live("click", function(){
			$(this).attr('src','instaPluginActive.jpg');
			$(this).width('15%');
			$("#fbPlugin").attr('src', 'fbPluginUnactive.jpg');
			$("#fbPlugin").width('10%');
			$("#twitterPlugin").attr('src', 'twitterPluginUnactive.jpg');
			$("#twitterPlugin").width('10%');
		});
		//-------------------------------------------------------------------------------------
		
		//events page -------------------------------------------------------------------------
		$(".event").height($(".date").height());
		$(window).resize(function() {
			$(".event").height($(".date").height());
		});
		
		//-------------------------------------------------------------------------------------
		
		//news page ---------------------------------------------------------------------------

			if ($(window).width() > 767){
		$("#headline1").height($("#image1").height()*0.25);
		$("#paragraph1").height($("#image1").height()*0.75);
		$("#headline2").height($("#image2").height()*0.20);
		$("#paragraph2").height($("#image2").height()*0.80);
		$("#headline3").height($("#image3").height()*0.25);
		$("#paragraph3").height($("#image3").height()*0.75);
		$("#mainFirstParagraph").height($("#mainArticle").height());
		}
		else {
		$("#headline1").height("auto");
		$("#paragraph1").height("auto");
		$("#headline2").height("auto");
		$("#paragraph2").height("auto");
		$("#headline3").height("auto");
		$("#paragraph3").height("auto");
		$("#mainFirstParagraph").height("auto");
		}	
		$(window).resize(function() {
		if ($(window).width() > 767){
		$("#headline1").height($("#image1").height()*0.25);
		$("#paragraph1").height($("#image1").height()*0.75);
		$("#headline2").height($("#image2").height()*0.20);
		$("#paragraph2").height($("#image2").height()*0.80);
		$("#headline3").height($("#image3").height()*0.25);
		$("#paragraph3").height($("#image3").height()*0.75);
		$("#mainFirstParagraph").height($("#mainArticle").height());
		}
		else {
		$("#headline1").height("auto");
		$("#paragraph1").height("auto");
		$("#headline2").height("auto");
		$("#paragraph2").height("auto");
		$("#headline3").height("auto");
		$("#paragraph3").height("auto");
		$("#mainFirstParagraph").height("auto");
		}
		});
		//---------------------------------------------------------------------------------------
});
