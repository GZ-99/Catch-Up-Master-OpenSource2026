import {Component, inject, signal} from '@angular/core';
import {NewsStore} from '../../application/news.store';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-news-page',
  styleUrl: './news-page.css',
  templateUrl: './news-page.html',
})
export class NewsPage {
  protected readonly store = inject(NewsStore);
  protected readonly query = signal('tesla');

  ngOnInit() {
    this.searchArticles();
  }

  searchArticles() {
    const query = this.query().trim();
    if (query) {
      this.store.searchArticles(query);
    }
  }
}
