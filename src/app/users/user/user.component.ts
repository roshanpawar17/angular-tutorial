import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: any;
  name: any;
  page: any;
  search: any;
  notFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id']
    // this.name = this.activatedRoute.snapshot.params['name']

    //this works when change in params 
    this.activatedRoute.params.subscribe((data)=>{
      this.id = data['id'];
      this.name = data['name']
      if(this.id >= 5){
        this.notFound = true;
      }else {
        this.notFound = false;
      }
    })

    // this.page = this.activatedRoute.snapshot.queryParams['page']
    // this.search = this.activatedRoute.snapshot.queryParams['search']

    this.activatedRoute.queryParams.subscribe((data)=>{
      this.page = data['page'];
      this.search = data['search']
    })
  }
}
