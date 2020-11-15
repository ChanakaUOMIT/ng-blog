import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';
import { ArticleService } from '../services/article.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-artile-list',
  templateUrl: './artile-list.component.html',
  styleUrls: ['./artile-list.component.css']
})
export class ArtileListComponent implements OnInit {

  arricles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService
    ) { }

  ngOnInit() {
    this.getArticles();
    this.titleService.setTitle(` ${this.sharedService.blogTitle}`);

  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => this.arricles = articles);
  }

}
