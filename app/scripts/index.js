var IndexPage = Backbone.View.extend({

  el: '.index',
  sliderView: null,

  events: {
    'click .slider li': 'nextSlide'
  },

  initialize: function() {
    console.log('index');

    var contentWidth = $('.content').width();
    sliderView = new SliderView({el:'.slider', width: contentWidth, rotationType: 'dragging'});
  },

  nextSlide: function(){
    sliderView.nextSlide();
  },

  render: function() {
    sliderView.render();
  }

});