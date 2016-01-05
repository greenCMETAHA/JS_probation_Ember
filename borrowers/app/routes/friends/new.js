import Ember from 'ember';

export default Ember.Route.extend({
  model() {
       return this.store.createRecord('friend');
  },
  actions: {
    // cancel(){
    //  console.log('+- cancel action in bubbled up new ');
    //
    //  return true;
    //},
    activate(){
      console.log('---------activate hook called -------------');
    },
    deactivate(){
      console.log('---------de!!!!!activate hook called -------------');
    },
    resetController: function (controller, isExiting, transition){
      if (isExiting){
        var model = controller.get('model');

        model.rollback();

        //if (model.get('isNew')){
        //  model.destroyRecord();
        //}
        //console.log('---------resetController hook called -------------');
      }

    },

  }


});
