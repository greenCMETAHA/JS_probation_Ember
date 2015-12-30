import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed (
    'model.email',
    'model.twitter',
    'model.firstName',
    'model.lastName',
    function(){
      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.twitter')) &&
        !Ember.isEmpty(this.get('model.firstName')) &&
        !Ember.isEmpty(this.get('model.lastName'));
    }
  ),
  actions:{
    save(){
      if (this.get('isValid')){
        var _this=this;
        this.get('model').save().then(function(friend){
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage','You have to fill all the fields');
      }
      return false;
    },
    cancel(){
      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
