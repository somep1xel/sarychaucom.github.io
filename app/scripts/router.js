var PageRouter = Backbone.Router.extend({
  routes: {
    'index.html'  : 'homePage',
    'man-month.html'  : 'manMonthPage',
    'exhibitions.html'  : 'exhibitionsPage',
    'docs/publications.html'  : 'publicationsPage',
    'a-hello-to-arms.html'  : 'aHelloArmsPage',
    'led-acquired-reflex.html'  : 'acquiredReflexPage',
    'portraits.html'  : 'portraitsPage',
    '404-not-found.html'  : 'notFoundPage',
    '/*': 'homePage'
  },

  homePage: function () {
    var indexPage = new IndexPage();
    indexPage.render();
  },
  manMonthPage: function () {
    var manMonthPage = new PageSlider();
    manMonthPage.render();
  },
  aHelloArmsPage: function () {
    var aHelloArmsPage = new PageSlider();
    aHelloArmsPage.render();
  },
  acquiredReflexPage: function () {
    var acquiredReflexPage = new PageSlider();
    acquiredReflexPage.render();
  },
  exhibitionsPage: function () {
    var exhibitionsPage = new PageSlider();
    exhibitionsPage.render();
  },
  publicationsPage: function () {
		ipLookUp().done(function(response) {
			console.log(response.country);
			if (response.country === 'BY') {
				$('.slides .description .online').hide();
				$('.slider .arrow').hide();
				$('.slider .by-notice').show();
				$('.slides .description').addClass('active');
			}
			else {
		   var publicationsPage = new PageSlider();
		   publicationsPage.render();
      }
    }).fail(function() {
		   var publicationsPage = new PageSlider();
		   publicationsPage.render();
    });
  },
	portraitsPage: function () {
		var portraitsPage = new PageSlider();
		portraitsPage.render();
	},

  notFoundPage: function () {
    var notFoundPage = new PageSlider();
    notFoundPage.render();
  }
});
