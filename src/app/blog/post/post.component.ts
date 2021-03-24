import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  // post$: Observable<any>;
 

  constructor(
    private route: ActivatedRoute,
    private wp: WordpressService

  ) { }

  ngOnInit() {

    // let id = this.route.snapshot.paramMap.get('id');
    
    // this.wp.getPostContent(16).subscribe((data: any) => {

    //   this.post = data[0];
    //   console.log(id)

    // }); 

  

    
    
   }

}
