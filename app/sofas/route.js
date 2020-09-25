import Route from '@ember/routing/route';

export default class SoftFurnitureSofasRoute extends Route {

  async model() {
    const response = (await fetch(`/sofas`)).json().then(data => {
      return data;
    })
    const items = await response;
    return {items};
  }
}
