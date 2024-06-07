import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    @Inject(LoginService) private loginService: LoginService
  ) { }

  httpClientMethods() {
    console.log("login clicked")
    // const data = new FormData();
    // formData.append('name', 'Roshan');
    // let data = {
    //   name: 'Roshan',
    // }

    // 1. request
    // this.loginService.requestData().pipe(
    //   map(res=>res.body)
    // )
    // .subscribe({
    //   next: (data)=>{
    //     if(data){
    //       console.log(data)
    //     }
    //   }
    // });

    // 2. post
    // const data = {
    //   "id": 10,
    //   "name": "Capital Safe Towns",
    //   "city": "Portland",
    //   "state": "OR",
    //   "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
    //   "availableUnits": 6,
    //   "wifi": true,
    //   "laundry": true
    // }

   
    // this.loginService.postData(data).subscribe({
    //   next: (data) => {
    //     if (data) {
    //       console.log(data)
    //     }
    //   }
    // });


    // 2. put
    const updateData = {
      name: "Roshan"
    }
    this.loginService.postData(updateData).subscribe({
      next: (data) => {
        if (data) {
          console.log(data)
        }
      }
    });

  }
}
