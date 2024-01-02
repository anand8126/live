import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValidator } from '../../validations/confirm-password.validator';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export default class ResetComponent {


  resetForm!: FormGroup;

  fb = inject(FormBuilder);
  activatedRoute = inject(ActivatedRoute);
  route = inject(Router);

  token!: string;

  ngOnInit() {

    this.resetForm=this.fb.group({
      password:['', Validators.required],
      confirmPassword:['',Validators.required],
    },
    {
      validator:confirmPasswordValidator('password','confirmPassword')
    }
    )

    this.activatedRoute.params.subscribe(val => {
      this.token = val['token'];
    });

    console.log(this.token);
    
  }

  onReset() {
    console.log(this.resetForm.value);
    
  }

}
