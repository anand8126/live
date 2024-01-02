import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export default class ForgetPasswordComponent implements OnInit {

  forgetForm!:FormGroup;

  fb=inject(FormBuilder);
  router=inject(Router);

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email:['',Validators.compose([Validators.required, Validators.email])]
    })
  }

  onSubmit(){
    console.log(this.forgetForm.value);
    this.router.navigate(['/reset/tokensdummaysakksadghdajsgj'])
  }

}
