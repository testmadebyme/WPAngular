import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MaterialeModule } from './materiale.module ';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShareModule } from 'ngx-sharebuttons';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloComponent } from './core/hello/hello.component';
import { GoToTopComponent } from './core/go-to-top/go-to-top.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { BestPostsComponent } from './blog/best-posts/best-posts.component';

import { ActionComponent } from './core/action/action.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllPostsComponent } from './blog/all-posts/all-posts.component';
import { PostComponent } from './blog/post/post.component';
import { SearchComponent } from './sidebar/search/search.component';
import { PartnersBannerComponent } from './sidebar/partners-banner/partners-banner.component';
import { CategoryPostsComponent } from './blog/category-posts/category-posts.component';
import { CategoryListComponent } from './blog/category-list/category-list.component';
import { TagsListComponent } from './blog/tags-list/tags-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoToTopComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BestPostsComponent,

    ActionComponent,

    AllPostsComponent,

    PostComponent,

    SearchComponent,

    PartnersBannerComponent,

    CategoryPostsComponent,

    CategoryListComponent,

    TagsListComponent
  ],
  imports: [
    BrowserModule, MaterialeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, 
    FontAwesomeModule, NgxPaginationModule, ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
