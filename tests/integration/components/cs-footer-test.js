import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cs-footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CsFooter />`);

    assert.equal(this.element.textContent.trim(), 'Контакты\n' +
      '    \n' +
      '      \n' +
      '        \n' +
      '        Facebook\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Instagram\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Instagram\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        +38 (095) 888-888-88\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        +38 (067) 777-777-77\n' +
      '      \n' +
      '    \n' +
      '  \n' +
      '  \n' +
      '    Меню\n' +
      '    \n' +
      '      \n' +
      '        \n' +
      '        Мягкая мебель\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Корпусная мебель\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Мебель для детской\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Офисная мебель\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Мебель для спальн\n' +
      '      \n' +
      '    \n' +
      '  \n' +
      '  \n' +
      '    Разделы\n' +
      '    \n' +
      '      \n' +
      '        \n' +
      '        Контакты\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        О нас\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Полезно знать\n' +
      '      \n' +
      '      \n' +
      '        \n' +
      '        Магазины');
  });
});
