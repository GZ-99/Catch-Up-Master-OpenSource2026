export class Article {
  constructor(
    public source: string,
    public author: null | string,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage:  null | string,
    public publishedAt: string,
  ) {
  }
}
