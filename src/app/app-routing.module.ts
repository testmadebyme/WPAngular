import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './blog/all-posts/all-posts.component';
import { PostComponent } from './blog/post/post.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CategoryPostsComponent } from './blog/category-posts/category-posts.component';
import { CategoryListComponent } from './blog/category-list/category-list.component';
import { TagsListComponent } from './blog/tags-list/tags-list.component';


const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'all-posts', component: AllPostsComponent },
  { path: 'category-posts', component: CategoryPostsComponent  },
  { path: 'post/:id', component: PostComponent },

  { path: 'categoty-list', component: CategoryListComponent  },
  { path: 'tags-list', component: TagsListComponent },

  // Core Block 404 Error
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
