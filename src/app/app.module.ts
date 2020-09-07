import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducers, appMetaReducers } from './app.reducer';

import { SharedModule } from './modules/shared.module';
import { CoreModule } from './modules/core.module';

import {APP_BASE_HREF} from '@angular/common';


import { environment } from '../environments/environment';
import { httpInterceptorProviders } from './app-interceptors';

import { MapModule } from './modules/map/map.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ArticlesModule } from './modules/articles/articles.module';
import { EuropaModule }   from './modules/europa/europa.module';
import { TromelinModule }   from './modules/tromelin/tromelin.module';
import { BannierecookieComponent } from './modules/bannierecookie/bannierecookie.component';

@NgModule({
  
  declarations: [
  
    AppComponent,
  
    BannierecookieComponent
  ],

  imports: [

    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    MapModule, SharedModule, CoreModule,

    StoreModule.forRoot( reducers, {
      metaReducers: appMetaReducers
    } ),

    ArticlesModule, EuropaModule, TromelinModule,

    AppRoutingModule,


  ],
  
  providers: [
    httpInterceptorProviders,
    {provide: APP_BASE_HREF, useValue: environment.basepath}
  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
