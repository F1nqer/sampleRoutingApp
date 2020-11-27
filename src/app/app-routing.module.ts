import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromotionComponent } from './promotion/promotion.component';
import { NewsComponent } from './news/news.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import {ComputerDetailComponent} from "./computer-detail/computer-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'promotion',
        component: PromotionComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'computerList',
        component: ComputerListComponent
      },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'computerDetail/:id', component: ComputerDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [ HomeComponent, AboutComponent, ContactComponent, PageNotFoundComponent,
  PromotionComponent, NewsComponent, ComputerListComponent, ComputerDetailComponent ];
