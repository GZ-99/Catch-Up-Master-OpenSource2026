import { Service } from '@angular/core';
import {ArticleResource} from './everything-response';
import {Article} from '../domain/model/article.entity';

@Service()
export class ArticleAssembler {
  toEntity(articleResource: ArticleResource): Article {
    return new Article(
      articleResource.source.name,
      articleResource.author ?? 'Sin autor',
      articleResource.title,
      articleResource.description ?? 'Sin descripción',
      articleResource.url,
      articleResource.urlToImage ?? '',
      articleResource.publishedAt.toString()
    );
  }

  toEntities(articleResources: ArticleResource[]): Article[] {
    return articleResources.map((articleResource) => this.toEntity(articleResource));
  }
}
