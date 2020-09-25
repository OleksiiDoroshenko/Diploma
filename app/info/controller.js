import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    select(src) {
      let img = document.querySelector('[data-cs="displayed-img"]');
      img.setAttribute('src', src);
    }
  }
});
