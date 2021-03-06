import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap  } from '@angular/router';
import {AppComponent} from "./app.component";
import {ListComponentComponent} from "./list-component/list-component.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

const routes: Routes = [
  {path:'', component:ListComponentComponent},
  {path:'detail/:index', component:ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
