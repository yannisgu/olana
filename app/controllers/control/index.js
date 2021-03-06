import Ember from 'ember';

export default Ember.Controller.extend({
  
  fromControls: function() {
    var categories = this.get('model.categories');
    var code = this.get('model.code');
    var result = { };
    categories.forEach(function(category) {
      if (!result[category.from]) {
        result[category.from] = { from: category.from, leg: category.from + '-' + code };
      }
    });
    return Object.keys(result).map(function(key) { return result[key]; });
  }.property('model.categories.[]'),
  
  toControls: function() {
    var categories = this.get('model.categories');
    var code = this.get('model.code');
    var result = { };
    categories.forEach(function(category) {
      if (!result[category.to] && code !== 'Zi') {
        result[category.to] = { to: category.to, leg: code + '-' + category.to };
      }
    });
    return Object.keys(result).map(function(key) { return result[key]; });
  }.property('model.categories.[]')
  
});
