import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  Articles: any;
  mSources: Array<any>;
  expanded = false;
  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    // load articles
    this.newsapi.initArticles().subscribe(data => {
    this.Articles = data;
    console.log(this.Articles, 'data');
    }
    );
  }
  show()  {
    this.expanded = true;
  }
}
