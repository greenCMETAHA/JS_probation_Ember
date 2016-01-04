import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
    namespace:'api/v2',
  actions: {
    save(){
      console.log('+- save action in bubbled up application');

      return true;
    },
    cancel(){
      console.log('+- cancel action in bubbled up application');

      return true;
    }

  }
});
