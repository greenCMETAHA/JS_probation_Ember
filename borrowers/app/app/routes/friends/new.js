import Ember from 'ember';

export default Ember.Route.extend({
  model() {
       return this.store.createRecord('friend');
  },
  actions: {
     cancel(){
      console.log('+- cancel action in bubbled up new ');

      return true;
    }




  }


});
