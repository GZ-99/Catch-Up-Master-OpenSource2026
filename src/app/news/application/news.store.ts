import {computed, inject, Service, signal} from '@angular/core';
import {NewsApi} from '../infrastructure/news-api';
import {Article} from '../domain/model/article.entity';
import {finalize} from 'rxjs';

@Service()
export class NewsStore {
  private readonly NewsApi = inject(NewsApi);
  private readonly articleState = signal<Article[]>([]);
  private readonly loadingState = signal<boolean>(false);
  private readonly errorState = signal<string | null>('');

  readonly articles = computed(() => this.errorState());
  readonly loading = computed(() => this.loadingState());
  readonly error = computed(() => this.errorState());

  searchArticles(query: string): void {
    this.loadingState.set(true);
    this.errorState.set('');
    this.NewsApi.getArticlesByQuery(query)
      .pipe(
        finalize(() => this.loadingState.set(false))
      )
      .subscribe({
        next: (articles) => {
          this.articleState.set(articles);
        },
        error: (error) => {
          this.errorState.set(error.message);
          this.loadingState.set(false);
        }
      });
  }
}
