import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-filter-request-list',
  templateUrl: './dynamic-filter-request-list.component.html',
  styleUrls: ['./dynamic-filter-request-list.component.scss']
})
export class DynamicFilterRequestListComponent {
  router = inject(Router)
  activateRoute = inject(ActivatedRoute)
  caseView(){
    this.router.navigate(['case-view'],{
      relativeTo: this.activateRoute
    })
  }
}
