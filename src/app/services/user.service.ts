import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService{
    
    constructor(private http: HttpClient){ }

    hasAuthentication(){
        const token = this.getToken();
        if(token!= undefined && token.length>15) return true;
        else return false;
    }

    getToken(){ return localStorage.getItem('token'); }

    

}