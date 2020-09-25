import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cs-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CsHeader />`);

    assert.equal(this.element.textContent.trim(), '+38 (095) 888-888-88\n' +
      '        |\n' +
      '        +38 (067) 777-777-77\n' +
      '      \n' +
      '      Звоните нам ежедневно с 10:00 до 21:00 или напишите нам\n' +
      '    \n' +
      '    \n' +
      '      \n' +
      '        \n' +
      '        \n' +
      '          Поиск\n' +
      '        \n' +
      '      \n' +
      '    \n' +
      '  \n' +
      '  \n' +
      '  \n' +
      '    \n' +
      '      \n' +
      '        Товары\n' +
      '      \n' +
      '      \n' +
      '        Оплата\n' +
      '      \n' +
      '      \n' +
      '        Доставка\n' +
      '      \n' +
      '      \n' +
      '        Корзина\n' +
      '      \n' +
      '      \n' +
      '        Вход');
  });
});
