import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../users.service";
import { inject } from "@angular/core";

interface User {
    id: number;
    name: string;
}

export const resloveUser: ResolveFn<User> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User => {
    console.log("route ", route);
    let id = route.params['id'];
    let name = route.params['name'];

    let usersService = inject(UsersService);

    let details = usersService.getUsersParams(id, name);
    return details;

}


