import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:String="";
  password:String="";
  adminDetails:any={}//to hold admin details
  constructor(private toastr: ToastrService,private api:AdminApiService,private route:Router) {}


  login(){
    if(this.email&&this.password) {
      this.api.Authenticate().subscribe({
        next:(res:any)=>{
          const {email,password}=res//admin details-email& password
          if(email==this.email&& password==this.password){
            // alert("login successfull")
            this.toastr.success("Login Successful")
            this.adminDetails=res;//to assign admin details
            console.log(this.adminDetails);
            //to set the admin details into the localstorage
            localStorage.setItem("adminName",JSON.stringify(this.adminDetails.name));
            localStorage.setItem("adminPassword",JSON.stringify(this.adminDetails.password));

            
            setTimeout(()=>{
              this.route.navigateByUrl('/dashboard')

            },2000)
            
          }
          else{
            this.toastr.error("Invalid login")

          }
        }
      })

    }
   

  }

}
