import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {ArticlesService} from "../articles.service";
import {ArticleItem} from "../typescriptInterfaces";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})

export class ListComponentComponent implements OnInit {

  public articlesList: Array<ArticleItem> = [];
  public showModal: boolean = false;
  public newArticle: ArticleItem = { title: '', content: '' };

  constructor(
    private _articlesService: ArticlesService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this.articlesList = this._articlesService.getArticles();
  }

  /**
   * toggleModal показывает/скрывает модал с добавлением новой записи
   */
  toggleModal(){
    this.showModal = !this.showModal;
  }

  /**
   * addArticle берет данные полей из формы добавления новой статьи и вызывает функцию добавления новой статьи
   */
  addArticle(){
    let added = this._articlesService.addArticle({
      title: this.newArticle.title,
      content: this.newArticle.content,
    });
    if(added){
      this.showModal = false;
      this.newArticle = { title: '', content: '' };
    }
  }

  /**
   * onSelect редиректит на выбранную статью
   * @param index - индекс статьи
   */
  onSelect(index: number){
    this._router.navigate(['/detail',index]);
  }

}
