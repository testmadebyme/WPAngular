import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-best-posts',
  templateUrl: './best-posts.component.html',
  styleUrls: ['./best-posts.component.scss']
})
export class BestPostsComponent implements OnInit {

  posts: any = [];
  page = 1;
  count = null;

  constructor(
    private wp: WordpressService
  ) { }

  ngOnInit(): void {
    this.loadPosts();
    
  }

  async loadPosts() {
    this.wp.getPosts().subscribe(res => {
      // this.count = this.wp.totalPosts;
      this.posts = res;
    });

  }
  
  loadMore(event:any) {
    this.page++;

    this.wp.getPosts(this.page).subscribe(res => {
      this.posts = [...this.posts, ...res];
      event.target.complete();

      // Disable infinite loading when maximum reached
      if (this.page == this.wp.pages) {
        event.target.disabled = true;
      }
    });
  }

}
