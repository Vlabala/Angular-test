import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {ArticleItem} from "../typescriptInterfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})

export class ListComponentComponent implements OnInit {

  public articlesList: Array<any>;
  public showModal: boolean = false;
  public newArticle: ArticleItem;

  constructor(private _articlesService: ArticlesService, private _router : Router ) {
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
  addArticle(newArticle : ArticleItem){
    this.articlesList = this._articlesService.AddArticle(newArticle);
    this.showModal = false;
    this.newArticle = {title:"",content:""};
  }
  onSelect(index : number){
    this._router.navigate(['/detail',index]);
  }
  ngOnInit(): void {
    this.newArticle = {title:"",content:""};
    this.articlesList = this._articlesService.GetArticles();
  }

}
