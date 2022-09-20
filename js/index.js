$(".nav-link").hover(function(){
    $(this).css("color","#B15318");},
    function(){
    $(this).css("color","#1c1c1c");

})  
/*$(".projB").hover(function(){
    $(this).css("color","#B15318");},
    function(){
    $(this).css("color","#FFFFFF");

})  */
$(document).ready(function () {
    $("#chumB").click(function () {
        window.open(location.href = "images/CHUM_SlideDeck.pdf");
        return false;
    });
});
$(document).ready(function () {
    $("#mwB").click(function () {
        window.open(location.href = "images/MW_SlideDeck.pdf");
        return false;
    });
});
$(document).ready(function () {
    $("#mentorB").click(function () {
        window.open(location.href = "images/Mentor_SlideDeck.pdf");
        return false;
    });
});

$("#pSection").click(function(event) {
        
    if (this.hash !== "") {
          
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
        scrollTop: $(hash).offset().top
        }, slow, function(){
         window.location.hash = hash;
         });
         
    } 
});
$("#skills").click(function(event) {
        
    if (this.hash !== "") {
          
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
        scrollTop: $(hash).offset().top
        }, slow, function(){
         window.location.hash = hash;
         });
         
    } 
});
