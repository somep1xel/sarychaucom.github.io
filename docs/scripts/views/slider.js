var SliderView = Backbone.View.extend({

  el: '.slider',
  slidesContainer: '.slider .slides',
  sliderWidth: null,
  rotationType: 'fading',

  events: {
    'click li img': 'nextSlide',
    'click .forward': 'nextSlide',
    'click .back': 'previousSlide',
    'touchstart li img': 'nextSlide'
  },

  initialize: function(options) {
    sliderWidth = options.width;
    rotationType = options.rotationType;

    this.model = new SliderData({'numberOfSlides': this.$el.find('li.item').length});
    if (rotationType == 'dragging'){
      $(this.slidesContainer).css('width', sliderWidth * this.$el.find('li.item').length);
      this.$el.find('li.item').css('width', sliderWidth);
    }
    else if(rotationType === 'fading'){
      $(this.slidesContainer + ' li.item:eq(0)').addClass('active');
      this.arrowsProcessing(0);
    }
    this.$el.find('.pager .current').html(1);
    this.$el.find('.pager .all').html('/ ' + this.$el.find('li.item').length);
    var self = this;
    $(window).on('keydown', function(){self.keyPress(event);});
  },

  keyPress: function(event){
    var code = event.keyCode || event.which;
    if(code == 39) {
      this.nextSlide();
    }
    else if(code == 37) {
      this.previousSlide();
    }
  },

  setTopPositionForImageInsideSlide: function(){
    var paddingTop = $(this.slidesContainer).find('li.item').not('.description').height() - $(this.slidesContainer).find('li.item img').height();
    $(this.slidesContainer).find('li.item img').not('.internal').css('top', paddingTop / 2 + 'px');
  },

  setArrowsPosition: function(){
    var forwardArrowShift = $(this.slidesContainer).find('li.item').width()/2 + $(this.slidesContainer).find('li.item img').width()/2;
    var backArrowShift = $(this.slidesContainer).find('li.item').width()/2 - $(this.slidesContainer).find('li.item img').width()/2;
   // this.$el.find('.arrow.forward').css('left', parseInt(forwardArrowShift) + 'px');
   // this.$el.find('.arrow.back').css('left', parseInt(backArrowShift-this.$el.find('.arrow').width()) + 'px');
  // this.$el.find('.pager').css('left', forwardArrowShift + this.$el.find('.arrow').width()/2 - 20 + 'px');
  },

  nextSlide: function(){
    var currentSlide = this.$el.find('li.item');
    this.model.nextSlide();
    this.showSlide(this.model.attributes.selectedSlide);
  },

  previousSlide: function(){
    this.model.previousSlide();
    this.showSlide(this.model.attributes.selectedSlide);
  },

  showSlide: function(activeSlideNumber){
    if (rotationType == 'dragging'){
      $(this.slidesContainer).css('left','-' + sliderWidth * activeSlideNumber + 'px');
    }
    else{
      $(this.slidesContainer + ' li.item').removeClass('active');
      $(this.slidesContainer + ' li.item:eq('+activeSlideNumber+')').addClass('active');
      this.$el.find('.pager .current').html(activeSlideNumber+1);
      this.arrowsProcessing(activeSlideNumber);
    }
  },

  arrowsProcessing: function(activeSlideNumber){
      if (activeSlideNumber == 0){
        this.$el.find('.arrow').addClass('dark');
//        this.$el.find('.arrow.forward').addClass('shifted-top');
        this.$el.find('.arrow.back').hide();
      }
      else{
        this.$el.find('.arrow').removeClass('dark');
      //  this.$el.find('.arrow.forward').removeClass('shifted-top');
        this.$el.find('.arrow.back').show();
      }
  },

  menuHide: function(){
    $(".page-slider.container .menu").addClass("view-mode", 400);
    $(".page-slider.container .content").addClass("wide-mode", 400);
    this.setTopPositionForImageInsideSlide();
    this.setArrowsPosition();
  },

  render: function() {
    self = this;
    $("img").on('load', function(){
      self.setTopPositionForImageInsideSlide();
    });
    console.log('slider render');
  }
});
