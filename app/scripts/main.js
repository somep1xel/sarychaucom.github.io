// Initialize the router
$(document).ready(function() {
    var router = new PageRouter();
    Backbone.history.start({
        pushState: true      });
 });

var menuToggler = function(){
    $(".menu").toggleClass("open");
}

var menuShow = function(){
    if ($(".container .menu").hasClass("view-mode")){
        $(".container .menu").removeClass("view-mode");
        $(".container .content").removeClass("wide-mode");
    };
}

var menuHide = function(){
    $(".container .menu").addClass("view-mode");
    $(".container .content").addClass("wide-mode");
}

var scrollPageToDescription = function(){
    $('.page-scroller').scrollTo(1000, 600);
}

$(".menu .hamburger").on("click", menuToggler);

$(".menu").on("mouseover", menuShow);
$(".page-scroller .scroller .slides").on("scroll", menuHide);
$(".page-scroller .arrow").on("click", scrollPageToDescription);
$(".fnb.page-text .content").on("scroll", menuHide);

var ipLookUp = function(){
    return $.get("https://ipinfo.io", function (response) {
        return response.country;
    }, "jsonp").fail(function() {
    return false;
  });
  }


ipLookUp().done(function(response) {
    console.log(response.country);
	if (response.country == 'BY') {
		$('.non-belarus').hide();
	}
});

