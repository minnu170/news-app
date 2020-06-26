import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 mArticles: any;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    // load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['']
    );
    console.log(this.mArticles, 'data');
  }
}
