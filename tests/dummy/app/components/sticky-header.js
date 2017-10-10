import Ember from 'ember';
import Stickyfill from 'stickyfill';

export default Ember.Component.extend({
  tagName: 'h1',

  didRender() {
    Stickyfill.addOne(this.element);
  },

  willDestroy() {
    Stickyfill.removeOne(this.element);
  },
});
