import { HttpHeaders } from "@angular/common/http";

export class Config{
   
    public static getToken(){ return "Bearer " + localStorage.getItem('token'); }
   
    public static getHeaders(){
        const httpOptions = {
            headers: new HttpHeaders({
                'X-Requested-With': 'XMLHttpRequest', 
                'Content-Type': 'application/json',
                "Authorization" : this.getToken()
            })
          }; 
        return httpOptions;  
    }



}