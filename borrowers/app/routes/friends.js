import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save(){
      console.log('+- save action in bubbled up friends route');

      return true;
    },
    cancel(){
      console.log('+- cancel action in bubbled up friends route');

      return true;
    },
    delete: function(friend){
      friend.destroyRecord().then(()=>{
        this.transactionTo('friend.index');
      });
    }

  }
});
