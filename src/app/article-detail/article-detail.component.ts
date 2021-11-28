import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ArticleItem} from "../typescriptInterfaces";
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  public article: ArticleItem;
  public index: number;
  constructor(
    private _articlesService: ArticlesService,
    private _activatedRoute : ActivatedRoute,
    private _route : Router
  ) {}

  ngOnInit(): void {
    this.index = parseInt(this._activatedRoute.snapshot.paramMap.get('index') || "");
    if(!(this.article = this._articlesService.getArticleByIndex(this.index))){
      this._route.navigate(['/']);
    }
  }

  /**
   * onGoBack возвращает на предыдущую страницу
   */
  onGoBack(){
    this._route.navigate(['/']);
  }

  /**
   * onDelete удаляет статью
   * @param index - индекс статьи
   */
  onDelete(index: number){
    if(confirm("Удалить статью '"+this.article.title+"'?")){
      this._articlesService.deleteArticle(this.index);
      this._route.navigate(['/']);
    }
  }

  /**
   * onSave сохраняет текущую статью
   * @param article - объект статьи
   * @param index - индекс статьи
   */
  onSave(article: ArticleItem,index: number){
    this._articlesService.changeArticle(this.article,this.index);
    this._route.navigate(['/']);
  }
}
