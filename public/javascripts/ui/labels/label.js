dc.ui.Label = dc.View.extend({
  
  className : 'label',
  
  callbacks : [
    ['.delete_bullet',    'click',    'deleteLabel']
  ],
  
  constructor : function(options) {
    this.base(options);
    this.model.view = this;
  },
  
  render : function() {
    $(this.el).html(dc.templates.LABEL_VIEW(this.model.attributes()));
    this.setCallbacks();
    return this;
  },
  
  deleteLabel : function(e) {
    e.stopPropagation();
    Labels.destroy(this.model);
  }
  
});
