import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router, 
    private api:HttpServiceService,
    private fb: FormBuilder
   ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required]  
  })

  ngOnInit() {
  }


  login(){
    console.log(this.loginForm.value)
    this.api.post('auth/login', this.loginForm).subscribe(
      res=>{
        console.log('login response', res)
        // localStorage.setItem('token', res)
      }
    )
    this.router.navigateByUrl('home')
  }

}
