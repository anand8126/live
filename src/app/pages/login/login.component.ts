import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export  default class LoginComponent {
  fb=inject(FormBuilder);
  authService=inject(AuthService);
  router=inject(Router);


  loginFrom !: FormGroup;

  ngOnInit(){
    this.loginFrom=this.fb.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
     
    }
    )
  }

  onLogin(){
   
    this.authService.loginService(this.loginFrom.value)
    .subscribe({
      next:(res) =>{
        alert('Login is Success');
        localStorage.setItem("user_id", res.data._id);
        this.router.navigate(['/home']);
        this.loginFrom.reset();
      },
      error:(err)=>{
        console.log(err);
      }
    });
    console.log(this.loginFrom.value)
    this.router.navigate(['/home']);
    this.loginFrom.reset();
  }



}
