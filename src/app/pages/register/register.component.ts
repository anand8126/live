import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../validations/confirm-password.validator';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

  fb=inject(FormBuilder);
  authService=inject(AuthService);
  router=inject(Router)

  regirsterFrom !: FormGroup;

  ngOnInit(){
    this.regirsterFrom=this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.compose([Validators.required, Validators.email])],
      userName:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },
    {
      validator:confirmPasswordValidator('password','confirmPassword')
    }
    
    )
  }

  onRegister(){
    this.authService.registerService(this.regirsterFrom.value)
    .subscribe({
      next:(res)=>{
        alert("User Created!");
        this.regirsterFrom.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    console.log(this.regirsterFrom.value);
    this.regirsterFrom.reset();
    this.router.navigate(['login']);
  }

}
