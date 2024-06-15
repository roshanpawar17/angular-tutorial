import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deacticate } from 'src/app/core/router-gaurd/router-gaurd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements Deacticate {
  canDeactivate(){
    if(confirm("Are you sure you want to leave this page?")){
      return of(true);
    }
    return of(false);
  };
}
