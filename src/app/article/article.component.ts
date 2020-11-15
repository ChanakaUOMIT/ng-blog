import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(
    private route: ActivatedRoute,
    private articleServices: ArticleService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleServices.getArtcle(key).subscribe(article => {
        if ( article === undefined ) {
          this.router.navigateByUrl('');
          return;
        }
        this.article = article;
        console.log('get single article : ' , this.article)
      });
    });
  }

}
