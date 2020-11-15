import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';
import { SharedService } from '../services/shared.service';

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
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleServices.getArtcle(key).subscribe(article => {
        if ( article === undefined ) {
          this.router.navigateByUrl('404');
          return;
        }
        this.article = article;
        this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);
        this.meta.addTags([
          { name: 'description', content: this.article.description},
          { name: 'og:title', content: `${this.article.title} - ${this.sharedService.blogTitle}`},
          { name: 'og:type', content: 'website'},
          { name: 'og:url', content: this.sharedService.baseUrl + this.article.key},
          { name: 'og:image', content:  this.article.imageUrl},
          { name: 'og:description', content:  this.article.description},
          { name: 'og:site_name', content:  this.sharedService.blogTitle}


        ]);
        console.log('get single article : ' , this.article);
      });
    });
  }

}
