var SliderData = Backbone.Model.extend({
  properties:{},
  defaults: {
    selectedSlide: 0,
    numberOfSlides: 1
  },
  nextSlide: function(){
    if (this.attributes.selectedSlide+1 === this.attributes.numberOfSlides){
      this.attributes.selectedSlide = 0;
    }
    else{
      this.attributes.selectedSlide++;
    }
  },
  previousSlide: function(){
    if (this.attributes.selectedSlide === 0){
      this.attributes.selectedSlide = this.attributes.numberOfSlides-1;
    }
    else{
      this.attributes.selectedSlide--;
    }
  }
});
