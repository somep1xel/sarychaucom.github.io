var PageSlider = Backbone.View.extend({

  el: '.page-slider',
  sliderView: null,

  events: {
    'mouseover .menu': 'showMenuActions'
  },

  initialize: function() {
    console.log('PageSlider');

    var contentWidth = $('.content').width();
    sliderView = new SliderView({el:'.slider', width: contentWidth, rotationType: 'fading'});
  },

  showMenuActions: function() {
    sliderView.setTopPositionForImageInsideSlide();
    sliderView.setArrowsPosition();
  },

  render: function() {
    sliderView.render();

    $("img").on('load', function(){
      if ($(window).width() >=1000){
        sliderView.setArrowsPosition();
      }
    });
  }

});
