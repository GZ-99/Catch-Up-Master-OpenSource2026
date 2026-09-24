import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { NewsPage } from '../../../../news/presentation/news-page/news-page';

@Component({
  imports: [Toolbar, NewsPage],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}

