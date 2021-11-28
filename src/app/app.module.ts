import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListComponentComponent } from './list-component/list-component.component';
import {FormsModule} from "@angular/forms";
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ModalComponent } from './UI/modal/modal.component';
import { ButtonComponent } from './UI/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ListComponentComponent,
    ArticleDetailComponent,
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
