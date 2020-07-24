export class MarvelService {
  // _apiBase = 'https://gateway.marvel.com:443/v1/public';
  _apiBase = 'http://localhost:3004';

  getResource = async (url: string) => {
    const resolvedURL = `${this._apiBase}/${url}`;
    const result = await fetch(resolvedURL);

    if (!result.ok) {
      throw new Error(`Could not fetch ${resolvedURL}. 
                       Received, ${result.status}`);
    }

    const json = await result.json();
    this.checkError(json, resolvedURL);
    return json;
  };

  checkError = (payload: any, url: string) => {
    if (!String(payload.code).startsWith('2')) {
      throw new Error(`Could not fetch ${url}. 
                       Received, ${payload.status}`);
    }
  };

  getAllCharacters = async () => {
    const payload = await this.getResource('characters');
    return this._transformData(payload);
  };

  getCharacter = async (id: number) => {
    const payload = await this.getResource(`characters/${id}`);
    const transformedData = this._transformData(payload);
    return this._transformCharacter(transformedData);
  };

  getAllCreators = async () => {
    return this.getResource('/creators');
  };

  getAllEvents = async () => {
    return this.getResource('/events');
  };

  getAllSeries = async () => {
    return this.getResource('/series');
  };

  getAllStories = async () => {
    return this.getResource('/stories');
  };

  getAllComics = async () => {
    const payload = await this.getResource('comics');
    return this._transformData(payload);
  };

  getComics = async (id: number) => {
    const payload = await this.getResource(`comics/${id}`);
    const transformedData = this._transformData(payload);
    return this._transformComics(transformedData);
  }

  _transformData = (payload: any) => {
    const { data: { results }} = payload;
    return results;
  }

  _transformCharacter = (payload: any) => {
    const { 
      id,
      name, 
      description, 
      thumbnail: { path, extension},
      modified 
    } = payload[0];
    return {
      id,
      name,
      description,
      imgSrc: `${path}.${extension}`,
      modified
    }
  };

  _transformComics = (payload: any) => {
    const { 
      id,
      title, 
      description, 
      thumbnail: { path, extension},
      pageCount,
      format,
      modified
    } = payload[0];
    return {
      id,
      name: title,
      description,
      imgSrc: `${path}.${extension}`,
      pageCount,
      format,
      modified
    }
  };
}