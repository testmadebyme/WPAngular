import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  posts: any = [];
  page = 1;
  count = null;
  p: number = 1;
  searchQuery: string ='';



  constructor(
    private wp: WordpressService
  ) { }

  ngOnInit() {

    this.loadPosts();
  }

  // async loadPosts() {
 
  //   this.wp.getPosts().subscribe(res => {
  //     this.count = this.wp.totalPosts;
  //     this.posts = res;
  //   });
  // }

  onSearch() {
    this.posts = [];
    this.loadPosts();
    // this.router.navigate(['/'])
  }

  loadPosts() {
    this.wp.get(`posts?_embed&?status=publish`+`&search=`+this.searchQuery).subscribe((data) =>{
      this.posts = data;
      this.count = this.wp.totalPosts;
    })
  }

  clearSearch(){
    this.searchQuery = '';
    this.posts = [];
  }

}
