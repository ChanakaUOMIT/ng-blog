import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-artile-list',
  templateUrl: './artile-list.component.html',
  styleUrls: ['./artile-list.component.css']
})
export class ArtileListComponent implements OnInit {

  arricles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => this.arricles = articles);
  }

}
