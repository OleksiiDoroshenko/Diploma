import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({

  init() {
    this._super(...arguments);

    debugger;
    this.items = [
      {
        name: 'Диваны',
        imgPath: 'assets/images/7.jpg'
      },
      {
        name: 'Канапе / тахты',
        imgPath: 'assets/images/9.jpg'
      },
      {
        name: 'Кресла',
        imgPath: 'assets/images/10.png'
      },
      {
        name: 'Пуфы, банкетки',
        imgPath: 'assets/images/11.jpgg'
      },
    ];
  },

  sofas: computed('items', () => {
    debugger
    return [
      {
        name: 'Диваны',
        imgPath: 'assets/images/7.jpg'
      },
      {
        name: 'Канапе / тахты',
        imgPath: 'assets/images/9.jpg'
      },
      {
        name: 'Кресла',
        imgPath: 'assets/images/10.png'
      },
      {
        name: 'Пуфы, банкетки',
        imgPath: 'assets/images/11.jpgg'
      },
    ];
  }),
})
