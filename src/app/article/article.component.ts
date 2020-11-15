import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = null;

  constructor(
    private route: ActivatedRoute,
    private articleServices: ArticleService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleServices.getArtcle(key).subscribe(article => {
        this.article = article;
        console.log('get single article : ' , this.article)
      });
    });
  }

}
