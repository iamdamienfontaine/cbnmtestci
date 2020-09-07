import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticleAccueilComponent } from './articles/article-accueil.component';
import { ArticleProgrammesComponent } from './articles/article-programmes.component';
import { ArticleAproposComponent } from './articles/article-apropos.component';
import { ArticleContactsComponent } from './articles/article-contacts.component';
import { ArticleMentionslegalesComponent } from './articles/article-mentionslegales.component';
import { ArticlePolitiqueconfidentialiteComponent } from './articles/article-politiqueconfidentialite.component';
import { ArticlePolitiquecookiesComponent } from './articles/article-politiquecookies.component';

@NgModule({
  
  declarations: [
    ArticleAccueilComponent,
    ArticleProgrammesComponent,
    ArticleAproposComponent,
    ArticleContactsComponent,
    ArticleMentionslegalesComponent,
    ArticlePolitiqueconfidentialiteComponent,
    ArticlePolitiquecookiesComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,

    ArticlesRoutingModule,
  ],

  exports: [

    ArticlesRoutingModule
    
  ]
})

export class ArticlesModule { }
