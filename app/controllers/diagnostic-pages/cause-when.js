export default Ember.Controller.extend({
  selected: null,
  optional: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectWhen(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      this.set('selected', this.get('option'));
      this.set('array', [this.get('param'), this.get('selected'), this.get('optional')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-media').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});
