  var slideItem = Backbone.Model.extend({
    defaults: {
      type: '',
      filePath: '',
      infoCaption: '',
      infoDate: ''
    }
  });

  return slideItem;