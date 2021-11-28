import { Injectable } from '@angular/core';
import {ArticleItem} from "./typescriptInterfaces";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private Articles: Array<ArticleItem> = [];

  constructor() {}

  /**
   * addArticle добавляет статью в массив статей
   * @param newArticle - объект статьи
   */
  public addArticle(newArticle: ArticleItem): boolean{
    if(newArticle.title && newArticle.content){
      this.Articles.push(newArticle);
      return true
    }
    return false
  }

  /**
   * changeArticle изменяет статью
   * @param newArticle - объект статьи
   * @param index - индекс статьи
   */
  public changeArticle(newArticle: ArticleItem, index : number): boolean{
    if(this.Articles && this.Articles[index]){
      this.Articles[index] = newArticle;
      return true
    }
    return false
  }


  /**
   * deleteArticle удаляет статью
   * @param index - индекс статьи
   */
  public deleteArticle(index: number): boolean{
    if(this.Articles && this.Articles[index]){
      this.Articles.splice(index);
      return true
    }
    return false
  }


  /**
   * getArticles возвращает список статей
   */
  public getArticles(): Array<ArticleItem>{
      return this.Articles;
  }


  /**
   * getArticleByIndex возвращает статью по индексу
   * @param index - индекс статьи
   */
  public getArticleByIndex(index: number): ArticleItem{
      return this.Articles && this.Articles[index];
  }
}
