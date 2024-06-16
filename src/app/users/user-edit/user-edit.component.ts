import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{

  activatedRoute = inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (res)=>{
        console.log(res)
      }
    })
  }

}
