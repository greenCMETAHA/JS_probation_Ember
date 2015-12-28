import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get(){
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'))
      }
    }
  ),
  actions: {
    save(){
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage','You have to fill all the fields');

      }


      //console.log('+- save action in friends new controller');

      return false;
    },
    cancel(){
      this.transit
      //console.log('+- cancel action in friends new controller');

      return false;
    }
  }
});
