import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleItem} from "../typescriptInterfaces";
import {ArticlesService} from "../articles.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  public article: ArticleItem;
  public index: number;
  constructor(private _articlesService: ArticlesService,private _activatedRoute : ActivatedRoute, private _route : Router) { }

  ngOnInit(): void {
    this.index = parseInt(this._activatedRoute.snapshot.paramMap.get('index') || "");
    if(!(this.article = this._articlesService.GetArticleByIndex(this.index))){
      this._route.navigate(['/']);
    }
  }
  onGoBack(){
    this._route.navigate(['/']);
  }
  onDelete(index : number){
    this._articlesService.deleteArticle(this.index);
  }
  onSave(article:ArticleItem,index : number){
    this._articlesService.changeArticle(this.article,this.index);
  }
}
