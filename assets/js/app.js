$(function () {
    console.log("Hello from jQuery");
    // alert("Hello from jQuery");

    /**
     * Scroll-to-top Button
     */
    var $scrollToTopButton = $("#scroll-to-top");
    var $body = $("body");
    var scrollTreshold = window.innerHeight / 3;
    $(window)
        .on("scroll", function () {
            if ($body.scrollTop() > scrollTreshold) {
                $scrollToTopButton.show();
            } else {
                $scrollToTopButton.hide();
            }
        });

    $scrollToTopButton
        .on("click", function () {
            $body.animate({
                scrollTop: 0
            })
        });

    
    var $featureBoxes = $('.features-box');
    
    $featureBoxes.on('click', function (){
        
        var $activeBox = $(this);
        
        $featureBoxes
            .removeClass("active");

        $activeBox
            .addClass("active");

    });
    
     var $featureBoxes = $('.features-box');
    
    $featureBoxes.on('click', function (){
        
        var $activeBox = $(this);
        
        $featureBoxes
            .addClass("hide");

        $activeBox
            .removeClass("hide");

    });
    
    
    var $kruis = $('.kruis');
    $kruis.on('click', function (e) {
        e.stopPropagation();
        var $activeBox = $(this);
        $featureBoxes
            .removeClass("active");
         $featureBoxes
            .removeClass("hide");
    });
    
    
    
    /**
     * Screenshot slider
     */
    var $slidesButtons = $(".slides-button");
    var $slidesItems = $(".slides-item");
    var $screenItems = $(".screen-item");
    $slidesButtons
        .on("click", function () {
            var $activeSlidesButton = $(this);
            var index = $activeSlidesButton.index();

            $slidesButtons
                .addClass("btn-secondary")
                .removeClass("btn-primary");

            $activeSlidesButton
                .addClass("btn-primary")
                .removeClass("btn-secondary");

            $slidesItems
                .hide()
                .eq(index)
                    .show();

            $screenItems
                .hide()
                .eq(index)
                    .show();
            
        })
        .first()
            .trigger("click");
});










var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "0px";
for (i = 0; i < menu.length; i++){menu[i].style.top="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "100%") {
	nav.style.height = "50px";
	main.style.marginTop = "0px";
	
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.top="100px";
	};
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "100%";
	main.style.marginTop = "0px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.top="0px";
	};
	
	}
//////// SKILL BARS //////////
};

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});



/////////////////////////////////////
