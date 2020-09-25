import Route from '@ember/routing/route';

export default class InfoRoute extends Route {

  async model(params) {
    const response = (await fetch(`/sofas/${params.id}`)).json().then(data => {
      return data;
    })
    return response;
  }
}
