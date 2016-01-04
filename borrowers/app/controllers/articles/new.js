import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    'model.notes',
    {
      get(){
        console.log(this);
        return !Ember.isEmpty(this.get('model.description')) &&
          !Ember.isEmpty(this.get('model.notes'))
          ;
      }
    }
  ),
  actions: {
    save(){
      this.set('errorMessage','');
      if (this.get('isValid')) {
        this.get('model').save().then(() => {
          this.transitionToRoute('friends');
        });
      } else {
        this.set('errorMessage','You have to fill all the fields of article');
      }
      return true;
    },
    cancel(){
      return true;
    }
  }

});
