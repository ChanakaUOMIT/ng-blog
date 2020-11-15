import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-artile-list',
  templateUrl: './artile-list.component.html',
  styleUrls: ['./artile-list.component.css']
})
export class ArtileListComponent implements OnInit {

  arricles: Article[] = []

  constructor() { }

  ngOnInit() {
    this.arricles = ARTICLES;
    console.log("article-list : articles ", this.arricles)
  }

}
