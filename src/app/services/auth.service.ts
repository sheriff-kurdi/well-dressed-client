import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "https://localhost:5001/api/Auth";

  constructor(private http: HttpClient) { }

  login(email:string, password:string)
  {
    let formData: any = new FormData();
    formData.append("email", email);
    formData.append("Password", password);
    this.http.post<any>(this.url+"/login", formData).subscribe((res) =>{
      if(res.status == "Success")
      {
        localStorage.setItem("token",JSON.stringify(res.token))

      }else
      {
        console.log(res);
      }
      console.log(res.status);


    });
  }
}
