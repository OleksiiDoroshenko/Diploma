import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import {hbs} from 'ember-cli-htmlbars';

module('Integration | Component | item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Item />`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('It renders with correct data', async function (assert) {
    assert.expect(3);

    const name = 'test';
    const imgPath = 'test';
    const href = 'test';

    this.set('name', name);
    this.set('imgPath', imgPath);
    this.set('href', href);

    await render(hbs`{{item name=name imgPath=imgPath link=href }}`);

    const link = this.element.querySelector('[data-cs="link"]');

    assert.equal(link.textContent.trim(), name, 'Item should contain proper name.')
    assert.equal(link.getAttribute('href'), href, 'Item should contain proper link.')

    const img = this.element.querySelector('[data-cs="img"]');
    assert.equal(img.getAttribute('src'), href, 'Item should contain proper img source.')
  })
});
