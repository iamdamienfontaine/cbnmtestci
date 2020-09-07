import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleAccueilComponent } from './articles/article-accueil.component';
import { ArticleProgrammesComponent } from './articles/article-programmes.component';
import { ArticleAproposComponent } from './articles/article-apropos.component';
import { ArticleContactsComponent } from './articles/article-contacts.component';
import { ArticleMentionslegalesComponent } from './articles/article-mentionslegales.component';
import { ArticlePolitiqueconfidentialiteComponent } from './articles/article-politiqueconfidentialite.component';
import { ArticlePolitiquecookiesComponent } from './articles/article-politiquecookies.component';


const routes: Routes = [
  { path: 'accueil', component: ArticleAccueilComponent },
  { path: 'programmes', component: ArticleProgrammesComponent },
  { path: 'apropos', component: ArticleAproposComponent },
  { path: 'contacts', component: ArticleContactsComponent },
  { path: 'mentionslegales', component: ArticleMentionslegalesComponent },
  { path: 'politiqueconfidentialite', component: ArticlePolitiqueconfidentialiteComponent },
  { path: 'politiquecookies', component: ArticlePolitiquecookiesComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArticlesRoutingModule { }
