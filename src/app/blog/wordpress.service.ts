import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
//import { Post } from '../models/post';

export class Post {
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = `http://localhost/wpangular/admin/wp-json/wp/v2/`;
  totalPosts = null;
  pages: any;
  private post: Post = new Post;
  public tags: Array<{}> = [];


  constructor(private http: HttpClient) { }


  // getPosts(): Observable<any[]> {

  //   return this.http.get<any[]>(`${this.url}posts?_embed`,  {
  //     params: {
  //       per_page: '6',
  //     }
  //   });
  // }

  getPosts(page = 1): Observable<any[]> {

    let options = {
      params: {
        per_page: '6',
        page: '' + page
      }
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {

        let data = resp;

        for (let post of data) {

          if (post.featured_media == 0 || post._embedded['wp:featuredmedia'][0].media_details == undefined) {
            post.media_url = null;
          }
          else {
            post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
          }
        }
        return data;
      }),
      catchError(val => of(val))
    )
  }

  getPostContent(id:number) {
    return this.http.get(`${this.url}posts/${id}`).pipe(
      map(post => {
        
        return post;
      })
    )
  }

  fetchPost(post_id: string) {
    return this.http
      .get(`${this.url}/wp-json/wp/v2/posts/${post_id}?_embed`)
      .pipe(map((post: any) => (post)));
  }

  // getPostContent(post_id: string) {
  //   return this.http
  //     .get(`${this.url}posts/${post_id}?_embed`)
  //     .pipe(map((res: any) => res),
  //       flatMap((post: any) => {
  //         return forkJoin(
  //           of(new Post(post)),
  //           //this.getCategories(post),
  //           //this.getTags(post),
  //           // this.getTags([4]),
  //           //this.fetchComments(post.id),
  //         )
  //       })
  //     );
  // }

  // getTags(post) {
  //   let observableBatch = [];

  //   if (post.tags == 0 || post.tags == undefined) {
  //     observableBatch.push(this.getTag(15));
  //     console.log(this.getTag(15))
  //       return forkJoin(observableBatch) || of([]) ;
        
  //   } else {
  //     post.tags.forEach(tag => {
  //       observableBatch.push(this.getTag(tag));
  //       console.log(this.getTag(tag))
  //     });
  //   }
  //   return forkJoin(observableBatch);
  // }


  // getTag(post_tag: number): Observable<Tag> {
  //   return this.http.get(`${this.url}tags/${post_tag}`).pipe(
  //     map(tag => {

  //       return new Tag(tag);

  //     }),
  //     catchError(val => of(val))

  //   );

  // }

  // fetchPostCategories() {
  //   return this.http.get(`${this.url}categories`);
  // }

  // fetchPostTags() {
  //   return this.http.get(`${this.url}tags`);
  // }

  // getCategories(post) {
  //   let observableBatch = [];

  //   post.categories.forEach(category => {
  //     observableBatch.push(this.getCategory(category));
  //   });

  //   return forkJoin(observableBatch);
  // }

  // getCategory(categoryid: number): Observable<Category> {
  //   return this.http.get(`${this.url}categories/${categoryid}`).pipe(
  //     map(category => {
  //       return new Category(category);
  //     }),
  //     catchError(val => of(val))
  //   );
  // }


  // fetchPostsByCategory(category_id: string) {
  //   return this.http
  //     .get(
  //       `${this.url}posts?_embed&categories=${category_id}`
  //     )
  //     .pipe(
  //       map((posts: Array<any>) => posts.map(
  //         post => {
  //           post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
  //           return post;
  //         }
  //       ))
  //     );
  // }

  // fetchPostsByTag(post_tag: string) {
  //   return this.http
  //     .get(
  //       `${this.url}posts?_embed&tags=${post_tag}`
  //     )
  //     .pipe(
  //       map((posts: Array<any>) => posts.map(
  //         post => {
  //           post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;

  //           console.log(post['_embedded']['wp:featuredmedia'])
  //           return post;
  //         }
  //       ))
  //     );
  // }
  


  fetchPostCategories() {
    return this.http.get(`${this.url}categories`);
  }

  fetchPostTags() {
    return this.http.get(`${this.url}tags`);
  }


  //WP Global Search
  public search(searchKeyword: string, page: number): any {
    return this.http.get(`${this.url}posts?_embed&?status=publish&search=${searchKeyword}`);
  }

  //WP Filtering All Posts

  get(searchQuery: string = '') {
    return this.http.get(`${this.url}posts?_embed&?status=publish&search=${searchQuery}`);
  }

}
