import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule  } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ModalComponent } from './UI/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    ArticleDetailComponent,
    ModalComponent,
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
