import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.scss']
})
export class CategoryPostsComponent implements OnInit {

  posts: any = [];
  page = 1;
  count = null;
  p: number = 1;
  searchQuery: string ='';

  constructor(

    private wp: WordpressService
  ) { }

  ngOnInit(): void {

    this.loadPosts();
  }

    async loadPosts() {
 
    this.wp.getPosts().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
    });
  }

}
