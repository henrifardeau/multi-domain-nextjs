import strapiClient from './strapi-client';
import strapiUrl from './strapi-url';

class Strapi {
  #url = '';

  #client = null;

  constructor(url, client) {
    this.#url = url;
    this.#client = client;
  }

  get URL() {
    return this.#url;
  }

  async getPage(page) {
    return this.#client.get(`/${page}`);
  }
}

export default new Strapi(strapiUrl, strapiClient);
