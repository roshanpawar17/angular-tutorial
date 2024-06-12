import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  userService = inject(UsersService)

  users: any = [];

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res)=>{
        this.users = res;
      }
    })
  }
  

  getUsersQueryParamsAndFragments(){
    this.router.navigate(['/users', '6', 'Hasaan'], {
      queryParams: {
        'page': 4,
        'search': 'react'
      },
      fragment: 'load'
    })
  }

  onEditUser(user: any){
    this.router.navigate(['/users', user.id, user.name, 'edit'], {
      queryParamsHandling: 'preserve'
    })
  }
}
