import { inject, Service } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArticleAssembler} from './article-assembler';
import {environment} from '../../../environments/environment.development';
import {map, Observable} from 'rxjs';
import {Article} from '../domain/model/article.entity';
import {EverythingResponse} from './everything-response';

@Service()
export class NewsApi {
  private readonly http = inject(HttpClient);
  private readonly assembler = inject(ArticleAssembler);
  private readonly endPoint = `${environment.newsApiBaseUrl}${environment.newsApiEndpointEverything}`; //https://newsapi.org/v2/everything

  getArticlesByQuery(query: string): Observable<Article[]> {
    return this.http.get<EverythingResponse>(
      this.endPoint,
      {
        params: {
          q: query,
          sortBy: 'publishedAt',
          apiKey: environment.newsApiKey
        }
      }
    ).pipe(
      map(response => this.assembler.toEntities(response.articles))
    );
  }
}
