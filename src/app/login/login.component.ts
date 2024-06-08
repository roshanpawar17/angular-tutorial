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
    //   id: 16,
    //   city: "Portland",
    //   name: "Capital Safe Towns",
    //   state: "OR",
    //   photo: "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
    //   availableUnits: 6,
    //   wifi: true,
    //   laundry: true
    // }

  //  const formData = new FormData();
  //  formData.append('data', JSON.stringify(data));
    // this.loginService.postData(data).subscribe({
    //   next: (data) => {
    //     if (data) {
    //       console.log(data)
    //     }
    //   }
    // });


    // 3. put
    const updateData = {
      "id": 16,
      "name": "Roshan",
      "city": "Mumbai",
      "state": "Maharashtra",
      "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
    this.loginService.putData(updateData, updateData.id).subscribe({
      next: (data) => {
        if (data) {
          console.log(data)
        }
      }
    });

    // 4. patch
  //  const formData = new FormData();
  //  formData.append('data', JSON.stringify(updateData.city));
  let patchData = {
    city: "Mumbai"
  }
    // this.loginService.patchData(patchData).subscribe({
    //   next: (data) => {
    //     if (data) {
    //       console.log(data)
    //     }
    //   }
    // });;

    // 5. delete
    // this.loginService.deleteData(updateData.id).subscribe({
    //   next: (res)=>{
    //     console.log(res)
    //   }
    // })

    // 7. GET
    // this.loginService.getData().subscribe({
    //   next: (res)=>{
    //     console.log(res)
    //   }
    // })

    // 7. Head
    // this.loginService.headData().subscribe({
    //   next: (res)=>{
    //     console.log(res)
    //   }
    // })

    // 8. jsonp
    // this.loginService.jsonpData().subscribe({
    //   next: (res)=>{
    //     console.log(res)
    //   }
    // });

    // 9. options
    // this.loginService.optionsData().subscribe({
    //   next: (res)=>{
    //     console.log(res)
    //   }
    // });


  }
}
