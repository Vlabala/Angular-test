import { Injectable } from '@angular/core';
import {ArticleItem} from "./typescriptInterfaces";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  private Articles: Array<ArticleItem> = [];
  public AddArticle(newArticle:ArticleItem): Array<ArticleItem>{
    this.Articles.push(newArticle);
    return this.Articles;
  }
  public changeArticle(newArticle:ArticleItem,index : number): boolean{
    if(this.Articles && this.Articles[index]){
      this.Articles[index] = newArticle;
      return true
    }
    return false
  }
  public deleteArticle(index : number): boolean{
    if(this.Articles && this.Articles[index]){
      this.Articles.splice(index);
      return true
    }
    return false
  }
  public GetArticles(): Array<ArticleItem>{
      return this.Articles;
  }
  public GetArticleByIndex(index:number): ArticleItem{
      return this.Articles && this.Articles[index];
  }
}
