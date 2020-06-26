import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    // load articles
    this.newsapi.initArticles().subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      console.log(data, 'data');
    }
      );
    // load news sources
    // this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  // searchArticles(source) {
  //   console.log('selected source is: ' + source);
  //   this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  // }

}
