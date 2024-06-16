import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deacticate } from 'src/app/core/router-gaurd/router-gaurd';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, Deacticate {

  activatedRoute = inject(ActivatedRoute);

  constructor(){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (res)=>{
        console.log("data ", res)
      }
    })
  }

  canDeactivate(){
    if(confirm("Are you sure you want to leave this page?")){
      return of(true);
    }
    return of(false);
  };
}
