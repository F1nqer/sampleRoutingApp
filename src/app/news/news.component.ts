import { Component, OnInit } from '@angular/core';
import {Computer} from '../shared/computer';
import {NewsService} from '../news.service';
import {News} from '../shared/news';
import {concat, from, of} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];
  new: News[];
  ids: number[];
  errMsg: string;
  constructor(private newsService: NewsService) { }
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe(news => this.news = news,
        error => this.errMsg = error);
  }
  // tslint:disable-next-line:typedef
  magic(){
    const obs = from(this.news).pipe(filter(n => n.id % 2 !== 0));
  }
  // tslint:disable-next-line:typedef
  // magicconcat(){
  //   const obs = from(this.news).pipe(concat())
  //   this.new = this.news.concat();
  //   this.news = this.new;
  // }

}
