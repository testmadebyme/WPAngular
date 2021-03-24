import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { WordpressService } from '../wordpress.service';
// import { Category } from 'src/app/models/category';

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: object;

  // constructor(values: Object = {}) {
  //   Object.assign(this, values);
  // }
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public categories$: any;
  public items: Array<
  { title: string; 
  note: string; 
  icon: string 
  count:string;
}> = [];
  // count:string;

  constructor(
    private wp: WordpressService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categories$ = this.wp.fetchPostCategories();
    console.log(this.wp.fetchPostCategories());
    console.log(this.categories$ )
    console.log(this.items)
  }
  

  getNavigation(item: Category){
     if(item.count === 0 || this.items === undefined ){
       console.log(this.items)
         this.router.navigate(['/category-empty']);
     } else {
         this.router.navigate(['/category-posts', item.id]);
     }
    
    
}

}
